import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuestionIndexItem from './question_index_item';
import FeedAnswerIndexItem from './feed_answer_index_item';
import TopicsListContainer from './topics_list_container';


class FeedIndex extends Component {

  componentDidMount() {
    this.props.fetchQuestions();
    this.props.fetchTopics();
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  getQuestionFromAnswer(answer) {
    for (let i = 0; i < this.props.questions.length; i++) {
      if (answer.question_id === this.props.questions[i].id) {
        return this.props.questions[i]
      };
    }
  };

  getAuthorFromItem(item) {
    for (let i = 0; i < this.props.users.length; i++) {
      if (item.author_id === this.props.users[i].id) {
        return this.props.users[i]
      };
    }
  };

  filterAnswers(array) {
    let result = [];
    let questions = [];
    for (let i = 0; i < array.length; i++) {
      if (questions.includes(array[i].question_id)) {
        continue
      } else {
        result.push(array[i]);
        questions.push(array[i].question_id)
      }
    }
    return result;
  }

  render() {
    // const questions = this.props.questions.map((question) => {
    //   return (
    //     <QuestionIndexItem
    //       key={question.created_at}
    //       question={question}
    //       author={this.getAuthorFromItem(question)}
    //       deleteQuestion={this.props.deleteQuestion}/>
    //   );
    // });
    //
    // let filteredAnswers = this.filterAnswers(this.props.answers) || []
    //
    // const answers = filteredAnswers.map((answer) => {
    //   return (
    //     <FeedAnswerIndexItem
    //       key={answer.created_at}
    //       answer={answer}
    //       author={this.getAuthorFromItem(answer)}
    //       question={this.getQuestionFromAnswer(answer)}
    //       body={answer.body}
    //       users={this.props.users} />
    //   );
    // });
    //

    // let combinedFeed = answers.concat(questions)

    const topics = this.props.topics;

    const combinedFeed = this.props.feedItems.map((item) => {
      const topic = topics[item.topic_id]
      if (this.props.questions.includes(item)) {
        return (
          <QuestionIndexItem
            key={item.created_at}
            question={item}
            topic={topic}
            author={this.getAuthorFromItem(item)}
            deleteQuestion={this.props.deleteQuestion}/>
        );
      } else {
        return (
          <FeedAnswerIndexItem
            key={item.created_at}
            answer={item}
            author={this.getAuthorFromItem(item)}
            question={this.getQuestionFromAnswer(item)}
            body={item.body}
            users={this.props.users}
            updateAnswer = {this.props.updateAnswer}
            currentUserId = {this.props.currentUserId} />
        );
      }
    })

    return (
      <div className="content-feed">
      <div className="feed-index-wrapper">
        <div className="topics-list-container">
          <TopicsListContainer
            selected = "0"
            topics = {this.props.topics} />
        </div>
        <div className="feed-index">
          <ul className="feed-list">
            {combinedFeed}
          </ul>
        </div>
      </div>
    </div>
    );
  }
};

export default FeedIndex;

import React from 'react';
import { Link } from 'react-router-dom';
import QuestionIndexItem from './question_index_item';
import FeedAnswerIndexItem from './feed_answer_index_item';
import TopicsListContainer from './topics_list_container';

class FeedIndex extends React.Component {

  componentDidMount() {
    this.props.fetchQuestions();
    this.props.fetchTopics();
  };

  getQuestionFromAnswer(answer) {
    for (let i = 0; i < this.props.allQuestions.length; i++) {
      if (answer.question_id === this.props.allQuestions[i].id) {
        return this.props.allQuestions[i]
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
    const topics = this.props.topics;
    const combinedFeed = this.props.feedItems.map((item) => {
      const topic = topics[item.topic_id] || {name: ""}
      if (this.props.questions.includes(item)) {
        return (
          <QuestionIndexItem
            key={item.created_at}
            question={item}
            topic={topic}
            deleteQuestion={this.props.deleteQuestion}/>
        );
      } else {
        return (
          <FeedAnswerIndexItem
            key={item.created_at}
            answer={item}
            question={this.getQuestionFromAnswer(item)}
            author={this.getAuthorFromItem(item)}
            users={this.props.users} />
        );
      }
    })
    return (
      <div className="content-feed">
        <div className="feed-index-wrapper">
          <div className="topics-list-container">
            <TopicsListContainer
              selected = "0"
              topics = {topics}
              followedTopics = {this.props.followedTopics} />
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

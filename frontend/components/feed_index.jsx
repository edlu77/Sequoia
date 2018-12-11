import React, { Component } from 'react';
import QuestionIndexItem from './question_index_item';
import FeedAnswerIndexItem from './feed_answer_index_item';
import CommentIndexContainer from './comment_index_container';

class FeedIndex extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
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

  render() {
    const questions = this.props.questions.map((question) => {
      return (
        <QuestionIndexItem
          key={question.created_at}
          question={question}
          author={this.getAuthorFromItem(question)}
          deleteQuestion={this.props.deleteQuestion}/>
      );
    });


    const answers = this.props.answers.map((answer) => {

      return (
        <div>
          <FeedAnswerIndexItem
            key={answer.created_at}
            answer={answer}
            author={this.getAuthorFromItem(answer)}
            question={this.getQuestionFromAnswer(answer)}
            body={answer.body} />
          <CommentIndexContainer
            answer={answer}
            users={this.props.users}/>
        </div>
      );
    });

    const combinedFeed = questions.concat(answers)

    return (
      <div className="feed-index-wrapper">
        <div className="feed-index">
          <ul className="feed-list">
            {combinedFeed}
          </ul>
        </div>
      </div>
    );
  }
};

export default FeedIndex;

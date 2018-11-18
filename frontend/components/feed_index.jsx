import React, { Component } from 'react';

import QuestionIndexItem from './question_index_item';

class FeedIndex extends Component {

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const questions = this.props.questions.map((question) => {

      return (
        <QuestionIndexItem
          key={question.id}
          question={question}
          deleteQuestion={this.props.deleteQuestion} />
      );
    });

    return (
      <div className="feed-index">
        <ul className="question-list">
          {questions}
        </ul>
      </div>
    );
  }
};

export default FeedIndex;

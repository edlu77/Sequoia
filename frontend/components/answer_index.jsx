import React from 'react';
import AnswerIndexItem from './answer_index_item';

class AnswerIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAnswers(this.props.questionId);
    this.props.fetchQuestion(this.props.questionId);
  };

  getAuthorFromItem(item) {
    for (let i = 0; i < this.props.users.length; i++) {
      if (item.author_id === this.props.users[i].id) {
        return this.props.users[i]
      };
    }
  };

  render() {

    const answers = this.props.answers.map ((answer) => {
      return (
        <AnswerIndexItem
          key={answer.id}
          answer={answer}
          question={this.props.question}
          users={this.props.users}
          author={this.getAuthorFromItem(answer)}
          updateAnswer = {this.props.updateAnswer}
          currentUserId = {this.props.currentUserId}/>
      );
    });

    return (
      <div className="answer-index">
        <ul className="answer-list">
          {answers}
        </ul>
      </div>
    );
  };
};

export default AnswerIndex;

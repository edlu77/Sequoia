import React from 'react';
import AnswerIndexItem from './answer_index_item';
import UpdateAnswerFormContainer from './update_answer_form_container';

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

  unStringify(array) {
    if (!array) {
      return []
    } else {
      let result = []
      for (let i = 0; i < array.length; i++) {
        result.push(parseInt(array[i]))
      }

      return result
    }
  }

  render() {

    const answers = this.props.answers.map ((answer) => {
      return (
        <div className='answer-edit'>
          <AnswerIndexItem
            key={answer.id}
            answer={answer}
            question={this.props.question}
            users={this.props.users}
            author={this.getAuthorFromItem(answer)}
            updateAnswer = {this.props.updateAnswer}
            currentUser = {this.props.currentUser} />
        </div>
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

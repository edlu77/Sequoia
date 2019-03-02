import React from 'react';
import AnswerIndexItem from './answer_index_item';

class AnswerIndex extends React.Component {

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
        <div className='answer-edit'>
          <AnswerIndexItem
            key={answer.created_at}
            answer={answer}
            question={this.props.question}
            users={this.props.users}
            author={this.getAuthorFromItem(answer)} />
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

import React from 'react';
import AnswerIndexItem from './answer_index_item';

class AnswerIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAnswers(this.props.questionId);
  };

  render() {
    const answers = this.props.answers.map ((answer) => {
      return (
        <AnswerIndexItem
          key={answer.id}
          answer={answer} />
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

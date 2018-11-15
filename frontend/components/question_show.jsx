import React from 'react';

class QuestionShow extends React.Component {
  componentDidMount() {
    this.props.fetchQuestion(this.props.question.id)
  };

  render() {
    return (
      <div>
        {this.props.question.title}
      </div>
    )
  };
}

export default QuestionShow;

import React from 'react';
import { Link } from 'react-router-dom';

class QuestionShow extends React.Component {

  componentDidMount() {

    this.props.fetchQuestion(this.props.match.params.questionId)
  };

  render() {
    const question = this.props.question || {title: ""};

    return (
      <div className="question-show">
        {question.topic}
        <br></br>
        {question.title}
        <br></br>
        <Link to="/">Back to main page</Link>
      </div>
    )
  };
}

export default QuestionShow;

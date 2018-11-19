import React from 'react';
import { Link } from 'react-router-dom';
import AnswerIndexContainer from './answer_index_container';

class QuestionShow extends React.Component {

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
    this.props.fetchAnswers(this.props.match.params.questionId);
  };

  render() {
    debugger
    const question = this.props.question || {title: ""};

    return (
      <div className="question-show">
        {question.topic}
        <br/>
        {question.title}
        <br/>
        <AnswerIndexContainer
          answers={this.props.answers}
          questionId={this.props.questionId} />
        <Link to="/">Back to main page</Link>
      </div>
    )
  };
}

export default QuestionShow;

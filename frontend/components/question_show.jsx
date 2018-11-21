import React from 'react';
import { Link } from 'react-router-dom';
import AnswerIndexContainer from './answer_index_container';
import CreateAnswerFormContainer from './create_answer_form_container';

class QuestionShow extends React.Component {

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
    this.props.fetchAnswers(this.props.match.params.questionId);
  };

  render() {
    const question = this.props.question || {topic: "", title: ""}
    const answers = this.props.answers || []
    return (
      <div className="question-show">
        {question.topic}
        <br/>
        {question.title}
        <br/>
        <CreateAnswerFormContainer
          questionId={this.props.questionId}/>
        <br/>
        <AnswerIndexContainer
          answers={answers}
          questionId={this.props.questionId}
          question={question}
          users={this.props.users} />
        <Link to="/">Back to main page</Link>
      </div>
    )
  };
}

export default QuestionShow;

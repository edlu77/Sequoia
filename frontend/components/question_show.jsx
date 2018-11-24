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
    
    const question = this.props.question || { title: ""}
    const answers = this.props.answers || []
    return (
      <div className="question-show-wrapper">
        <div className="question-show">
          <div className="question-show-topic">
          </div>
          <div className="question-show-title">
            {question.title}
          </div>
          <br/>
          <CreateAnswerFormContainer
            questionId={this.props.questionId}
            answers={answers} />
          <br/>
          <AnswerIndexContainer
            answers={answers}
            questionId={this.props.questionId}
            question={question}
            users={this.props.users} />
        </div>
      </div>
    )
  };
}

export default QuestionShow;

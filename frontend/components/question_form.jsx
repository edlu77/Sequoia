import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class QuestionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.question
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitAction(this.state).then(this.props.history.push('/'))
  };

  render () {

    return (
      <div className="question-form">
        <div className="question-form-header">
          <h3 className="add-question-tab-button">Add Question</h3>
        </div>

        <form className="question-form-content" onSubmit={this.handleSubmit}>
          <input
            className="question-title-input"
            type="text"
            value={this.state.title}
            onChange={this.update('title')}
            placeholder="Start your question with 'What', 'How', 'Why', etc."/>

          <input
            className="question-topic-input"
            type="text"
            value={this.state.topic}
            onChange={this.update('topic')}
            placeholder="Enter question topic (optional)"/>



          <div className="question-form-footer">
            <input className="question-submit-button" type="submit" value="Add Question" />
            <Link className="question-form-cancel" to='/'>Cancel</Link>
          </div>
        </form>
      </div>
    );
  };
};

export default QuestionForm;

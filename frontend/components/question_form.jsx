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
    this.props.submitAction(this.state)
    this.props.history.push('/')
  };

  render () {

    return (
      <div className="question-form">
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Your Question
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')} />
          </label>
          <br></br>
          <label>Topic
            <input
              type="text"
              value={this.state.topic}
              onChange={this.update('topic')} />
          </label>

          <input type="submit" value={this.props.formType} />
        </form>
        <Link to='/'>Back to main page</Link>
      </div>
    );
  };
};

export default QuestionForm;

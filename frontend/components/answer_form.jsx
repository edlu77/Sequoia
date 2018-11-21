import React from 'react';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.answer.body,
      questionId: this.props.questionId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createAnswer(this.state)
    this.props.history.push(`/questions/${state.questionId}`)
  }

  render() {
    return (
      <div>
        <form className="answer-form" onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.body}
            onChange={this.update("body")} />
          <input class="answer-submit-button" type="submit" value="Answer" />
        </form>
      </div>
    )
  };
};

export default AnswerForm;

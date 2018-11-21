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

  update() {
    return (e) => {
      this.setState({body: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createAnswer(this.state)
  }

  render() {
    return (
      <div>
        <form className="answer-form" onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.body}
            onChange={this.update()} />
          <input type="submit" value="Comment" />
        </form>
      </div>
    )
  };
};

export default AnswerForm;

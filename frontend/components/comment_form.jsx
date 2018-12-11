import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      parentId: this.props.parentId,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
  }

  handleChange(value) {
    this.setState({ body: value })
  }

  render() {
    return (
      <div className="comment-submit-form">
        <textarea
          className="comment-submit-area"
          onChange={this.update("body")}
          value={this.state.body}>
        </textarea>

        <button className="comment-submit-button" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default CommentForm;

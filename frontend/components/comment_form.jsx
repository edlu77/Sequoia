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
    this.setState({body: ""});
  }

  handleChange(value) {
    this.setState({ body: value })
  }

  render() {
    return (
      <div className="comment-submit-form">
        <input
          type="text"
          className="comment-submit-area"
          onChange={this.update("body")}
          placeholder="Add a comment..."
          value={this.state.body}>
        </input>

        <button className="comment-submit-button" onClick={this.handleSubmit}>Comment</button>
      </div>
    )
  }
}

export default CommentForm;

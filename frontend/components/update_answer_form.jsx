import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactQuill from 'react-quill';

let quillModules = {
	toolbar: [
		['bold', 'italic'],
		[{'list': 'ordered'}, {'list': 'bullet'}],
		['link']
	],
};

class UpdateAnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			currentUser: this.props.currentUser,
      body: this.props.answer.body,
      questionId: this.props.questionId,
      answerId: this.props.answerId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
		this.handleFile = this.handleFile.bind(this);
  };

  handleSubmit(e) {
		e.preventDefault();
		if (this.state.body === "<p><br></p>") {
			return
		}
		this.props.updateAnswer(this.state)
  }

  handleChange(value) {
    this.setState({ body: value })
  }

	handleFile(e) {
		const reader = new FileReader();
		const file = e.currentTarget.files[0];
		reader.onloadend = () => {
			const newBody = this.state.body + `<img src=\"${reader.result}\"></img>`;
			this.setState({ body: newBody });
		}
		if (file) {
			reader.readAsDataURL(file);
		}
	}

  render() {
    return (
      <div className="answer-submit-form">

				<div className="answer-submit-form-userinfo">
					{this.state.currentUser.username}
				</div>
				<input type="file" onChange={this.handleFile}></input>

        <ReactQuill
					className="answer-submit-form-input"
          theme="snow"
          onChange={this.handleChange}
          value={this.state.body}
          formats={this.formats}
          modules={quillModules}
					placeholder="Write your answer" />
				<button className="answer-submit-button" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  };
};

export default UpdateAnswerForm;

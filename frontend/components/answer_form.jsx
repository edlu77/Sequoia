import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactQuill from 'react-quill';

let quillModules = {
			toolbar: [
				['bold', 'italic'],
				[{'list': 'ordered'}, {'list': 'bullet'}],
				['link']
			]
		};

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			currentUser: this.props.currentUser,
      body: this.props.answer.body,
      questionId: this.props.questionId,
			images: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
		this.handleFile = this.handleFile.bind(this);
  };

  handleSubmit(e) {
    // e.preventDefault();
    // this.props.createAnswer(this.state)
		// this.setState({body: ""})

		e.preventDefault();
		const formData = new FormData();
		formData.append('answer[body]', this.state.body);
		formData.append('answer[questionId]', this.state.questionId);
		if (this.state.images) {
			for (let i = 0; i < this.state.images.length; i++) {
				formData.append('answer[images][]', this.state.images[i]);
			}
		}
		this.props.createAnswer(formData)
		this.setState({body: ""})
  }


  handleChange(value) {
    this.setState({ body: value })
  }

	handleFile(e) {
		this.setState({images: e.currentTarget.files})
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

export default AnswerForm;

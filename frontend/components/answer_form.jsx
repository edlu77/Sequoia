import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactQuill from 'react-quill';

var quillModules = {
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
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  };

  // stripHtml(html){
  //   var temporalDivElement = document.createElement("div");
  //   temporalDivElement.innerHTML = html;
  //   return temporalDivElement.textContent || temporalDivElement.innerText || "";
  // }

  handleSubmit(e) {
    e.preventDefault();
    // this.state.body = this.stripHtml(this.state.body)
    this.props.createAnswer(this.state)
		this.setState({body: ""})
  }

  handleChange(value) {
    this.setState({ body: value })
  }


  render() {

    return (
      <div className="answer-submit-form">

				<div className="answer-submit-form-userinfo">
					{this.state.currentUser.username}
				</div>

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

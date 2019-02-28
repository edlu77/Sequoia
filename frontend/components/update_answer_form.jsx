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
			answer: this.props.answer,
			id: this.props.id,
			currentUser: this.props.currentUser,
      body: this.props.answer.body,
      questionId: this.props.questionId,
			editOpen: this.props.editOpen,
			upvotes: this.props.upvotes,
			voters: this.props.answer.voters,
			downvoters: this.props.answer.downvoters,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
		this.handleFile = this.handleFile.bind(this);
		this.showEdit = this.showEdit.bind(this);
		this.upvote = this.upvote.bind(this);
		this.downvote = this.downvote.bind(this);
		this.deleteAnswer = this.deleteAnswer.bind(this);
  };

  handleSubmit(e) {
		e.preventDefault();
		if (this.state.body === "<p><br></p>") {
			return
		}
		this.props.updateAnswer({
			author_id: this.state.answer.author_id,
			body: this.state.body,
			id: this.state.id,
			question_id: this.state.answer.questionId,
			topic_id: this.state.answer.topic_id,
			upvotes: this.state.upvotes,
			voters: this.state.voters,
		})
		this.setState({editOpen: 'closed'})
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

	showEdit(e) {
		this.setState({editOpen:'open'});
	}

	upvote (e) {
		let upvotes = this.state.upvotes;
		let voters = this.state.voters;
		let downvoters = this.state.downvoters;
		if (this.props.answer.voters.includes(this.props.currentUserId.toString())) {
			this.props.answer.voters.splice(this.props.answer.voters.indexOf(this.props.currentUserId.toString()), 1)
			this.setState({upvotes: upvotes-1})
		} else {
			if (downvoters.includes(this.props.currentUserId.toString())) {
				downvoters.splice(downvoters.indexOf(this.props.currentUserId.toString()), 1)
				this.setState({upvotes: upvotes+1, downvoters: downvoters})
			}
			voters.push(this.props.currentUserId)
			this.setState({upvotes: upvotes+1, voters: voters});
		}

		this.handleSubmit(e)
	}

	downvote (e) {
		const upvotes = this.state.upvotes;
		if (this.props.answer.downvoters.includes(this.props.currentUserId.toString())) {
			this.props.answer.downvoters.splice(this.props.answer.downvoters.indexOf(this.props.currentUserId.toString()), 1)
			this.setState({upvotes: upvotes+1})
		} else {
			if (this.props.answer.voters.includes(this.props.currentUserId.toString())) {
				this.props.answer.voters.splice(this.props.answer.voters.indexOf(this.props.currentUserId.toString()), 1)
				this.setState({upvotes: upvotes-1})
			}
			this.setState({upvotes: upvotes-1})
			this.props.answer.downvoters.push(this.props.currentUserId)
		}
		this.props.updateAnswer(this.props.answer)
	}

	deleteAnswer (e) {
		this.props.deleteAnswer(this.state.id)
	}

  render() {
		console.log(this.state)
    return (
			<div>
				<div className={`answer-body-${this.state.editOpen}`}
					dangerouslySetInnerHTML={{__html: this.state.body}}>
				</div>
	      <div className={`answer-update-form-${this.state.editOpen}`}>

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

				<div className='answer-options'>
					<button className="answer-upvote-button" onClick={this.upvote}>
						Upvote · {this.props.upvotes}
					</button>
					<button className="answer-update-button" onClick={this.showEdit}>
						Update
					</button>
					<button className="answer-delete-button" onClick={this.deleteAnswer}>
						Delete
					</button>
					<button className="answer-downvote-button" onClick={this.downvote}>
						Downvote
					</button>
				</div>
		</div>
    )
  };
};

export default UpdateAnswerForm;

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

const MONTHS = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
}

class UpdateAnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			answer: this.props.answer,
			questionId: this.props.questionId,
			currentUser: this.props.currentUser,
			editOpen: this.props.editOpen,
      body: this.props.answer.body,
			edited: this.props.answer.body,
			author: this.props.author,
			upvotes: this.props.answer.upvotes,
			voters: this.props.answer.voters,
			downvoters: this.props.answer.downvoters,
			upvoted: (this.props.answer.voters.includes(this.props.currentUser.id.toString())) ? 'upvoted' : '',
			downvoted: (this.props.answer.downvoters.includes(this.props.currentUser.id.toString())) ? 'downvoted' : '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
		this.handleFile = this.handleFile.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.upvote = this.upvote.bind(this);
		this.downvote = this.downvote.bind(this);
		this.deleteAnswer = this.deleteAnswer.bind(this);
  };

  handleSubmit(e) {
		e.preventDefault();
		if (this.state.edited === "<p><br></p>") {
			return
		}
		this.props.updateAnswer({
			answerId: this.state.answer.id,
			voters: this.state.voters,
			downvoters: this.state.downvoters,
			upvotes: this.state.upvotes,
			body: this.state.edited,
		})
		this.setState({editOpen: 'closed'})
  }

  handleChange(value) {
    this.setState({ edited: value })
  }

	handleFile(e) {
		const reader = new FileReader();
		const file = e.currentTarget.files[0];
		reader.onloadend = () => {
			const newBody = this.state.edited + `<img src=\"${reader.result}\"></img>`;
			this.setState({ edited: newBody });
		}
		if (file) {
			reader.readAsDataURL(file);
		}
	}

	handleUpdate(e) {
		if (this.state.editOpen === 'open') {
			this.setState({edited: this.state.body, editOpen:(this.state.editOpen === 'closed') ? 'open' : 'closed'});
		} else {
			this.setState({body: this.state.edited, editOpen:(this.state.editOpen === 'closed') ? 'open' : 'closed'});
		}
	}

	upvote (e) {
		let upvotes = this.state.upvotes;
		let voters = this.state.voters;
		let downvoters = this.state.downvoters;
		if (voters.includes(this.state.currentUser.id.toString())) {
			voters.splice(voters.indexOf(this.state.currentUser.id.toString()), 1)
			upvotes--
		} else {
			if (downvoters.includes(this.state.currentUser.id.toString())) {
				downvoters.splice(downvoters.indexOf(this.state.currentUser.id.toString()), 1)
				upvotes++
			}
			voters.push(this.state.currentUser.id.toString())
			upvotes++
		}
		this.setState({
			upvotes: upvotes,
			upvoted: (voters.includes(this.state.currentUser.id.toString())) ? 'upvoted' : '',
			downvoted: (downvoters.includes(this.state.currentUser.id.toString())) ? 'downvoted' : ''
		})
		this.props.updateAnswer({
			answerId: this.state.answer.id,
			voters: voters,
			downvoters: downvoters,
			upvotes: upvotes,
			body: this.state.body,
		})
	}

	downvote (e) {
		let upvotes = this.state.upvotes;
		let voters = this.state.voters;
		let downvoters = this.state.downvoters;
		if (downvoters.includes(this.state.currentUser.id.toString())) {
			downvoters.splice(downvoters.indexOf(this.state.currentUser.id.toString()), 1)
			upvotes++
		} else {
			if (voters.includes(this.state.currentUser.id.toString())) {
				voters.splice(voters.indexOf(this.state.currentUser.id.toString()), 1)
				upvotes--
			}
			upvotes--
			downvoters.push(this.state.currentUser.id.toString())
		}
		this.setState({
			upvotes: upvotes,
			upvoted: (voters.includes(this.state.currentUser.id.toString())) ? 'upvoted' : '',
			downvoted: (downvoters.includes(this.state.currentUser.id.toString())) ? 'downvoted' : ''
		})
		this.props.updateAnswer({
			answerId: this.state.answer.id,
			voters: voters,
			downvoters: downvoters,
			upvotes: upvotes,
			body: this.state.body,
		})
	}

	deleteAnswer (e) {
		this.props.deleteAnswer(this.state.answer.id)
	}

  render() {
		const date = new Date(this.state.answer.created_at)
    return (
			<div className='answer-edit'>
				<div className={`feed-answer-header ${this.state.editOpen}`}>
					{this.state.author.username}
					<div className="feed-answer-created-time">
						{`Answered ${MONTHS[(date.getMonth()+1)] + " " + date.getDate() + ", " + date.getFullYear()}`}
					</div>
				</div>

				<div className={`answer-body ${this.state.editOpen}`}
					dangerouslySetInnerHTML={{__html: this.state.edited}}>
				</div>
	      <div className={`answer-submit-form ${this.state.editOpen}`}>

					<div className="answer-submit-form-userinfo">
						{this.state.currentUser.username}
					</div>
					<input type="file" onChange={this.handleFile}></input>

	        <ReactQuill
						className="answer-submit-form-input"
	          theme="snow"
	          onChange={this.handleChange}
	          value={this.state.edited}
	          formats={this.formats}
	          modules={quillModules}
						placeholder="Write your answer" />
					<div className="form-buttons">
						<button className="answer-submit-button" onClick={this.handleSubmit}>Submit</button>
					</div>
	      </div>

				<div className='answer-options'>
					<button className={`answer-upvote-button ${this.state.upvoted}`} onClick={this.upvote}>
						Upvote · {this.state.upvotes}
					</button>
					<button className="answer-update-button" onClick={this.handleUpdate}>
						{(this.state.editOpen === 'open') ? 'Cancel Edit' : 'Edit Answer'}
					</button>
					<button className="answer-delete-button" onClick={this.deleteAnswer}>
						Delete
					</button>
					<button className={`answer-downvote-button ${this.state.downvoted}`} onClick={this.downvote}>
						Downvote
					</button>
				</div>
		</div>
    )
  };
};

export default UpdateAnswerForm;

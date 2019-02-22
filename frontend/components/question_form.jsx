import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class QuestionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.question.title,
      author_id: this.props.question.author_id,
      topic: "",
      topic_id: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  componentDidMount() {
    this.props.fetchTopics();
  }

  getIdFromName(topicName) {
    for (let i = 0; i < this.props.topics.length; i++) {
      if (topicName === this.props.topics[i].name) {
        return this.props.topics[i].id;
      };
    };
    return null;
  };

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    };
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitAction({
      title: this.state.title,
      author_id: this.state.author_id,
      topic_id: this.getIdFromName(this.state.topic),
    }).then(this.props.closeModal());
  };

  handleClick(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  render () {

    const topics = this.props.topics.map((topic) => {
      if (topic.name === "Feed") {
        return (
          <option value={topic.name}>None</option>
        )
      } else {
        return (
          <option value={topic.name}>{topic.name}</option>
        )
      }
    })

    return (
      <div className="question-form">
        <div className="question-form-header">
          <h3 className="add-question-tab-button">Add Question</h3>
        </div>

        <form className="question-form-content" onSubmit={this.handleSubmit}>
          <input
            className="question-title-input"
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
            placeholder="Start your question with &quot;What&quot;, &quot;How&quot;, &quot;Why&quot;, etc."/>

          <div className="question-topic-input">
            <span className="question-topic-input-label">Select topic:</span>
            <select className="question-topic-menu" onChange={this.update("topic")}>
              {topics}
            </select>
          </div>

          <div className="question-form-footer">
            <input className="question-submit-button" type="submit" value="Add Question" />
            <button className="question-form-cancel" onClick={this.handleClick}>Cancel</button>
          </div>
        </form>
      </div>
    );
  };
};

export default QuestionForm;

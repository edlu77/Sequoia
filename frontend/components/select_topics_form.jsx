import React from 'react';
import { Link } from 'react-router-dom';

class SelectTopicsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: this.props.followedTopics};
    this.handleClick = this.handleClick.bind(this);
  }

  findTopic(name) {
    const topics = Object.values(this.props.topics);
    for (let i = 0; i< topics.length; i++) {
      if (topics[i].name === name) return topics[i].id.toString();
    }
  }

  handleClick(e) {
    let selectedTopics = this.state.selected;
    const topicId = this.findTopic(e.currentTarget.value)
    if (selectedTopics.includes(topicId)) {
      let idx = selectedTopics.indexOf(topicId);
      selectedTopics = selectedTopics.slice(0, idx).concat(selectedTopics.slice(idx+1))
    } else {
      selectedTopics.push(topicId);
    }
    this.setState({selected: selectedTopics});

    let user = this.props.currentUser;
    user.followed_topics = selectedTopics;
    this.props.followTopic(user);
  }

  render() {
    const allTopics = Object.values(this.props.topics).slice(1).map((topic) => {
      const selected = this.state.selected.includes(topic.id.toString())
      return (
          <label key={topic.id}>
            <input
              type="checkbox"
              value={topic.name}
              checked={selected}
              onChange={this.handleClick}
            />
            {topic.name}
          <br/>
          </label>
      )
    })

    return (
      <div className="topics-select">
        {allTopics}
      </div>
    )
  }
}

export default SelectTopicsForm;

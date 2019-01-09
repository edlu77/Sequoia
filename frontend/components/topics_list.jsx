import React from 'react';
import { Link } from 'react-router-dom';

class TopicsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchTopics();
  }

  handleClick(e) {
    this.setState({value: e.currentTarget.innerText});
  }

  render() {
    const allTopics = Object.values(this.props.topics).map((topic) => {
      const topicHighlight = (this.props.selected.name === topic.name) ? 'clicked' : 'unclicked';
      if (topic.name === "Feed") {
        return (
          <li key={topic.id} className={`topics-list-link ${topicHighlight}`} >
            <Link
              onClick={this.handleClick}
              className="index-topic-name"
              to="/">{topic.name}
            </Link>
          </li>
        )
      } else {
        return (
          <li key={topic.id} className={`topics-list-link ${topicHighlight}`} >
            <Link
              onClick={this.handleClick}
              className="index-topic-name"
              to={`/topics/${topic.id}`}>{topic.name}
            </Link>
          </li>
        )
      }
    });

    return (
      <ul className="topics-list">
        {allTopics}
      </ul>
    )
  }
}

export default TopicsList;

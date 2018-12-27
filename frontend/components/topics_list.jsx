import React from 'react';
import { Link } from 'react-router-dom';

class TopicsList extends React.Component {


  componentDidMount() {
    this.props.fetchTopics();
  }

  render() {
    const allTopics = Object.values(this.props.topics).map((topic) => {
      return (
        <li key={topic.id} className="topics-list-link">
          <Link
            className="index-topic-name"
            to={`/topics/${topic.id}`} >{topic.name}
          </Link>
        </li>
      )
    });

    return (
      <ul className="topics-list">
        <li className="topics-list-link">
          <Link
            className="index-topic-name"
            to="/" >Feed
          </Link>
        </li>
        {allTopics}
      </ul>
    )
  }
}

export default TopicsList;

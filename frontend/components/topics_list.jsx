import React from 'react';
import { Link } from 'react-router-dom';

class TopicsList extends React.Component {


  componentDidMount() {
    this.props.fetchTopics();
  }

  render() {
    const allTopics = Object.values(this.props.topics).map((topic) => {
      return (
        <li key={topic.id}>
          <Link
            className="index-topic-name"
            to={`/topics/${topic.id}`} >{topic.name}
          </Link>
        </li>
      )
    });

    return (
      <ul>
        {allTopics}
      </ul>
    )
  }
}

export default TopicsList;

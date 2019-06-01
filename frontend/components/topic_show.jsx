import React from 'react';
import { Link } from 'react-router-dom';
import QuestionIndexItem from './question_index_item';
import FeedAnswerIndexItem from './feed_answer_index_item';
import TopicsListContainer from './topics_list_container';

class TopicShow extends React.Component {

  componentDidMount() {
    this.props.fetchQuestions();
    this.props.fetchTopics();
  };

  getQuestionFromAnswer(answer) {
    for (let i = 0; i < this.props.questions.length; i++) {
      if (answer.question_id === this.props.questions[i].id) {
        return this.props.questions[i]
      };
    }
  };

  getAuthorFromItem(item) {
    for (let i = 0; i < this.props.users.length; i++) {
      if (item.author_id === this.props.users[i].id) {
        return this.props.users[i]
      };
    }
  };

  render() {
    const topic = this.props.topic || ""
    const combinedFeed = this.props.feedItems.map((item) => {
      if (this.props.questions.includes(item)) {
        return (
          <QuestionIndexItem
            key={item.created_at}
            question={item}
            topic={topic}
            author={this.getAuthorFromItem(item)}/>
        );
      } else {
        return (
          <FeedAnswerIndexItem
            key={item.created_at}
            answer={item}
            question={this.getQuestionFromAnswer(item)}
            author={this.getAuthorFromItem(item)}
            users={this.props.users} />
        );
      }
    })
    return (
      <div className="content-feed">
        <div className="topic-show-wrapper">

          <div className="topics-list-container">
            <TopicsListContainer
              selected={this.props.match.params.topicId}
              topics={this.props.topics} />
          </div>

          <div className="topic-show">
            <ul className="feed-list">
              <li className="topic-header">
                {topic.name}
              </li>
              {combinedFeed}
            </ul>
          </div>

        </div>
      </div>
    )
  }
};

export default TopicShow;

import React from 'react';
import { Link } from 'react-router-dom';
import QuestionIndexItem from './question_index_item';
import FeedAnswerIndexItem from './feed_answer_index_item';
import TopicsListContainer from './topics_list_container';

class TopicShow extends React.Component {

  componentDidMount() {
    this.props.fetchTopics()
    this.props.fetchQuestions()
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
    const combinedFeed = this.props.feedItems.map((item) => {
      const topic = this.props.topic || {name: "Miscellaneous"}
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
            author={this.getAuthorFromItem(item)}
            question={this.getQuestionFromAnswer(item)}
            body={item.body}
            users={this.props.users} />
        );
      }
    })

    return (
      <div className="content-feed">
        <div className="topic-show-wrapper">
          <div className="topics-list-container">
            <TopicsListContainer />
          </div>
          <div className="topic-show">
            <ul>
              {combinedFeed}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
// <div className="topic-show-title">
//   {this.props.topic.name}
// </div>

export default TopicShow;

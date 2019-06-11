import React from 'react';
import { Link } from 'react-router-dom';

class SelectTopicsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: this.props.currentUser.followed_topics};
    // this.handleClick = this.handleClick.bind(this)
  }

  // handleClick(e) {
  //   this.setState({value: e.currentTarget.innerText});
  // }

  render() {
    const allTopics = Object.values(this.props.topics).slice(1).map((topic) => {
      return (
        <li>
          {topic.name}
        </li>
      )
    })

    return (
      <ul className="topics-list">
        {allTopics}
      </ul>
    )
  }
}

export default SelectTopicsForm;

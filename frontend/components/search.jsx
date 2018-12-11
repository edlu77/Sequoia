import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: "", questions: []}
    this.handleSearch = this.handleSearch.bind(this)
    this.resetSearch = this.resetSearch.bind(this)
  }



  handleSearch(e) {
    if (e.target.value === "") {
      this.resetSearch(e);
    } else {
      this.props.fetchQuestions()
      const filteredQuestions = this.props.questions.filter(
        (question) => question.title.includes(e.target.value)
      )
      this.setState({
        query: e.target.value,
        questions: filteredQuestions
      })
    }
  }

  resetSearch(e) {
    this.setState({query: e.target.value, questions: []})
  }

  getMatches(questions) {
    return Object.values(questions).map((question) => {
      return (
        <li>
          <Link
            onClick={this.resetSearch}
            to={`/questions/${question.id}`}>{question.title}
          </Link>
        </li>
      )
    })
  }

  render() {

    const matches = this.getMatches(this.state.questions)
    return (
      <div className="search-form">
        <form>
          <input
            className="search-input"
            type="text"
            placeholder="Search seQuoia"
            onKeyUp={this.handleSearch} />
        </form>
        <ul className="search-match-list">
          {matches}
        </ul>
      </div>
    )
  }
}

export default Search;

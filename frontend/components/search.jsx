
import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: "", questions: this.props.questions}
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(e) {
    this.props.fetchQuestions()
    const filteredQuestions = this.props.questions.filter(
      (question) => question.title.includes(e.target.value)
    )
    this.setState({
      query: e.target.value,
      questions: filteredQuestions
    })
    console.log(this.state.questions)
  }

  getTitles(object) {
    return Object.values(object).map((object) => {
      return (
        <li><{object.title}</li>
    )})
  }

  render() {
    const titles = this.getTitles(this.state.questions)
    return (
      <div className="search-form">
        <form>
          <input
            className="search-input"
            type="text"
            placeholder="Search for..."
            onKeyUp={this.handleSearch} />
        </form>
        <ul>
          {titles}
        </ul>
      </div>
    )
  }
}

export default Search;

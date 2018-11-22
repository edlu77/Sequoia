import { connect } from 'react-redux';
import Search from './search';
import { fetchQuestions } from '../actions/question_actions';

const mapStateToProps = (state) => {
  const questions = Object.values(state.entities.questions)
  debugger
  return ({
    query: "",
    questions: questions,
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchQuestions: () => dispatch(fetchQuestions())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

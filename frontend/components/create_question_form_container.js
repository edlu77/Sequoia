import { connect } from 'react-redux';
import { createQuestion } from '../actions/question_actions';
import { openModal, closeModal } from '../actions/modal_actions';
import { fetchTopics } from '../actions/topic_actions';
import QuestionForm from './question_form';

const mapStateToProps = (state) => {
  const topics = Object.values(state.entities.topics);
  return ({
    question: {title: "", topic_id: null, author_id: state.session.id},
    topics: topics,
    formType: "create question",
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    submitAction: (question) => dispatch(createQuestion(question)),
    closeModal: () => dispatch(closeModal()),
    fetchTopics: () => dispatch(fetchTopics()),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);

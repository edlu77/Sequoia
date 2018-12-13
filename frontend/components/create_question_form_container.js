import { connect } from 'react-redux';
import { createQuestion } from '../actions//question_actions';
import { openModal, closeModal } from '../actions/modal_actions';
import QuestionForm from './question_form';

const mapStateToProps = (state) => {
  return ({
    question: {title: "", topic: "", author_id: state.session.id},
    formType: "create question",
  })
};

// const mapDispatchToProps = (dispatch) => {
//   return ({
//     submitAction: (question) => dispatch(createQuestion(question)),
//   })
// };

const mapDispatchToProps = (dispatch) => {
  return ({
    submitAction: (question) => dispatch(createQuestion(question)),
    closeModal: () => dispatch(closeModal())
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);

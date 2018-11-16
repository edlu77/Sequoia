import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { createQuestion } from '../actions//question_actions';

const mapStateToProps = (state) => {
  
  return ({
    question: {title: "", topic: "", author_id: state.session.id},
    formType: "create question",
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    submitAction: (question) => dispatch(createQuestion(question)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);

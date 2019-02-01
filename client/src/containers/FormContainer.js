import { connect } from 'react-redux';
import Form from '../components/Form';
import { submitTemplate, updateField } from '../actions/actions';

const mapStateToProps = state => ({
  form: state.form,
  templates: state.restOfState.templates,
  currentUser: state.restOfState.currentUser,
});

const mapDispatchToProps = dispatch => ({
  handleTemplateSubmission: (q) => {
    dispatch(submitTemplate(q));
  },
  updateField: (q) => {
    dispatch(updateField(q));
  },
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default SearchContainer;

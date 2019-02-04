import { connect } from 'react-redux';
import Form from '../components/Form/Form';
import { updateField, updateDisplayedTemplate } from '../actions/actions';

const mapStateToProps = state => ({
  form: state.formReducer,
  templates: state.templatesReducer,
  currentUser: { name: state.userReducer.name, email: state.userReducer.email },
});

const mapDispatchToProps = dispatch => ({
  updateField: (q) => {
    dispatch(updateField(q));
  },
  updateDisplayedTemplate: (q) => {
    dispatch(updateDisplayedTemplate(q));
  },
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default SearchContainer;

import { connect } from 'react-redux';
import Form from '../components/Form/Form';
import {
  updateField,
  updateDisplayedTemplate,
  addRecipient,
  removeRecipient,
  updateResponse,
  deleteRecipients,
  updateInjection,
} from '../actions/actions';

const mapStateToProps = state => ({
  form: state.formReducer,
  templates: state.templatesReducer,
  recipients: state.recipientsReducer,
  emailGroups: state.emailGroupsReducer,
  currentUser: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  updateField: (q) => {
    dispatch(updateField(q));
  },
  updateDisplayedTemplate: (q) => {
    dispatch(updateDisplayedTemplate(q));
  },
  updateResponse: (q) => {
    dispatch(updateResponse(q));
  },
  addRecipient: (q) => {
    dispatch(addRecipient(q));
  },
  deleteRecipients: (q) => {
    dispatch(deleteRecipients(q));
  },
  removeRecipient: (q) => {
    dispatch(removeRecipient(q));
  },
  updateInjection: (q) => {
    dispatch(updateInjection(q));
  },
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default SearchContainer;

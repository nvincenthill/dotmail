import { connect } from 'react-redux';
import App from '../components/App/App';
import {
  updateUser,
  addTemplate,
  deleteTemplates,
  addEmailGroup,
  deleteEmailGroups,
  deleteRecipients,
} from '../actions/actions';

const mapStateToProps = state => ({
  currentUser: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  updateUser: (q) => {
    dispatch(updateUser(q));
  },
  addTemplate: (q) => {
    dispatch(addTemplate(q));
  },
  addEmailGroup: (q) => {
    dispatch(addEmailGroup(q));
  },
  deleteTemplates: (q) => {
    dispatch(deleteTemplates(q));
  },
  deleteEmailGroups: (q) => {
    dispatch(deleteEmailGroups(q));
  },
  deleteRecipients: (q) => {
    dispatch(deleteRecipients(q));
  },
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default SearchContainer;

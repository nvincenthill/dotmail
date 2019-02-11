import { connect } from 'react-redux';
import App from '../components/App/App';
import { updateUser, addTemplate, deleteTemplates } from '../actions/actions';

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
  deleteTemplates: (q) => {
    dispatch(deleteTemplates(q));
  },
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default SearchContainer;

import { connect } from 'react-redux';
import App from '../components/App/App';
import { updateUser } from '../actions/actions';

const mapStateToProps = state => ({
  currentUser: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  updateUser: (q) => {
    dispatch(updateUser(q));
  },
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default SearchContainer;

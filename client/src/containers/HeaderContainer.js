import { connect } from 'react-redux';
import Header from '../components/Header/Header';

const mapStateToProps = state => ({
  currentUser: state.userReducer,
});

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;

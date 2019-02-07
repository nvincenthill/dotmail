import { connect } from 'react-redux';
import Response from '../components/Response/Response';

const mapStateToProps = state => ({
  response: state.responseReducer,
});

const ResponseContainer = connect(mapStateToProps)(Response);

export default ResponseContainer;

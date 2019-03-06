import { UPDATE_USER } from '../actions/actionTypes';

const initialState = {
  name: '',
  email: '',
  uid: '',
  isUserAuthenticated: false,
  role: '',
  AWSAccessKeyId: '',
  AWSSecretKey: '',
  useAWSSES: false,
};

export default function userReducer(state = initialState, action) {
  if (action.type === UPDATE_USER) {
    const {
      name,
      email,
      uid,
      isUserAuthenticated,
      role,
      AWSAccessKeyId,
      AWSSecretKey,
      useAWSSES,
    } = action;
    return {
      name,
      email,
      uid,
      isUserAuthenticated,
      role,
      AWSAccessKeyId,
      AWSSecretKey,
      useAWSSES,
    };
  }
  return state;
}

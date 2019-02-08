import { UPDATE_USER } from '../actions/actionTypes';

const initialState = {
  name: '',
  email: '',
  uid: '',
  isUserAuthenticated: false,
};

export default function userReducer(state = initialState, action) {
  if (action.type === UPDATE_USER) {
    const {
      name, email, uid, isUserAuthenticated,
    } = action;
    return {
      name,
      email,
      uid,
      isUserAuthenticated,
    };
  }
  return state;
}

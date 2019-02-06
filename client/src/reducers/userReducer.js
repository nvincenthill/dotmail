import { UPDATE_USER } from '../actions/actionTypes';

const initialState = {
  name: process.env.NAME,
  email: process.env.EMAIL,
};

export default function userReducer(state = initialState, action) {
  if (action.type === UPDATE_USER) {
    return {
      name: action.name,
      email: action.email,
    };
  }
  return state;
}

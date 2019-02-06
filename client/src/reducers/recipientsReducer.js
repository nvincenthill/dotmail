import { ADD_RECIPIENT } from '../actions/actionTypes';

const initialState = [];

export default function recipientsReducer(state = initialState, action) {
  if (action.type === ADD_RECIPIENT) {
    const newRecipient = {
      firstName: action.firstName,
      lastName: action.lastName,
      preferred: action.preferred,
      email: action.email,
    };
    return [...state, newRecipient];
  }
  return state;
}

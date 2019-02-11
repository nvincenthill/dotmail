import { ADD_RECIPIENT } from '../actions/actionTypes';

const initialState = [];

export default function recipientsReducer(state = initialState, action) {
  const {
    type, firstName, lastName, preferred, email,
  } = action;
  if (type === ADD_RECIPIENT) {
    const newRecipient = {
      firstName,
      lastName,
      preferred,
      email,
    };
    return [...state, newRecipient];
  }
  return state;
}

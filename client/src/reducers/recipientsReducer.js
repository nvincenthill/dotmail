import { ADD_RECIPIENT, DELETE_RECIPIENTS, REMOVE_RECIPIENT } from '../actions/actionTypes';

const initialState = [];

export default function recipientsReducer(state = initialState, action) {
  const {
    type, firstName, lastName, preferred, email, i,
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
  if (type === DELETE_RECIPIENTS) {
    return [];
  }
  if (type === REMOVE_RECIPIENT) {
    return [...state.slice(0, i), ...state.slice(i + 1)];
  }
  return state;
}

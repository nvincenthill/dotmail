import { ADD_RECIPIENT, DELETE_RECIPIENTS } from '../actions/actionTypes';

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
  if (type === DELETE_RECIPIENTS) {
    return [];
  }
  return state;
}

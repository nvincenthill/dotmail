import { ADD_RECIPIENT } from '../actions/actionTypes';

const initialState = [
  {
    firstName: 'First recipient firstName',
    lastName: 'First recipient lastName',
    preferred: 'First recipient preferredName',
    email: process.env.EMAIL,
  },
  {
    firstName: 'Second recipient firstName',
    lastName: 'Second recipient lastName',
    preferred: 'Second recipient preferredName',
    email: process.env.EMAIL,
  },
  {
    firstName: 'Third recipient firstName',
    lastName: 'Third recipient lastName',
    preferred: 'Third recipient preferredName',
    email: process.env.EMAIL,
  },
];

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

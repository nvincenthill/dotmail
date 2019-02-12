import { ADD_EMAIL_GROUP, DELETE_EMAIL_GROUPS } from '../actions/actionTypes';

const initialState = [
  {
    id: 0,
    name: 'None',
    recipients: [],
  },
];

export default function emailGroupsReducer(state = initialState, action) {
  if (action.type === ADD_EMAIL_GROUP) {
    return [...state, action.group];
  }
  if (action.type === DELETE_EMAIL_GROUPS) {
    return [];
  }
  return state;
}

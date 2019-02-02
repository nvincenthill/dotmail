import { UPDATE_FIELD } from '../actions/actionTypes';

const initialState = {
  id: 3,
  name: 'Attendance',
  type: 'coordinator',
  senderName: 'Nicholas Vincent-Hill',
  subjectLine: 'Attendance 1/26',
  message: 'Hello world!',
};

export default function formReducer(state = initialState, action) {
  if (action.type === UPDATE_FIELD) {
    return {
      ...state,
      [action.field]: action.value,
    };
  }
  return state;
}

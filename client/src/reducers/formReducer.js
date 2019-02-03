import { UPDATE_FIELD } from '../actions/actionTypes';

const initialState = {
  id: 3,
  name: 'example',
  type: 'example',
  subjectLine: 'Example Subject Line',
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

import { UPDATE_FIELD, UPDATE_DISPLAYED_TEMPLATE } from '../actions/actionTypes';

const initialState = {
  id: 0,
  templateName: 'example',
  name: 'Example',
  type: 'universal',
  subjectLine: 'Example subject line',
  greeting: 'Example greeting',
  message: 'Example message',
  salutation: 'Example salutation',
};

export default function formReducer(state = initialState, action) {
  if (action.type === UPDATE_FIELD) {
    return {
      ...state,
      [action.field]: action.value,
    };
  }
  if (action.type === UPDATE_DISPLAYED_TEMPLATE) {
    return { ...action.form };
  }
  return state;
}

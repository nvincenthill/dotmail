import { UPDATE_FIELD, UPDATE_DISPLAYED_TEMPLATE } from '../actions/actionTypes';
import templateData from '../store/templates.json';

const initialState = templateData.templates[0];

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

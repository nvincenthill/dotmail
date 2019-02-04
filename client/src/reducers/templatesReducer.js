import { UPDATE_TEMPLATES } from '../actions/actionTypes';
import templatesData from '../store/templates.json';

const initialState = templatesData.templates;

export default function templatesReducer(state = initialState, action) {
  if (action.type === UPDATE_TEMPLATES) {
    return state;
  }
  return state;
}

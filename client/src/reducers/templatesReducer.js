import { ADD_TEMPLATE, DELETE_TEMPLATES } from '../actions/actionTypes';

const initialState = [
  {
    id: 0,
    templateName: 'example',
    name: 'Example',
    type: 'universal',
    subjectLine: 'Example subject line',
    greeting: 'Example greeting',
    message: 'Example message',
    salutation: 'Example salutation',
  },
];

export default function templatesReducer(state = initialState, action) {
  if (action.type === ADD_TEMPLATE) {
    return [...state, action.template];
  }
  if (action.type === DELETE_TEMPLATES) {
    return [];
  }
  return state;
}

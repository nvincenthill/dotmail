import { UPDATE_FIELD, UPDATE_DISPLAYED_TEMPLATE, UPDATE_INJECTION } from '../actions/actionTypes';

const initialState = {
  id: 0,
  name: 'Example',
  type: 'universal',
  subjectLine: 'Example subject line',
  injections: [
    {
      name: 'exampleInjection',
      type: 'text',
      data: 'This is an example',
    },
  ],
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
  if (action.type === UPDATE_INJECTION) {
    const newInjections = [...state.injections];
    newInjections.splice(action.index, 1, action.injection);
    const newState = {
      ...state,
      injections: newInjections,
    };
    return newState;
  }
  return state;
}

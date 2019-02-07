import { UPDATE_RESPONSE } from '../actions/actionTypes';

const initialState = { message: null, error: null, data: null };

export default function responseReducer(state = initialState, action) {
  if (action.type === UPDATE_RESPONSE) {
    const { message, error, data } = action;
    return { message, error, data };
  }
  return state;
}

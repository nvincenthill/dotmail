import { ADD_EMAIL_GROUP } from '../actions/actionTypes';

const initialState = [
  {
    id: 0,
    name: 'None',
    recipients: [],
  },
  {
    id: 1,
    name: 'ExampleGroupName',
    recipients: [
      {
        firstName: 'First recipient firstName',
        lastName: 'First recipient lastName',
        preferred: 'First recipient preferredName',
        email: 'nvincenthill@gmail.com',
      },
      {
        firstName: 'Second recipient firstName',
        lastName: 'Second recipient lastName',
        preferred: 'Second recipient preferredName',
        email: 'nvincenthill@gmail.com',
      },
      {
        firstName: 'Third recipient firstName',
        lastName: 'Third recipient lastName',
        preferred: 'Third recipient preferredName',
        email: 'nvincenthill@gmail.com',
      },
    ],
  },
];

export default function emailGroupsReducer(state = initialState, action) {
  if (action.type === ADD_EMAIL_GROUP) {
    return { ...state, ...action.group };
  }
  return state;
}

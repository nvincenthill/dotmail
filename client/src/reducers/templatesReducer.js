import { UPDATE_TEMPLATES } from '../actions/actionTypes';

const initialState = {
  templates: [
    {
      id: 1,
      name: 'Thank You Email',
      type: 'personal',
      senderName: 'Nicholas Vincent-Hill',
      subjectLine: 'Thank you!',
      message: 'Hello world!',
    },
    {
      id: 2,
      name: 'Tech Checkup Follow-up',
      type: 'technicalMentor',
      senderName: 'Nicholas Vincent-Hill',
      subjectLine: '[ACTION REQUIRED] Tech Check Follow Up',
      message: 'Hello world!',
    },
    {
      id: 3,
      name: 'Attendance',
      type: 'coordinator',
      senderName: 'Nicholas Vincent-Hill',
      subjectLine: 'Attendance 1/26',
      message: 'Hello world!',
    },
    {
      id: 4,
      name: 'Example Template',
      type: 'universal',
      senderName: 'Nicholas Vincent-Hill',
      subjectLine: 'Example Subject Line',
      message: 'Hello world!',
    },
  ],
};

export default function templatesReducer(state = initialState, action) {
  if (action.type === UPDATE_TEMPLATES) {
    return state;
  }
  return state;
}

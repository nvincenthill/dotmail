import { UPDATE_TEMPLATES } from '../actions/actionTypes';

const initialState = [
  {
    id: 0,
    name: 'Thank You Email',
    type: 'personal',
    subjectLine: 'Thank you!',
    message: 'Hello world!',
  },
  {
    id: 1,
    name: 'Tech Checkup Follow-up',
    type: 'technicalMentor',
    subjectLine: '[ACTION REQUIRED] Tech Check Follow Up',
    message: 'Tech Checkup example text',
  },
  {
    id: 2,
    name: 'Attendance',
    type: 'coordinator',
    subjectLine: 'Attendance 1/26',
    message: 'Attendance example text',
  },
  {
    id: 3,
    name: 'Example Template',
    type: 'universal',
    subjectLine: 'Example Subject Line',
    message: 'Example template example text',
  },
];

export default function templatesReducer(state = initialState, action) {
  if (action.type === UPDATE_TEMPLATES) {
    return state;
  }
  return state;
}

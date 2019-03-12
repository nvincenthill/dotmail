import { ADD_TEMPLATE, DELETE_TEMPLATES } from '../actions/actionTypes';

const initialState = [
  {
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
    mjml: `
    <mjml>
      <mj-body>
        <mj-section>
          <mj-column>
            <mj-text font-size="20px" color="red">Hello World</mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>`,
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

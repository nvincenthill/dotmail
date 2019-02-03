import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('should render an App', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });
});

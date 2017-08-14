import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

const wrapper = shallow(<Header />);
const welcome = <h1>Welcome to David Wieczorek Lab</h1>;

describe('Header', () => {
  it('renders welcome message', () => {
    expect(wrapper).toContainReact(welcome);
  });
});

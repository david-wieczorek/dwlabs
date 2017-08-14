import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

const wrapper = shallow(<Header />);
const welcome = <h2>Welcome to David Wieczorek Lab</h2>;

describe('Header', () => {
  it('renders welcome message', () => {
    expect(wrapper).toContainReact(welcome);
  });
});

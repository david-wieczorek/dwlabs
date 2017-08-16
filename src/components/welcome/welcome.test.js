import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './welcome';

const wrapper = shallow(<Welcome />);
const welcome = <h3>David Wieczorek Lab</h3>;

describe('Welcome', () => {
  it('renders welcome message', () => {
    expect(wrapper).toContainReact(welcome);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

const wrapper = shallow(<Header />);
const welcome = <h3>David Wieczorek Lab</h3>;

describe('Header', () => {
  it('renders welcome message', () => {
    expect(wrapper).toContainReact(welcome);
  });
});

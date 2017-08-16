import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './Resumeinfos';

const wrapper = shallow(<Welcome />);
const welcome = <h3>David Wieczorek</h3>;

describe('Welcome', () => {
  it('renders welcome message', () => {
    expect(wrapper).toContainReact(welcome);
  });
});

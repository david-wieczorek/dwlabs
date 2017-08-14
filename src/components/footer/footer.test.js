import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer';

const wrapper = shallow(<Footer />);
const powerdby = <h6>Powered by react</h6>;

describe('Footer', () => {
  it('renders powerdby message', () => {
    expect(wrapper).toContainReact(powerdby);
  });
});

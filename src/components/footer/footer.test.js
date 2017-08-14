import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer';

const wrapper = shallow(<Footer />);
const powerdby = <span>Powered by react</span>;

describe('Footer', () => {
  it('renders powerdby message', () => {
    expect(wrapper).toContainReact(powerdby);
  });
});

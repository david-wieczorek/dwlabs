import React from 'react';
import { shallow } from 'enzyme';
import App from './header';

const wrapper = shallow(<App />);
const welcome = <h2>Welcome to David Wieczorek Lab</h2>;
const powerdby = <h6>Powered by react</h6>;

describe('Welcome page', () => {
   it('renders welcome message', () => {
      expect(wrapper).toContainReact(welcome);
   });

   it('renders powerdby message', () => {
      expect(wrapper).toContainReact(powerdby);
   });
});

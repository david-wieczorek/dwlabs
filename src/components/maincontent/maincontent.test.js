import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Maincontent from './maincontent';

const powerdby = <p>main page sections</p>;

describe('maincontent page', () => {
   it('renders welcome message', () => {
      expect(shallow(<Maincontent />)).toContainReact(powerdby);
   });
});

import React from 'react';
import { shallow } from 'enzyme';
import Maincontent from './maincontent';

const powerdby = <h2>main page sections</h2>;

describe('maincontent page', () => {
  it('renders welcome message', () => {
    expect(shallow(<Maincontent />)).toContainReact(powerdby);
  });
});

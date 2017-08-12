import React from 'react';
import { shallow } from 'enzyme';
import App from './components';

describe('Init page suite', () => {
   it('renders App without crashing', () => {
      shallow(<App />);
   });
});

import React, { Component } from 'react';
import Mapbox from '../map/map';

class Maincontent extends Component {
   render() {
      return (
         <div>
            <p>main page sections</p>
            <Mapbox />
         </div>
      );
   }
}

export default Maincontent;

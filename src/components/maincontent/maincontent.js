import React, { Component } from 'react';
import Mapbox from '../map/map';
import MyComp from '../mycomp/mycomp';

class Maincontent extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <h2>Map</h2>
          <Mapbox />
        </div>
        <div className="content">
          <h2>Fetch test</h2>
          <MyComp />
        </div>
      </div>
    );
  }
}

export default Maincontent;

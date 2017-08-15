import React, { Component } from 'react';
import Mapbox from '../../components/map/map';

class Mapview extends Component {
  render() {
    return (
      <div className="content">
        <h2>Map Component</h2>
        <p>Test Leaflet with react, yeahhh !</p>
        <Mapbox />
      </div>
    );
  }
}

export default Mapview;

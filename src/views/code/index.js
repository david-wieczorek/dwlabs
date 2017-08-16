import React, { Component } from 'react';
import Mapbox from '../../components/map/map';
import Linechart from '../../components/chartline/chartline';
import Fetchdata from '../../components/mycomp/mycomp';

class Codeview extends Component {
  render() {
    return (
      <div>
        <h1 className="page-title">
          <i className="fa fa-code" aria-hidden="true" /> Code test
        </h1>
        <div className="content">
          <h2>Fetch data Component</h2>
          <Fetchdata />
        </div>
        <div className="content">
          <h2>Map Component</h2>
          <p>Test Leaflet with react, yeahhh !</p>
          <Mapbox />
        </div>
        <div className="content">
          <h2>Charts Js Component</h2>
          <Linechart />
        </div>
      </div>
    );
  }
}

export default Codeview;

import React, { Component } from 'react';
import Mapbox from '../../components/map/map';
import Linechart from '../../components/chartline/chartline';
import Fetchdata from '../../components/mycomp/mycomp';
import Testfetch from '../../components/testfetch/testfetch';
import Firebasetest from '../../components/firebasetest/firebasetest';

class Codeview extends Component {
  render() {
    return (
      <div>
        <h1 className="page-title">
          <i className="fa fa-code" aria-hidden="true" /> Code test
        </h1>
        <div className="content">
          <div className="bloc-wrapper">
            <div className="bloc bloc-nobckcolor">
              <h2>Firebase test</h2>
              <Firebasetest />
            </div>
          </div>
        </div>
        <div className="wrapper-content">
          <div className="content">
            <div className="bloc-wrapper">
              <div className="bloc bloc-nobckcolor">
                <h2>Test fetch from local node server</h2>
                <Testfetch />
              </div>
            </div>
          </div>
          <div className="content">
            <div className="bloc-wrapper">
              <div className="bloc bloc-nobckcolor">
                <h2>Fetch data Component</h2>
                <Fetchdata />
              </div>
            </div>
          </div>
          <div className="content">
            <div className="bloc bloc-darkcolor">
              <h2>Map Component</h2>
              <p>Test Leaflet with react, yeahhh !</p>
              <Mapbox />
            </div>
            <div className="bloc bloc-lightcolor">
              <h2>Charts Js Component</h2>
              <Linechart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Codeview;

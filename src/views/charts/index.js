import React, { Component } from 'react';
import Linechart from '../../components/chartline/chartline';

class Charts extends Component {
  render() {
    return (
      <div className="content">
        <h2>Chartjs incubator</h2>
        <p>test chartjs graph</p>
        <br />
        <h3>Line chart</h3>
        <Linechart />
      </div>
    );
  }
}

export default Charts;

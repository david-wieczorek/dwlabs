import React, { Component } from 'react';
import Fetchtest from '../../components/mycomp/mycomp';

class Fetchview extends Component {
  render() {
    return (
      <div className="content">
        <h2>Fetch test Component</h2>
        <Fetchtest />
      </div>
    );
  }
}

export default Fetchview;

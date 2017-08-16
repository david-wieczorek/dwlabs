import React, { Component } from 'react';
import logo from './logo.png';

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <img className="welcome-logo" src={logo} alt="Logo" />
        <h3>David Wieczorek Lab</h3>
      </div>
    );
  }
}

export default Welcome;

import React, { Component } from 'react';
import logo from './logo.png';

class Header extends Component {
  render() {
    return (
      <div className="main-header">
        <header>
          <img src={logo} alt="Logo" />
          <h3>David Wieczorek Lab</h3>
        </header>
      </div>
    );
  }
}

export default Header;

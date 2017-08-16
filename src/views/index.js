import React, { Component } from 'react';
import Sidebar from '../components/sidebar/sidebar';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="wrapper">
          <div className="wrapper-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

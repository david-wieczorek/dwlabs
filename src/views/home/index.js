import React, { Component } from 'react';
import Welcome from '../../components/welcome/welcome';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Welcome />
      </div>
    );
  }
}

export default Home;

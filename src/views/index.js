import React, { Component } from 'react';
import Header from '../components/header/header';
import Mainmenu from '../components/mainmenu/mainmenu';
import Footer from '../components/footer/footer';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Mainmenu />
        <div className="wrapper">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;

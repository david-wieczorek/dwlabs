import React, { Component } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Maincontent from './maincontent/maincontent';
import MyComp from './mycomp/mycomp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <div className="wrapper">
          <Maincontent />
          <MyComp />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

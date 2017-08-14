import React, { Component } from 'react';
import Header from './header/header';
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
         </div>
      );
   }
}

export default App;

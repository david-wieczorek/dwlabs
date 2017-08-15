import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './views';
import Home from './views/home';
import Mapview from './views/map';
import Fetchview from './views/fetch';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import 'leaflet/dist/leaflet.css';
import './index.css';

ReactDOM.render(
  <Router>
    <Main>
      <Route exact path="/" component={Home} />
      <Route path="/map" component={Mapview} />
      <Route path="/fetch" component={Fetchview} />
    </Main>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();

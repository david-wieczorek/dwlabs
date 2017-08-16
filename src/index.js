import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import Main from './views';
import Home from './views/home';
import Resumeview from './views/resume';
import Codeview from './views/code';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import 'leaflet/dist/leaflet.css';
import './index.css';

ReactDOM.render(
  <HashRouter>
    <Main>
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resumeview} />
      <Route path="/codes" component={Codeview} />
    </Main>
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();

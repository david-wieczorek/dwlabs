import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'normalize.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

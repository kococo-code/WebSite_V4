import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/style.js';
import 'core-js/stable'
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

ReactDOM.render(<App />, document.getElementById('root'));

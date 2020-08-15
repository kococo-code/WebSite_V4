import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/style.js';
import 'core-js/stable'
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import {BrowserRouter} from 'react-router-dom';
import Router from './AppRouter';
ReactDOM.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>,
document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import user from './reducers/User'
const store=configureStore({reducer:{user:user}})//create store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

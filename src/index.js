import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {UserSignupPage} from './pages/UserSignupPage';
import * as apiCalls from './api/apiCalls';
import LoginPage from './pages/LoginPage';

const actions = {
  // postSignup : apiCalls.signup,
  postLogin : apiCalls.login
}


ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



import React from 'react';
// main of app
import ReactDOM from 'react-dom';

import App from './App/App';
import './index.css'

import LoginPage from './Login/LoginPage';
import SignUpPage from './SignUp/SignUpPage';

ReactDOM.render(
    <SignUpPage />,
    document.getElementById('root')
)

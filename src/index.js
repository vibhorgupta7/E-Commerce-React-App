import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';     // whenever using React Router, we need to enclose our app component in BrowserRouter component


ReactDOM.render(
    <BrowserRouter>    
      <App />
    </BrowserRouter>
    ,
  document.getElementById('root')
);

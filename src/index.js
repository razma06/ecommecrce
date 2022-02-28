import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Nav/Navbar';
import Main from './Main/Main'
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);


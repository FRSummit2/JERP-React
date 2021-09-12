import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// What is react StrictMode?
// ---------------------------------------------------------------------------------------------------
// StrictMode is a tool for highlighting potential problems in an application. 
// Like Fragment , StrictMode does not render any visible UI. 
// It activates additional checks and warnings for its descendants. 
// Note: Strict mode checks are run in development mode only; they do not impact the production build.
// ---------------------------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import allReducer from './reducer'
import { Provider } from 'react-redux'
// import reducer from '../src/reducer/index'

// import 'bootstrap/dist/css/bootstrap.min.css'

// STORE -> GLOBALOZED STATE
const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__()
// )

ReactDOM.render(
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>,
    <Provider store={store}>
        <App />
    </Provider>,
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
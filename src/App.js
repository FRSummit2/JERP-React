import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, NavLink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import axios from 'axios';
import './assets/css/login.css'
import './assets/css/style.css'

import './assets/css/style2.css'
import './assets/css/layout.css'
import './assets/css/style_mehedi.css'

// import { getToken, removeUserSession, setUserSession } from './Utils/Common';
import Router from './router/Router'

// import CustomHook from './CustomHook'

function App() {

    // const [authLoading, setAuthLoading] = useState(true);  //https://stackoverflow.com/questions/53165945/what-is-usestate-in-react

    // const [cnt, setcounter] = useState(0)
    // // const [name, setName] = useState(null)
    // // const [flag, setFlag] = useState(false)
    // // const [data, setData] = React.useState({firstName: 'John', lastName: 'Doe'})
    // const {myCount, setMyCount} = CustomHook()

    // const setCount = () => {
    //   console.log(cnt)
    //   setcounter(cnt + 1)
    // }

    // // const setMyName = () => {
    // //   console.log(name)
    // //   setName('F R Summit')
    // // }

    // // const setFlagState = () => {
    // //   console.log(flag)
    // //   setFlag(true)
    // // }

    // // const setDataVal = () => {
    // //   console.log(data)
    // //   setData({firstName: 'F R', lastName: 'Summit'})
    // // }

    // const setCustomCount = () => {
    //   console.log('setCustomCount :' + myCount)
    //   setMyCount(myCount + 1)
    //   console.log('setCustomCount :' + myCount)
    // }

    // useEffect(() => {
    //   const token = getToken();
    //   if (!token) {
    //     return;
    //   }

    //   axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
    //     setUserSession(response.data.token, response.data.user);
    //     setAuthLoading(false);
    //   }).catch(error => {
    //     removeUserSession();
    //     setAuthLoading(false);
    //   });
    // }, []);

    // if (authLoading && getToken()) {
    //   return <div className="content">Checking Authentication...</div>
    // }

    return (
        <div className="App">
            <BrowserRouter>
                {/* <div> */}
                {/* <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
            <NavLink activeClassName="active" to="/other">Other</NavLink>
            <NavLink activeClassName="active" to="/data-pass">DataPassing</NavLink>
          </div> */}
                {/* <div className="content"> */}
                {/* <button onClick={setCount}>Counter Btn</button>
            <button onClick={setCustomCount}>Custom Counter Btn</button> */}
                <Router />
                {/* </div> */}
                {/* </div> */}
            </BrowserRouter>
        </div>
    );
}

export default App;


/**
 * TUTOTIALS
 * ------------------
 * 1. npm init react-app project_name
 * 2. After creating the project
 *        >> npm start - start the project
 *        >> npm build - build the project
 *
 * >> npm install --save react-router-dom
 * >> npm install axios
 *
 * >> npm install react-confirm-alert --save
 * >> npm install --save react-chartjs-2 chart.js
 * >> npm install redux react-redux
 * >> npm install --save-dev redux-devtools
 */
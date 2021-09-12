import React from 'react';
// import { getUser, removeUserSession } from '../Utils/Common';
import { getUser, getTokenExpiresTime, removeUserSession } from '../Utils/Common';
 
// function Dashboard(props) {
function Dashboard(props) {
  // const user = getUser();
 
  // handle click event of logout button
  const handleLogout = () => {
    // removeUserSession();
    // props.history.push('/login');
    console.log(getTokenExpiresTime())
    console.log(new Date(getTokenExpiresTime()).getTime())
    console.log(getUser())
    console.log(new Date().getTime())

    removeUserSession()
    props.history.push('/');
  }
 
  return (
    <div>
      Dashboard
      {/* Welcome {user.name}!<br /><br /> */}
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Dashboard;
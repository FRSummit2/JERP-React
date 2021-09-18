import React, { useEffect, useState } from 'react';
import { setUserSession } from '../../Utils/Common';
import jmi_erp_logo from '../../assets/images/JMI-ERP-Logo.svg';
import mononsoft_logo from '../../assets/images/mononsoft-logo.svg';

import { login } from '../../service/LoginService';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

// import { SuccessModal } from '../helpers/modals/success'

const Login = (props) => {
    // const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    // const [error, setError] = useState(null);

    // handle button click of login form
    // const handleLogin = () => {
    //     setError(null);
    //     setLoading(true);
    //     // axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
    //     axios.post('http://frs-json-server.herokuapp.com/users', { username: username.value, password: password.value }).then(response => {
    //         setLoading(false);
    //         setUserSession(response.data.token, response.data.user);
    //         props.history.push('/dashboard');
    //     }).catch(error => {
    //         setLoading(false);
    //         if (error.response.status === 401) setError(error.response.data.message);
    //         else setError("Something went wrong. Please try again later.");
    //     });
    // }

    useEffect( props => {
        console.log('use effect')
        console.log(props)
        sessionStorage.removeItem('jerp_user_details');
    })

    const handleLoginJerp = async () => {
        console.log(username)
        console.log(password)
        // let modal_val = SuccessModal('Are you sure?', 'You want to proceed.')
        // await modal_val.then(res => {
        //     console.log(res)
        // })
        // console.log(modal_val)
        confirmAlert({
            title: 'Are you sure?',
            message: 'You want to proceed.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                  console.log('Yes')
                  loginEvent()
                }
              },
              {
                label: 'No',
                onClick: () => {
                  console.log('No')
                }
              }
            ]
          });
    }

    const loginEvent = async () => {
        await login(username.value, password.value).then(res => {
            console.log(res)
            // setUserSession(response.data.token, response.data.user);
            setUserDetailsToSesstion(res.data)
            props.history.push('/features/users/dashboard');
        }).catch(err => {
            console.log(err)
            if (err.response.status === 401) errorMessageHandle('Error', err.response.data.message);
            // else setError("Something went wrong. Please try again later.");
            else errorMessageHandle('Error', "Something went wrong. Please try again later.")
        })
    }

    const setUserDetailsToSesstion = (data) => {
        console.log(data.data)
        setUserSession(data.data)
    }

    return (
        <div className="wrapper">
            <div className="container h-100 main-content">
                <div className="row h-100">
                    <div className="col-md-6 d-flex h-100 align-items-center">
                        <div className="left-column">
                            <img src={jmi_erp_logo} alt="erp-icon" />
                            <div className="possibilities">
                                <h2>The possibilities are limitless</h2>
                                <p> Business management is a daunting job.It's much more complicated if you don't use apps or if the work is dispersed through several platforms.To keep track of assignments, communicate effectively, and meet deadlines, use a single process.Because of the JERP-validated development method, we are passionate about what we do and dependable in our execution.</p>
                                <ul className="status jmi-pl-0">
                                    <li>
                                        <span className="material-icons check_circle_outline jmi-mr-4"> check_circle_outline </span>
                                        <p>Clear dynamic statements.Your reports, the way you like them.</p>
                                    </li>
                                    <li>
                                        <span className="material-icons check_circle_outline jmi-mr-4"> check_circle_outline </span>
                                        <p>Streamlined expense management.Get expenses updated &amp; approved fast.</p>
                                    </li>
                                    <li>
                                        <span className="material-icons check_circle_outline jmi-mr-4"> check_circle_outline </span>
                                        <p>Use cutting-edge automation &amp; advanced routes to manage any warehouse.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                        <div className="right-column">
                            <div className="container">
                                <div className="email-pass-input">
                                    <div className="card login-card">
                                        <div className="card-body">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="uname" className=""> Username </label>
                                                    <input type="text" id="uname" name="uname" className="form-control" {...username} />
                                                </div>
                                                <div className="form-group pass-input-group">
                                                    <label htmlFor="pwd" className=""> Password </label>
                                                    <input type="password" id="pwd" className="form-control" {...password} />
                                                </div>
                                                {/* <button className="btn btn-primary text-light btn-block submit-btn" onClick={ handleLoginJerp }>Log In <i className="fas fa-circle-notch spin-animation d-none"></i></button>
                                                <div className="forgotten text-center"><a>Forgotten Password?</a></div> */}
                                            </form>
                                            <button className="btn btn-primary text-light btn-block submit-btn" onClick={handleLoginJerp}>Log In <i className="fas fa-circle-notch spin-animation d-none"></i></button>
                                            <div className="forgotten text-center"><a href="/">Forgotten Password?</a></div>
                                            { 20 ? 
                                                <p>Hello</p>
                                                :
                                                <p>Hi</p> 
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">Copyright © 2021 <a id="jerp" href="/">JERP</a>. All rights reserved.</div>
                        <div className="col-md-4"></div>
                        <div className="col-md-5">
                            <ul>
                                <li><a href="/"><i className="fas fa-question-circle"></i> Need Help?</a></li>
                                <li><a href="/">Terms and Conditions</a></li>
                                <li>
                                    <div className="li-logo">
                                        <p>Powered by: </p>
                                        <div className="mono-logo"><img src={mononsoft_logo} alt="" /></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

const errorMessageHandle = (title, message) => {
    confirmAlert({
        title: title,
        message: message,
        buttons: [
          {
            label: 'Close',
            onClick: () => {
              console.log('Yes')
            }
          }
        ]
      });
}

export default Login;
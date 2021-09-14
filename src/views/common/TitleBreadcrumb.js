// import React from 'react';
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom"

const TitleBreadcrumb = (props) => {
    const [title, setTitle] = useState('');

    useEffect( () => {
        console.log('I am here')
        console.log(props)
        console.log(props.titleBreadcrumb)
        setTitle(props.titleBreadcrumb)
    })

    return (
        <div className="layout-breadcrumb">
            <div className="breadcrumb_area">
                <h5>{ title }
                    {/* {
                        title === 'Dashboard' ?
                        <span> {props.titleBreadcrumb}</span> :
                        <span> DEFAULT TEXT</span>
                    } */}
                </h5>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink to="/features/users/dashboard">Features</NavLink></li>
                        <li className="breadcrumb-item"><NavLink to="/features/users/dashboard">Local Sales</NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">{ title }</li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}

export default TitleBreadcrumb;
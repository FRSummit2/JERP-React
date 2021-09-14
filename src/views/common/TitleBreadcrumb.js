// import React from 'react';
import React, { useState, useEffect } from 'react';

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
                <h5>Monthly Delivery Plan</h5>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Features</a></li>
                        <li className="breadcrumb-item"><a href="/">Local Sales</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{ title }</li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}

export default TitleBreadcrumb;
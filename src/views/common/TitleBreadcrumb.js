import React from 'react';

const TitleBreadcrumb = () => {
    return (
        <div className="layout-breadcrumb">
            <div className="breadcrumb_area">
                <h5>Monthly Delivery Plan</h5>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Features</a></li>
                        <li className="breadcrumb-item"><a href="/">Local Sales</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}

export default TitleBreadcrumb;
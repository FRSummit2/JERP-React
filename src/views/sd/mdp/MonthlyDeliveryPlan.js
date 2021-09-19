import React from 'react';
import CommonLayout from '../../common/CommonLayout';
import TitleBreadcrumb from '../../common/TitleBreadcrumb';

class MonthlyDeliveryPlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tb: "Monthly Delivery Plan" };
    }

    months_list = ['January', 'February', 'March', 'April', 'May', 'June']

    render() {
        return (
            <>
                <CommonLayout />
                <TitleBreadcrumb titleBreadcrumb={this.state.tb} />
                <div id="main-section" className="main-section">
                    <div className="layout-body mdp">
                        <div className="layout-sidebar ThirdPartyTender">
                            <div className="header">
                                <div className="row1">
                                    <div className="form-group">
                                        <span className="fa fa-search"> </span>
                                        <input type="text" placeholder="Search by Name, ID No" className="form-control" />
                                    </div>
                                    <span className="filter_search"><span className="fa fa-filter"> </span> </span>
                                </div>
                                <div className="row2">
                                    <select className="form-select" aria-label="Default select example">
                                        <option disabled>Open this select menu</option>
                                        {
                                            this.months_list.map((m, index) => (
                                                <option value={m} key={index}>{m}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="content">
                                <div className="ds_accordion" id="accordion-1">
                                    {
                                        Array.from({ length: 10 }, (_, index) => (
                                            <div className="card_body" key={index}>
                                                <div className="row1">
                                                    <h5>Sirazul Islam</h5>
                                                    <p className={index % 2 === 0 ? 'occupied' : 'available'}>{index % 2 === 0 ? 'Occupied' : 'Available'}</p>
                                                </div>
                                                <div className="row2">
                                                    <p>Total territory: <span>06</span></p>
                                                </div>
                                                <div className="row3"><p>House:100, Road: 11,Block:C,Dhaka 1213</p></div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>

                        <div className="layout-container w-100">
                            <div className="container-fluid">
                                <div className="col-12 mdp delivery_collection_area">
                                    <div className="row deCollection_header">
                                        <div className="col-12">
                                            <h5>Delivery Plan: <span>September 2021</span></h5>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <p>SR Name: <span className="customer-name">Md. Al Imran (05437)</span></p>
                                        </div>
                                        <div className="col-lg-8 col-md-6 col-12">
                                            <p className="d-flex align-items-center">Territory: <span className="outstanding-amount">TB HOSPITAL &amp; 5 more</span> <span className="material-icons add"> add </span></p>
                                        </div>
                                    </div>

                                    {/* <div className="row"> */}
                                    <div className="card mt-1 w-100">
                                        {/* <div className="row calendar">
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <p>SR Name: <span className="customer-name">Md. Al Imran (05437)</span></p>
                                            </div>
                                            <div className="col-lg-8 col-md-6 col-12">
                                                <p className="d-flex align-items-center">Territory: <span className="outstanding-amount">TB HOSPITAL &amp; 5 more</span></p>
                                            </div>
                                        </div> */}
                                        <div className="card-body calendar">
                                            <h5 className="card-title justify-content-between">
                                                <span>Territory: <span className="blue">DHK52403 - TB HOSPITAL</span></span>
                                                <span className="d-flex">
                                                    <span class="material-icons content_copy"> content_copy </span>
                                                    <span class="material-icons delete_outline"> delete_outline </span>
                                                </span>
                                            </h5>
                                            <div className="card-text d-flex justify-content-around">
                                                {
                                                    Array.from({ length: 30 }, (_, index) => (
                                                        <span>
                                                            <p className="day">W</p>
                                                            <p className="date">{index + 1}</p>
                                                        </span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {/* </div> */}

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default MonthlyDeliveryPlan;
import React from 'react';
import CommonLayout from '../../common/CommonLayout';
import TitleBreadcrumb from '../../common/TitleBreadcrumb';

import avater from '../../../assets/images/avater.png'

class EmployeeProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tb: "Employee Profile" };
    }

    render() {
        return (
            <>
                <CommonLayout />
                <TitleBreadcrumb titleBreadcrumb={this.state.tb} />
                <div id="main-section" className="main-section">
                    <div className="layout-body">

                        <div className="layout-sidebar">
                        </div>

                        <div className="layout-container">
                            <div className="container-fluid">
                                <div className="row customer_area">

                                    <div className="col-3">
                                        <div className="employee-preview">
                                            <div className="preview-scroll">
                                                <div className="user-row1">
                                                    <div className="user-status">
                                                        <select className="form-control form-control-sm">
                                                            <option>Active</option>
                                                            <option>Inactive</option>
                                                        </select>
                                                        <span className="inactive"></span>
                                                    </div>
                                                    <p className="employee-type">Provision</p>
                                                </div>
                                                <div className="user-row2">
                                                    <div className="user-img">
                                                        <span data-toggle="modal" data-target="#change-photo">Change</span>
                                                        <img src={avater} alt="avt" />
                                                    </div>

                                                    <h5>Mehedi Hassan <span className="material-icons">verified</span></h5>
                                                    <p><span className="user">Assistant Director</span> | <span>JMI-2231225</span></p>
                                                </div>
                                                <div className="user-row4">
                                                    <a href="tel:+8801234567890"><span className="material-icons">phone_in_talk</span>0123456789</a>
                                                    <a href="mailto:mehedi.all.info@gmail.com"><span className="material-icons">email</span>mehedi.all.info@gmail.com</a>
                                                </div>
                                                <div className="user-row5">
                                                    <div className="bio">
                                                        <h5>Bio</h5>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seda diam nonumy eirmod tempor invidunt ut the sea labore et dolorae magna aliquyam erat, sed diam voluptua. At vero eos et accusam eta justo duo diam to dolores et ea rebum. Stet clita kasd gubergren, no and Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seda diam nonumy eirmod tempor invidunt ut the sea labore et dolorae magna aliquyam erat, sed diam voluptua. At vero eos et accusam eta justo duo diam to dolores et ea rebum. Stet clita kasd gubergren, no
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="modal" id="change-photo" tabIndex="-1" role="dialog" aria-labelledby="changePhoto"
                                            aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="changePhoto">Change Photo</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <form className="modal-body">
                                                        <div className="form-group">
                                                            <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                                                        </div>
                                                    </form>
                                                    <div className="modal-footer justify-content-center">
                                                        <button type="button" className="btn btn-primary btn-global">Save Changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-9">
                                        <div className="employee-details" id="employee-details-tab">
                                            <ul className="nav nav-tabs nav-justified" id="employee-details-tab-inner" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link employee-single-tab active" data-toggle="tab" href="#employee-basic">Basic</a>
                                                </li>

                                                <li className="nav-item">
                                                    <a className="nav-link employee-single-tab" data-toggle="tab" href="#employee-employment">Employment</a>
                                                </li>

                                                <li className="nav-item">
                                                    <a className="nav-link employee-single-tab" data-toggle="tab" href="#employee-accounts">Accounts</a>
                                                </li>

                                                <li className="nav-item">
                                                    <a className="nav-link employee-single-tab" data-toggle="tab" href="#employee-pay-structure">Pay Structure</a>
                                                </li>
                                            </ul>
                                            
                                            <div className="tab-content">
                                                <div id="employee-basic" className="tab-pane active">
                                                    <div className="content-header">
                                                        <h5>Personal Info</h5>
                                                        <span className="btn-edit" data-toggle="modal" data-target="#employee-personal-info-modal"><span className="material-icons"> edit </span></span>
                                                        <div className="modal" id="employee-personal-info-modal" tabIndex="-1" role="dialog" aria-labelledby="EmployeePersonalInfo" aria-hidden="true">
                                                            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title">Personal Info</h5>
                                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <div className="row">
                                                                            <div className="col-lg-4 col-12 form-group">
                                                                                <label htmlFor="customer_name">Customer Name</label>
                                                                                <input type="text" className="form-control" id="customer_name" placeholder="Enter Customer Name"/>
                                                                            </div>
                                                                            <div className="col-lg-4 col-12 form-group">
                                                                                <label htmlFor="contact_number">Contact Number</label>
                                                                                <input type="tel" className="form-control" id="contact_number" placeholder="Enter Contact Number"/>
                                                                            </div>
                                                                            <div className="col-lg-4 col-12 form-group">
                                                                                <label htmlFor="customer_email">Email</label>
                                                                                <input type="email" className="form-control" id="customer_email" placeholder="Enter Email"/>
                                                                            </div>
                                                                            <div className="col-lg-4 col-12 form-group">
                                                                                <label htmlFor="customer_nid">National ID No</label>
                                                                                <input type="number" className="form-control" id="customer_nid" placeholder="Enter National ID No"/>
                                                                            </div>
                                                                            <div className="col-lg-4 col-12 form-group">
                                                                                <label htmlFor="customer_dob">Date of Birth</label>
                                                                                <input type="date" className="form-control" id="customer_dob" />
                                                                            </div>
                                                                            <div className="col-lg-4 col-12 form-group">
                                                                                <label htmlFor="customer_gender">Gender</label>
                                                                                <select className="form-control">
                                                                                    <option>Select Gender</option>
                                                                                    <option>Male</option>
                                                                                    <option>Female</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="col-lg-4 col-12 form-group">
                                                                                <label htmlFor="customer_blood_group">Blood Group</label>
                                                                                <select className="form-control">
                                                                                    <option>Select Blood Group</option>
                                                                                    <option>O Positive</option>
                                                                                    <option>A Positive</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="col-lg-4 col-12 form-group">
                                                                                <label htmlFor="customer_religion">Religion</label>
                                                                                <select className="form-control">
                                                                                    <option>Select Religion</option>
                                                                                    <option>Muslim</option>
                                                                                    <option>Hindu</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="col-lg-4 col-12 form-group">
                                                                                <label htmlFor="customer_marital_status">Marital Status</label>
                                                                                <select className="form-control">
                                                                                    <option>Select Marital Status</option>
                                                                                    <option>Unmarried</option>
                                                                                    <option>Married</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="col-8 form-group">
                                                                                <label htmlFor="user-bio">Bio</label>
                                                                                <textarea className="form-control" type="text" placeholder="Write Here.." id="user-bio" rows="5"></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="modal-footer justify-content-center">
                                                                        <button type="button" className="btn btn-primary btn-global">Save</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-12 col-lg-4">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Full Name:</span>
                                                                        <p className="col-7">Mehedi Hassan Bappy</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Nick Name:</span>
                                                                        <p className="col-7">Bappy</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Date of Birth:</span>
                                                                        <p className="col-7">11/11/2021</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Sex:</span>
                                                                        <p className="col-7">Male</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Religion:</span>
                                                                        <p className="col-7">Islam</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Cast:</span>
                                                                        <p className="col-7">Sunni</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Blood Group:</span>
                                                                        <p className="col-7">O+</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Body Color:</span>
                                                                        <p className="col-7">Fair</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Hair:</span>
                                                                        <p className="col-7">Black</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Height:</span>
                                                                        <p className="col-7">5 ft 9 Inch</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Weight:</span>
                                                                        <p className="col-7">180kg</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-4">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Birth Sign:</span>
                                                                        <p className="col-7">None</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Eye Color:</span>
                                                                        <p className="col-7">Black</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Father Name:</span>
                                                                        <p className="col-7">Jakir Hossain</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Father's Occupation:</span>
                                                                        <p className="col-7">Engineer</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Mother Name:</span>
                                                                        <p className="col-7">Akhter</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Mother's Occupation:</span>
                                                                        <p className="col-7">Teacher</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Spouse Name:</span>
                                                                        <p className="col-7">Ishrat Begum</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Spouse's Occupation:</span>
                                                                        <p className="col-7">Lawyer</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Nationality:</span>
                                                                        <p className="col-7">Bangladeshi</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">National ID:</span>
                                                                        <p className="col-7">32125465356</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Birth Certificate No:</span>
                                                                        <p className="col-7">458632986565</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-4">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Passport Number:</span>
                                                                        <p className="col-7">54665326</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Passport Expired Date:</span>
                                                                        <p className="col-7">12-Sep-2021</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div id="employee-employment" className="tab-pane">
                                                    <div className="content-header">
                                                        <h5>Employment Information</h5>
                                                        <span className="btn-edit" data-toggle="modal" data-target="#employee-employment-edit-modal"><span className="material-icons"> edit </span></span>

                                                        <div className="modal" id="employee-employment-edit-modal" tabIndex="-1" role="dialog" aria-labelledby="EmployeeEmploymentInfo" aria-hidden="true">
                                                            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title">Business Info</h5>
                                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <div className="row">
                                                                            <div className="col-lg-6 col-12 form-group">
                                                                                <label htmlFor="vat-reg-number">Vat Registration</label>
                                                                                <input type="text" className="form-control" id="vat-reg-number" placeholder="Enter Vat Registration No"/>
                                                                            </div>
                                                                            <div className="col-lg-6 col-12 form-group">
                                                                                <label htmlFor="trade-license">Trade License Number</label>
                                                                                <input type="text" className="form-control" id="trade-license" placeholder="Enter Trade License No"/>
                                                                            </div>
                                                                            <div className="col-lg-6 col-12 form-group">
                                                                                <label htmlFor="vin-number">VIN</label>
                                                                                <input type="text" className="form-control" id="vin-number" placeholder="Enter VIN No"/>
                                                                            </div>
                                                                            <div className="col-lg-6 col-12 form-group">
                                                                                <label htmlFor="tin-number">TIN</label>
                                                                                <input type="text" className="form-control" id="tin-number" placeholder="Enter TIN No"/>
                                                                            </div>
                                                                            <div className="col-lg-4 col-12 form-group">
                                                                                <label htmlFor="bin-number">BIN</label>
                                                                                <input type="text" className="form-control" id="bin-number" placeholder="Enter BIN No"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="modal-footer justify-content-center">
                                                                        <button type="button" className="btn btn-primary btn-global">Save</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-12 col-lg-4">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Grade:</span>
                                                                        <p className="col-7">XYZ</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Department:</span>
                                                                        <p className="col-7">Accounts</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Joining Date:</span>
                                                                        <p className="col-7">12-Oct-2020</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Joining Designation:</span>
                                                                        <p className="col-7">Executive</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Joining Department:</span>
                                                                        <p className="col-7">Accounts</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Confirmation Date:</span>
                                                                        <p className="col-7">12-Sep-2019</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-4">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Provision End Date:</span>
                                                                        <p className="col-7">12-Sep-2019</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Retirement Flag:</span>
                                                                        <p className="col-7">XYZ</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Retirement Date:</span>
                                                                        <p className="col-7">12-Sep-2019</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Resign Date:</span>
                                                                        <p className="col-7">12-Sep-2019</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Resign Staus:</span>
                                                                        <p className="col-7">XYZ</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Resign Note:</span>
                                                                        <p className="col-7">Lorem ipsum dolor sit amet, consetetur
                                                                            sadipscing elitr, seda diam nonumy eirmod
                                                                            tempor</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-4">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Last Promotion Date:</span>
                                                                        <p className="col-7">12-Sep-2019</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Separation Type:</span>
                                                                        <p className="col-7">12-Sep-2021</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Separation Note:</span>
                                                                        <p className="col-7">Ruhul Ameen</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Separation Effective Date:</span>
                                                                        <p className="col-7">Doctor</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Release Date:</span>
                                                                        <p className="col-7">Fatema akter</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Release Reason:</span>
                                                                        <p className="col-7">Teacher</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div id="employee-accounts" className="tab-pane">
                                                    <div className="content-header">
                                                        <h5>Account Basic</h5>
                                                        <span className="btn-edit" data-toggle="modal" data-target="#employee-accounts-edit-modal"><span className="material-icons"> edit </span></span>
                                                        <div className="modal" id="employee-accounts-edit-modal" tabIndex="-1" role="dialog" aria-labelledby="EmployeeAccountInfo" aria-hidden="true">
                                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title">Accounts Information</h5>
                                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <div className="row">
                                                                            <div className="col-lg-6 col-12 form-group">
                                                                                <label htmlFor="payment_type">Payment Type</label>
                                                                                <select className="form-control">
                                                                                    <option>Select Payment type</option>
                                                                                    <option>Type 1</option>
                                                                                    <option>Type 2</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="col-lg-6 col-12 form-group">
                                                                                <label htmlFor="customer_marital_status">Bank Name</label>
                                                                                <select className="form-control">
                                                                                    <option>Select Bank</option>
                                                                                    <option>Bank 1</option>
                                                                                    <option>Bank 2</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="col-lg-6 col-12 form-group">
                                                                                <label htmlFor="branch-name">Branch Name</label>
                                                                                <input type="text" className="form-control" id="branch-name" placeholder="Enter Branch Name"/>
                                                                            </div>
                                                                            <div className="col-lg-6 col-12 form-group">
                                                                                <label htmlFor="account_number">Account Number</label>
                                                                                <input type="number" className="form-control" id="account_number" placeholder="Enter Account No"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="modal-footer justify-content-center">
                                                                        <button type="button" className="btn btn-primary btn-global">Save</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12 col-lg-4">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Payment Type:</span>
                                                                        <p className="col-7">Cash</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Bank Name:</span>
                                                                        <p className="col-7">The City Bank Limited</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">Branch Name:</span>
                                                                        <p className="col-7">DIT Road, Rampura, Dhaka</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="info-col row">
                                                                        <span className="col-5">A/C Number:</span>
                                                                        <p className="col-7">211326 565656 56656</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div id="employee-pay-structure" className="tab-pane">
                                                    <div className="content-header">
                                                        <h5>Pay Structure</h5>
                                                        <div className="btn-group">
                                                            <button className="btn btn-primary btn-save">Save</button>
                                                            <span className="btn-edit"><span className="material-icons"> edit </span></span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <table className="pay-structure-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th colSpan="2">
                                                                            <h5>Earning</h5>
                                                                            <span className="material-icons" data-toggle="modal" data-target="#add-pay-structure-modal"> add </span>
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Head</th>
                                                                        <th>Amount</th>
                                                                    </tr>
                                                                </thead>

                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Basic:</p>
                                                                        </td>
                                                                        <td>
                                                                            <input type="text" dir="rtl" className="form-control-sm" defaultValue="5,000"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>House Rent:</p>
                                                                        </td>
                                                                        <td>
                                                                            <p>5,000</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Conveyance, Allowance:</p>
                                                                        </td>
                                                                        <td>
                                                                            <p>5,000</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Medical Allowance:</p>
                                                                        </td>
                                                                        <td>
                                                                            <p>5,000</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Washing Allowance:</p>
                                                                        </td>
                                                                        <td>
                                                                            <p>5,000</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Dearness Allowance* / L.F.A:</p>
                                                                        </td>
                                                                        <td>
                                                                            <p>5,000</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>University PF:</p>
                                                                        </td>
                                                                        <td>
                                                                            <p>5,000</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>S.P.A:</p>
                                                                        </td>
                                                                        <td>
                                                                            <p>5,000</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>RETRO:</p>
                                                                        </td>
                                                                        <td>
                                                                            <p>5,000</p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>

                                                                <tfoot>
                                                                    <tr>
                                                                        <th>Total Earning:</th>
                                                                        <th>58000</th>
                                                                    </tr>
                                                                </tfoot>
                                                            </table>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <table className="pay-structure-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th colSpan="2">
                                                                            <h5>Earning</h5>
                                                                            <span className="material-icons" data-toggle="modal" data-target="#add-pay-structure-modal"> add </span>
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Head</th>
                                                                        <th>Amount</th>
                                                                    </tr>
                                                                </thead>

                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Income Tax:</p>
                                                                        </td>
                                                                        <td>
                                                                            {/* <p>5,000</p> */}
                                                                            <input type="text" dir="rtl" className="form-control-sm" defaultValue="5,000"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Total PF:</p>
                                                                        </td>
                                                                        <td>
                                                                            <p>5,000</p>
                                                                            {/* <input type="text" dir="rtl" className="form-control-sm" defaultValue="5,000"> */}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>PF Loan:</p>
                                                                        </td>
                                                                        <td>
                                                                            <p>5,000</p>
                                                                            {/* <input type="text" dir="rtl" className="form-control-sm" defaultValue="5,000"> */}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Group Insurance:</p>
                                                                        </td>
                                                                        <td>
                                                                            <p>5,000</p>
                                                                            {/* <input type="text" dir="rtl" className="form-control-sm" defaultValue="5,000"> */}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Other Deduction*/ L.F.A:</p>
                                                                        </td>
                                                                        <td>
                                                                            <p>5,000</p>
                                                                            {/* <input type="text" dir="rtl" className="form-control-sm" defaultValue="5,000"> */}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Revenue Stamp:</p>
                                                                        </td>
                                                                        <td>
                                                                            <p>5,000</p>
                                                                            {/* <input type="text" dir="rtl" className="form-control-sm" defaultValue="5,000"> */}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Advance:</p>
                                                                        </td>
                                                                        <td>
                                                                            <p>5,000</p>
                                                                            {/* <input type="text" dir="rtl" className="form-control-sm" defaultValue="5,000"> */}
                                                                        </td>
                                                                    </tr>
                                                                </tbody>

                                                                <tfoot>
                                                                    <tr>
                                                                        <th>Total Deduction:</th>
                                                                        <th>58000</th>
                                                                    </tr>
                                                                </tfoot>
                                                            </table>

                                                            <div className="modal" id="add-pay-structure-modal" tabIndex="-1" role="dialog" aria-labelledby="AddInformation" aria-hidden="true">
                                                                <div className="modal-dialog modal-dialog-centered" role="document">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            <h5 className="modal-title">Add Information</h5>
                                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                                <span aria-hidden="true">&times;</span>
                                                                            </button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            <div className="row">
                                                                                <div className="col-lg-6 col-12 form-group">
                                                                                    <label htmlFor="payment_type">Head</label>
                                                                                    <select className="form-control">
                                                                                        <option>Select Head</option>
                                                                                        <option>Head 1</option>
                                                                                        <option>Head 2</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div className="col-lg-6 col-12 form-group">
                                                                                    <label htmlFor="pay_structure-amount">Amount</label>
                                                                                    <input type="number" className="form-control" id="pay_structure-amount" placeholder="Enter Amount"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="modal-footer justify-content-center">
                                                                            <button type="button" className="btn btn-primary btn-global">Save</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2">
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="row">
                                                                <div className="col-lg-7 form-group">
                                                                    <label htmlFor="net_payable">Net Payable</label>
                                                                    <input type="text" className="form-control" id="net_payable" placeholder="Enter Net Payable" />
                                                                </div>
                                                                <div className="col-lg-7 checkbox-group">
                                                                    <label className="chacked">
                                                                        <input type="checkbox" defaultValue="1" /><span>Stop Salary</span>
                                                                    </label>
                                                                    <label className="">
                                                                        <input type="checkbox" defaultValue="1" /><span>Stop Salary</span>
                                                                    </label>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="row">
                                                                <div className="col-12 form-group">
                                                                    <label htmlFor="approval-comment">Comment</label>
                                                                    <textarea className="form-control" type="text" placeholder="Write Here.." id="approval-comment" rows="3"></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default EmployeeProfile;
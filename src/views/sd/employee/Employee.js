import React from 'react';
import CommonLayout from '../../common/CommonLayout';
import TitleBreadcrumb from '../../common/TitleBreadcrumb';

import avater from '../../../assets/images/avater.png'

class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tb: "Employee" };
    }

    singleEmployeeClickHandler = (id) => {
        console.log(this.props)
        this.props.history.push({
            pathname:  "/features/configuration/employee:" + id
         });
    }

    render() {
        return (
            <>
                <CommonLayout />
                <TitleBreadcrumb titleBreadcrumb={this.state.tb} />
                <div id="main-section" className="main-section">

                    <div className="layout-container">
                        <div className="container-fluid">
                            <div className="col-12 employee-list-area">
                                <div className="row employee-list-header">
                                    <div className="header-left">
                                        <h5>EMPLOYEES: <span className="material-icons"> chevron_left </span><p>1-35 Of 500</p><span className="material-icons"> navigate_next </span></h5>
                                    </div>
                                    <div className="header-right">
                                        <button type="button" className="btn btn-primary btn-global create-btn" data-toggle="modal" data-target="#create-employee-modal"> <span className="material-icons"> add </span>Create Employee</button>
                                        <div className="form-group"><span className="material-icons"> search </span><input type="text" placeholder="Search by Name, ID No" className="form-control" /></div>
                                        <span className="filter_search"><span className="material-icons"> filter_alt </span></span>
                                    </div>
                                </div>

                                <div className="modal" id="create-employee-modal" tabIndex="-1" role="dialog" aria-labelledby="GETEmployeeINFO" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Create Employee: <span>Employee Basic</span></h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">

                                                <div className="row">
                                                    <div className="col-lg-6 col-12 form-group">
                                                        <label htmlFor="customer_name">Customer Name</label>
                                                        <input type="text" className="form-control" id="customer_name" placeholder="Enter Customer Name" />
                                                    </div>
                                                    <div className="col-lg-6 col-12 form-group">
                                                        <label htmlFor="owner_name">Owner Name</label>
                                                        <input type="text" className="form-control" id="owner_name" placeholder="Enter Owner Name" />
                                                    </div>
                                                    <div className="col-lg-12 col-12 form-group">
                                                        <label htmlFor="customer_address">Customer Address</label>
                                                        <input type="text" className="form-control" id="customer_address" placeholder="Enter Customer Address" />
                                                    </div>
                                                    <div className="col-lg-4 col-12 form-group">
                                                        <label htmlFor="contact_number">Contact Number</label>
                                                        <input type="tel" className="form-control" id="contact_number" placeholder="Enter Contact Number" />
                                                    </div>
                                                    <div className="col-lg-4 col-12 form-group">
                                                        <label htmlFor="customer_email">Email</label>
                                                        <input type="email" className="form-control" id="customer_email" placeholder="Enter Email" />
                                                    </div>
                                                    <div className="col-lg-4 col-12 form-group">
                                                        <label htmlFor="customer_dob">Date of Birth</label>
                                                        <input type="date" className="form-control" id="customer_dob" />
                                                    </div>
                                                    <div className="col-lg-4 col-12 form-group">
                                                        <label htmlFor="customer_father_name">Father's Name</label>
                                                        <input type="text" className="form-control" id="customer_father_name" placeholder="Enter Father Name" />
                                                    </div>
                                                    <div className="col-lg-4 col-12 form-group">
                                                        <label htmlFor="customer_mother_name">Mother's Name</label>
                                                        <input type="text" className="form-control" id="customer_mother_name" placeholder="Enter Mother Name" />
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
                                                        <label htmlFor="customer_nid">National ID No</label>
                                                        <input type="number" className="form-control" id="customer_nid" placeholder="Enter National ID No" />
                                                    </div>
                                                    <div className="col-lg-4 col-12 form-group">
                                                        <label htmlFor="customer-tin-number">TIN</label>
                                                        <input type="text" className="form-control" id="customer-tin-number" placeholder="Enter TIN No" />
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
                                                        <label htmlFor="customer_marital_status">Marital Status</label>
                                                        <select className="form-control">
                                                            <option>Select Marital Status</option>
                                                            <option>Unmarried</option>
                                                            <option>Married</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-4 col-12 form-group">
                                                        <label htmlFor="customer-tin-number">TIN</label>
                                                        <input type="file" className="form-control" id="customer-tin-number" placeholder="Enter TIN No" />
                                                    </div>
                                                    <div className="col-12 form-group">
                                                        <label htmlFor="user-bio">Bio</label>
                                                        <textarea className="form-control" type="text" placeholder="Write Here.." id="user-bio" rows="5"></textarea>
                                                    </div>
                                                </div>

                                                <hr />
                                                <div className="row">
                                                    <div className="col-lg-4 col-12 form-group">
                                                        <label htmlFor="customer_blood_group">Customer Type</label>
                                                        <select className="form-control">
                                                            <option>Select Customer Type</option>
                                                            <option>Credit Customer</option>
                                                            <option>Cash Customer</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-4 col-12 form-group">
                                                        <label htmlFor="trade-license">Trade License</label>
                                                        <input type="text" className="form-control" id="trade-license" placeholder="Enter Trade License No" />
                                                    </div>
                                                    <div className="col-lg-4 col-12 form-group">
                                                        <label htmlFor="tin-number">TIN</label>
                                                        <input type="text" className="form-control" id="tin-number" placeholder="Enter TIN No" />
                                                    </div>
                                                    <div className="col-lg-4 col-12 form-group">
                                                        <label htmlFor="bin-number">BIN</label>
                                                        <input type="text" className="form-control" id="bin-number" placeholder="Enter BIN No" />
                                                    </div>
                                                    <div className="col-lg-4 col-12 form-group">
                                                        <label htmlFor="vat-reg-number">Vat Registration</label>
                                                        <input type="text" className="form-control" id="vat-reg-number" placeholder="Enter Vat Registration No" />
                                                    </div>
                                                    <div className="col-12 form-group">
                                                        <label htmlFor="location">Location on Map</label>
                                                        <iframe title="map-1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15232.168217439821!2d89.25790032627522!3d25.727159098138372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32db15873de0b%3A0x95440457e2745c92!2sTajhat%20Zamindar%20Palace!5e0!3m2!1sen!2sbd!4v1620755465134!5m2!1sen!2sbd" width="100%" height="300" style={{border: '0'}} allowFullScreen="" loading="lazy"></iframe>
                                                    </div>
                                                </div>

                                                <hr />
                                                <div className="row">
                                                    <div className="col-12 sales-area-header">
                                                        <p>Sales Area: <span>Dhanmondi 32</span><span className="see-more">+2 Others</span></p>
                                                        <span className="btn-add" href=""><span className="material-icons"> add </span></span>
                                                    </div>
                                                    <div className="col-lg-4 col-12 form-group">
                                                        <label htmlFor="customer_blood_group">Sales Area</label>
                                                        <select className="form-control">
                                                            <option>Select Sales Area</option>
                                                            <option>Area 1</option>
                                                            <option>Area 2</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-8 col-12 form-group">
                                                        <label htmlFor="sales-area-address">Sales Area Address</label>
                                                        <input type="text" className="form-control" id="sales-area-address" placeholder="Enter Sales Area Address" />
                                                    </div>
                                                    <div className="col-12 form-group">
                                                        <label htmlFor="location">Location on Map</label>
                                                        <iframe title="map-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15232.168217439821!2d89.25790032627522!3d25.727159098138372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32db15873de0b%3A0x95440457e2745c92!2sTajhat%20Zamindar%20Palace!5e0!3m2!1sen!2sbd!4v1620755465134!5m2!1sen!2sbd" width="100%" height="300" style={{border: '0'}} allowFullScreen="" loading="lazy"></iframe>
                                                    </div>
                                                    <div className="col-12 d-flex justify-content-center">
                                                        <button type="button" className="btn btn-primary btn-global">Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <p>Page 1 of 3</p>
                                                <div className="wizard-btn-group">
                                                    <button type="button" className="btn btn-primary btn-back"><span className="material-icons">west</span>Back</button>
                                                    <button type="button" className="btn btn-primary btn-next">Save &amp; Next<span className="material-icons">east</span></button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <table className="col-12 employee-list-table">
                                        <thead>
                                            <tr>
                                                <th>Employee</th>
                                                <th>Employee Id</th>
                                                <th>Designation</th>
                                                <th>Department</th>
                                                <th>Location</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Status</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="user-table">
                                                                <img src={avater} alt="avt" />
                                                                <p>Mehedi Hassan</p>
                                                            </div>
        
                                                        </td>
                                                        <td>
                                                            <p>xyz-2231225</p>
                                                        </td>
                                                        <td>
                                                            <p>Executive Vice President</p>
                                                        </td>
                                                        <td>
                                                            <p>Human Resource</p>
                                                        </td>
                                                        <td>
                                                            <p>63/C Lake Circus, West Panthapath, Dhaka 1205</p>
                                                        </td>
                                                        <td>
                                                            <p>tolofik310@goqoez.com</p>
                                                        </td>
                                                        <td>
                                                            <p>01682267414</p>
                                                        </td>
                                                        <td>
                                                            <p>CONTRACTUAL</p>
                                                        </td>
                                                        <td>
                                                            <div className="hover-btns">
                                                                <span title="View" data-toggle="tooltip" data-placement="left"> <span className="action-btn material-icons visibility" onClick={ () => this.singleEmployeeClickHandler() }>visibility</span> </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                            {/* {
                                                Array.from({lenght: 20}, (_, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <div className="user-table">
                                                                <img src={avater} alt="avt" />
                                                                <p>Mehedi Hassan</p>
                                                            </div>
        
                                                        </td>
                                                        <td>
                                                            <p>xyz-2231225</p>
                                                        </td>
                                                        <td>
                                                            <p>Executive Vice President</p>
                                                        </td>
                                                        <td>
                                                            <p>Human Resource</p>
                                                        </td>
                                                        <td>
                                                            <p>63/C Lake Circus, West Panthapath, Dhaka 1205</p>
                                                        </td>
                                                        <td>
                                                            <p>tolofik310@goqoez.com</p>
                                                        </td>
                                                        <td>
                                                            <p>01682267414</p>
                                                        </td>
                                                        <td>
                                                            <p>CONTRACTUAL</p>
                                                        </td>
                                                        <td>
                                                            <div className="hover-btns">
                                                                <span title="View" data-toggle="tooltip" data-placement="left"> <span className="action-btn material-icons visibility" onClick={ () => this.singleEmployeeClickHandler(index) }>visibility</span> </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            } */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Employee;
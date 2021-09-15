import React, { useState, useEffect } from 'react';
import CommonLayout from '../../../../common/CommonLayout.js';
import TitleBreadcrumb from '../../../../common/TitleBreadcrumb.js';

const Deliveries = () => {
    const [tb] = useState('Delivery Collection');
    const [dataTableFlag] = useState('Delivery Collection');
    
    useEffect( () => {
        console.log('initial')
    })

    const invoiceNoClickHandler = () => {
        alert('data')
    }

    return (
        <div>
            <CommonLayout />
            <TitleBreadcrumb titleBreadcrumb={tb} />
            <div id="main-section" className="main-section">
                <div className="layout-body">

                    <div className="layout-sidebar order">
                        {/* <!-- Start Secondary Sidebar Area-->   */}
                        {/* <!-- Start Secondary Sidebar Header Area-->   */}
                        <div className="header">
                            <div className="row1">
                                <div className="form-group"><i className="fa fa-search"> </i><input type="text" placeholder="Search by Name, ID No" className="form-control" /></div>
                                <span className="filter_search"><i className="fa fa-filter"> </i> </span>
                            </div>
                            <div className="row2" style={{ marginTop: '20px' }}>
                                <h5 style={{ color: '#36454f', fontSize: '14px' }}>Total Customer (<span className="count">32</span>)</h5>
                            </div>
                        </div>
                        {/* <!--End Secondary Sidebar Header Area-->   */}

                        {/* <!--Start Secondary Sidebar Content Area-->  */}
                        <div className="content">
                            {
                                Array.from({ length: 20 }, (_, index) => (
                                    <div className="card_body" key={index}>
                                        <div className="row1"><h5>DHK210914104</h5> <p className={index % 3 === 0 ? 'status available' : 'status occupied'}> <i className="fa fa-square mr-1" aria-hidden="true"></i>{index % 3 === 0 ? 'Undelivered' : 'Delivered'}</p></div>
                                        <div className="row2"><p>New Jatrabari Medical Hall</p></div>
                                        {/* <div className="row3"><p>Doctor: 00</p> <p>|</p> <p>Chemist: 00</p> <p>|</p> <p>Institution: 00</p></div> */}
                                        <div className="row3">
                                            <p>Total Bill: 5000.00</p>
                                            <span className="badge badge-primary Cash d-flex align-items-center font-12 font-w-400">Cash</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {/* <!--End Secondary Sidebar Content Area-->  */}
                        {/* <!-- End Secondary Sidebar Area-->  */}
                    </div>

                    <div className="layout-container">
                        <div className="container-fluid">
                            <div className="col-12 delivery_collection_area">
                                <div className="row deCollection_header">
                                    <div className="col-12">
                                        <h5>Invoice No: <span onClick={invoiceNoClickHandler} style={{cursor: 'pointer', textDecoration: 'underline'}}>102131</span></h5>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <p>Customer: <span className="customer-name">ABI Pharmacy and Diagnostic Center</span></p>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <p>Phone: <span className="outstanding-amount">01755440038</span></p>
                                    </div>
                                    <div className="col-lg-5 col-md-2 col-12">
                                        <p>Address: <span>27/1A Sukrabad dhanmondi 32, Dhaka 1207</span></p>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <p>Previous Due: <span className="customer-territory">10000</span></p>
                                    </div>
                                    <div className="col-lg-3 col-md-2 col-12">
                                        <p>Order Placed: <span>09/12/2020</span></p>
                                    </div>
                                    <div className="col-lg-5 col-md-2 col-12">
                                        <p>Territory: <span className="customer-mio">HCDP, JURAIN</span></p>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <p>Submitted By: <span className="customer-am">Atik Faysal</span></p>
                                    </div>
                                    <div className="col-lg-4 col-md-2 col-12">
                                        <p>Delivery Date: <span>09/12/2020</span></p>
                                    </div>
                                </div>

                                <div className="row d-flex justify-content-center">
                                    <table className="col-12 delivery-collection-table">
                                        <thead>
                                            <tr>
                                                <th>Payment Mode</th>
                                                <th>Description</th>
                                                <th>Taka</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {

                                                Array.from({ length: 20 }, (_, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <p>Cash {index + 1}</p>
                                                        </td>
                                                        <td>
                                                            <p>Description Line Here</p>
                                                        </td>
                                                        <td>
                                                            <p>300.00</p>
                                                        </td>
                                                        <td>
                                                            <span className="edit" href=""><i className="fa fa-pencil" title="Edit" data-toggle="tooltip" data-placement="bottom" aria-hidden="true"></i></span>
                                                            <span className="remove" href=""><i className="fa fa-trash" title="Remove" data-toggle="tooltip" data-placement="bottom" aria-hidden="true"></i></span>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row deCollection-footer">
                                    <span><button className="btn btn-primary btn-global btn-draft mx-2">Close</button></span>
                                    <span data-toggle="modal" data-target="#new-payment-modal"><button className="btn btn-primary btn-global mx-2">New Payment</button></span>
                                </div>

                                {/* <!------------ Start Add New Payment Modal------------> */}
                                <div className="modal" id="new-payment-modal" tabIndex="-1" role="dialog" aria-labelledby="AddCollection"
                                    aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Payment</h5>
                                                <button className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="row">
                                                    <div className="col-lg-6 form-group">
                                                        <label htmlFor="payment_mode">Payment Mode</label>
                                                        {/* <select className="form-control" id="payment_mode" onChange="getOption(this.value)"> */}
                                                        <select className="form-control" id="payment_mode">
                                                            <option value="d-Cash">Cash</option>
                                                            <option value="d-Challan">Challan</option>
                                                            <option value="d-EFTN">EFTN</option>
                                                            <option value="d-Chaque">Chaque</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-lg-6 form-group">
                                                        <label htmlFor="cash_amount">Amount</label>
                                                        <input type="text" className="form-control" id="cash_amount" placeholder="Enter Amount" />
                                                    </div>
                                                </div>

                                                {/* <!-- Challan --> */}
                                                <div className="row" id="d-Challan" style={{ display: 'none' }}>
                                                    <div className="col-lg-6 col-md-6 col-12 form-group">
                                                        <label htmlFor="challan_document_no">Document No</label>
                                                        <input type="text" className="form-control" id="challan_document_no" placeholder="Enter Document No" />
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-12 form-group">
                                                        <label htmlFor="challan_date">Date</label>
                                                        <input type="date" className="form-control" id="challan_date" />
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-12 form-group">
                                                        <label htmlFor="bank">Bank Name</label>
                                                        <select className="form-control" id="bank">
                                                            <option value="1">Select Bank</option>
                                                            <option value="2">Dhaka Bank Ltd</option>
                                                            <option value="3">City Bank Ltd</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-12 form-group">
                                                        <label htmlFor="bank">Bank Branch Name</label>
                                                        <select className="form-control" id="bank">
                                                            <option value="1">Select Branch</option>
                                                            <option value="2">Dhanmondi Branch</option>
                                                            <option value="3">kalabagan Branch</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-12 form-group">
                                                        <label htmlFor="scannedfile">Scanned File</label>
                                                        <input type="file" className="form-control-file" id="scannedfile" />
                                                    </div>

                                                    {/* <!--Uploaded File--> */}
                                                    <div className="col-6">
                                                        <div className="uploaded-file">
                                                            <img className="w-100" src="../../../../assets/images/products/documents.jpg" alt="document"/>
                                                            <div className="file-info">
                                                                <p>File name Line Here</p>
                                                                <div className="file-button">
                                                                    <i className="fa fa-download download" aria-hidden="true"></i>
                                                                    <i className="fa fa-trash remove" aria-hidden="true"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!--Uploaded File--> */}
                                                    <div className="col-6">
                                                        <div className="uploaded-file">
                                                            <img className="w-100" src="./documents.jpg" alt="document"/>
                                                            <div className="file-info">
                                                                <p>File name Line Here</p>
                                                                <div className="file-button">
                                                                    <i className="fa fa-download download" aria-hidden="true"></i>
                                                                    <i className="fa fa-trash remove" aria-hidden="true"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                {/* <!-- EFTN --> */}
                                                <div className="row" id="d-EFTN" style={{ display: 'none' }}>
                                                    <div className="col-lg-6 col-md-6 col-12 form-group">
                                                        <label htmlFor="challan_document_no">Document No</label>
                                                        <input type="text" className="form-control" id="challan_document_no" placeholder="Enter Document No" />
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-12 form-group">
                                                        <label htmlFor="challan_date">Date</label>
                                                        <input type="date" className="form-control" id="challan_date" />
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-12 form-group">
                                                        <label htmlFor="bank">Bank Name</label>
                                                        <select className="form-control" id="bank">
                                                            <option value="1">Select Bank</option>
                                                            <option value="2">Dhaka Bank Ltd</option>
                                                            <option value="3">City Bank Ltd</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-12 form-group">
                                                        <label htmlFor="bank">Bank Branch Name</label>
                                                        <select className="form-control" id="bank">
                                                            <option value="1">Select Branch</option>
                                                            <option value="2">Dhanmondi Branch</option>
                                                            <option value="3">kalabagan Branch</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-12 form-group">
                                                        <label htmlFor="scannedfile">Scanned File</label>
                                                        <input type="file" className="form-control-file" id="scannedfile" />
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-12 form-group">
                                                        <label htmlFor="eftn_acount_no">Acount No</label>
                                                        <input type="text" className="form-control" id="eftn_acount_no" placeholder="Enter Acount No" />
                                                    </div>

                                                </div>
                                                {/* <!-- Chaque --> */}
                                                <div className="row" id="d-Chaque" style={{ display: 'none' }}>
                                                    <div className="col-lg-6 col-md-6 col-12 form-group">
                                                        <label htmlFor="chaque_document_no">Document No</label>
                                                        <input type="text" className="form-control" id="chaque_document_no" placeholder="Enter Document No" />
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-12 form-group">
                                                        <label htmlFor="chaque_date">Date</label>
                                                        <input type="date" className="form-control" id="chaque_date" />
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-12 form-group">
                                                        <label htmlFor="bank">Bank Name</label>
                                                        <select className="form-control" id="bank">
                                                            <option value="1">Select Bank</option>
                                                            <option value="2">Dhaka Bank Ltd</option>
                                                            <option value="3">City Bank Ltd</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-12 form-group">
                                                        <label htmlFor="bank">Bank Branch Name</label>
                                                        <select className="form-control" id="bank">
                                                            <option value="1">Select Branch</option>
                                                            <option value="2">Dhanmondi Branch</option>
                                                            <option value="3">kalabagan Branch</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-12 form-group">
                                                        <label htmlFor="scannedfile">Scanned File</label>
                                                        <input type="file" className="form-control-file" id="scannedfile" />
                                                    </div>
                                                </div>

                                                <div className="modal-footer justify-content-center">
                                                    <span><button className="btn btn-primary btn-global btn-draft mx-2">Save &amp; Exit</button></span>
                                                    <span><button className="btn btn-primary btn-global mx-2">Save &amp; New Payment</button></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!------------ End Add New Payment Modal------------> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Deliveries;
import React from 'react';
// import React, { useState, useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import CommonLayout from '../../../../common/CommonLayout.js';
import TitleBreadcrumb from '../../../../common/TitleBreadcrumb.js';
// import SuccessModal from '../../../../helpers/modals/success.js';
import doc_img from '../../../../../assets/images/products/documents.jpg';
import { pending_delivered_invoice_list_service_demo } from '../../../../../service/DeliveryCollection.js';
import { pending_delivered_invoice_list } from '../../../../../response_data/delivery_collection.js';

class Deliveries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tb: "Delivery Collection",
            dataTableFlag: 1,
            invList: [{}],
            isLoading: true,
        };
    }

    dd = [
        'one', 'two', 'three'
    ]

    componentWillMount = () => {
        console.log('componentWillMount');
        // setTimeout( () => {
        this.loadInvoiceData();
        // }, 1000)
        // console.log(this.invoice_list)
        // this.setState({
        //     invList: pending_delivered_invoice_list.invoice_list
        // })
    }

    componentWillUnmount = () => {
        clearInterval(this.timer);
        this.timer = null;
        console.log('componentWillUnmount');
        console.log('This method is called when our component goes away, and it’s a good time to stop the timer by calling clearInterval() and setting it to null')
    }

    componentDidMount = () => {
        console.log('componentDidMount');
    }

    loadInvoiceData = async () => {
        await pending_delivered_invoice_list_service_demo().then(res => {
            console.log(res);
            console.log(res.invoice_list.length);
            console.log(this.state.isLoading);

            // this.dd = []
            // res.invoice_list.forEach(el => {
            //     this.dd.push(el)
            //     console.log(el)
            // })

            this.setState({
                invList: res.invoice_list,
                isLoading: false,
                // invList: res.data,
            })
            console.log(this.state.isLoading);
        });
    }

    checkLeftSectionData = () => {
        if (this.state.isLoading) {
            return (
                <div>is loading</div>
            );
        }
        if (!this.state.invList.length) {
            return (
                <>No length</>
            )
        }
        return (
            <>
                {
                    this.state.invList.map(item => (
                        <div className="card_body" key={item.id}>
                            <div className="row1">
                                <h5>{item.invoice_no}</h5>
                                <p className={item.delivery_flag === 'Y' ? 'status available' : 'status occupied'}>
                                    <i className="fa fa-square mr-1" aria-hidden="true"></i>
                                    {item.delivery_flag === 'Y' ? 'Delivered' : 'Undelivered'}
                                </p>
                            </div>
                            <div className="row2">
                                <p>{item.sbu_customer_info.customer_info.customer_address}</p>
                            </div>
                            <div className="row3">
                                <p>Total Bill: {Number(item.net_total).toFixed(2)}</p>
                                <span className="badge badge-primary Cash d-flex align-items-center font-12 font-w-400">{item.sbu_customer_info.credit_flag === 'Y' ? 'Credit' : 'Cash'}</span>
                            </div>
                        </div>
                    ))
                }
            </>
        );
    }

    // invoice_list = pending_delivered_invoice_list.invoice_list

    // const [dataTableFlag, setDataTableFlag] = useState(1);
    // const [cardIndex, setCardIndex] = useState('');


    // useEffect(() => {
    //     console.log('initial')
    // })


    invoiceNoClickHandler = () => {
        console.log(this.invoice_list)
        // dataTableFlag ? setDataTableFlag(0) : setDataTableFlag(1)
        this.state.dataTableFlag ?
            this.setState({
                dataTableFlag: 0
            }) :
            this.setState({
                dataTableFlag: 1
            })
    }

    cardBodyClickHandler = (selector, index) => {
        console.log(selector)
        console.log(index)
        // console.log(index.target)
        // console.log(index.target.className)
        // let cardBodyList = document.querySelectorAll('.delivery-collection .card_body')
        // cardBodyList.forEach( el => {
        //     el.className = 'card_body'
        // })
        // document.querySelectorAll('.delivery-collection .card_body')[index].className = 'card_body active'
        // if(document.querySelectorAll('.delivery-collection .card_body')[index])
        //     document.querySelectorAll('.delivery-collection .card_body')[index].className = 'card_body active'
    }

    proceedDeliveryClickHandler = () => {
        confirmAlert({
            title: 'Are you sure?',
            message: 'You want to proceed.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        // dataTableFlag ? setDataTableFlag(0) : setDataTableFlag(1)
                        // this.state.dataTableFlag ? this.state.dataTableFlag = 0 : this.state.dataTableFlag = 1
                        this.state.dataTableFlag ?
                            this.setState({
                                dataTableFlag: 0
                            }) :
                            this.setState({
                                dataTableFlag: 1
                            })
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

    paymentModalSelectOptionOnChangeEvent = (event) => {
        console.log(event.target.value)
        let status = event.target.value

        if (status === "CASH") {
            // document.getElementById('d-Cash').show();
            document.getElementById('d-Challan').style.display = 'none'
            document.getElementById('d-EFTN').style.display = 'none'
            document.getElementById('d-Chaque').style.display = 'none'
        } else if (status === "CHALLAN") {
            // document.getElementById('#d-Cash').hide();
            document.getElementById('d-Challan').style.display = 'flex'
            document.getElementById('d-EFTN').style.display = 'none'
            document.getElementById('d-Chaque').style.display = 'none'
        } else if (status === "EFTN") {
            // document.getElementById('#d-Cash').hide();
            document.getElementById('d-Challan').style.display = 'none'
            document.getElementById('d-EFTN').style.display = 'flex'
            document.getElementById('d-Chaque').style.display = 'none'
        } else if (status === "CHAQUE") {
            // document.getElementById('#d-Cash').hide();
            document.getElementById('d-Challan').style.display = 'none'
            document.getElementById('d-EFTN').style.display = 'none'
            document.getElementById('d-Chaque').style.display = 'flex'
        } else {
            // document.getElementById('#d-Cash').hide();
            document.getElementById('d-Challan').style.display = 'none'
            document.getElementById('d-EFTN').style.display = 'none'
            document.getElementById('d-Chaque').style.display = 'none'
        }
    }

    // const QuipComponent = props => (<p>{props.quip}</p>)

    render() {
        return (
            <div>
                <CommonLayout />
                <TitleBreadcrumb titleBreadcrumb={this.state.tb} />
                <div className="main-section">
                    {/* <QuipComponent quip="Don't believe everything you think." /> */}
                    {/* <SuccessModal /> */}
                    <div className="layout-body delivery-collection">

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
                                    this.checkLeftSectionData()
                                    // this.state.invList ? this.state.invList : 'false'
                                    // Array.from({ length: 20 }, (_, index) => (
                                    // this.state.isLoading ?
                                    // Object.keys(this.state.invList).map( (element, index) => (
                                    //     <div className="card_body" onClick={this.cardBodyClickHandler}>
                                    //         <div className="row1"><h5>No Data Found {element} {index}</h5> <p className='status available'> <i className="fa fa-square mr-1" aria-hidden="true"></i>Undelivered</p></div>
                                    //         <div className="row2"><p>No Data Found............</p></div>
                                    //         <div className="row3">
                                    //             <p>No Data Found</p>
                                    //             <span className="badge badge-primary Cash d-flex align-items-center font-12 font-w-400">Cash</span>
                                    //         </div>
                                    //     </div>
                                    // ))
                                    // this.state.invList.map( (element) => (
                                    //     <div className="card_body" key={element.id} onClick={this.cardBodyClickHandler}>
                                    //         <div className="row1"><h5>{element.invoice_no}</h5> <p className={element.delivery_flag === 'Y' ? 'status available' : 'status occupied'}> <i className="fa fa-square mr-1" aria-hidden="true"></i>{element.delivery_flag === 'Y' ? 'Undelivered' : 'Delivered'}</p></div>
                                    //         <div className="row2"><p>{element.sbu_customer_info}</p></div>
                                    //         {/* <div className="row3"><p>Doctor: 00</p> <p>|</p> <p>Chemist: 00</p> <p>|</p> <p>Institution: 00</p></div> */}
                                    //         <div className="row3">
                                    //             <p>Total Bill: 5000.00</p>
                                    //             <span className="badge badge-primary Cash d-flex align-items-center font-12 font-w-400">Cash</span>
                                    //         </div>
                                    //     </div>
                                    // )) 
                                    // :
                                    // <div className="card_body" onClick={this.cardBodyClickHandler}>
                                    //     <div className="row1"><h5>No Data Found {this.invList}</h5> <p className='status available'> <i className="fa fa-square mr-1" aria-hidden="true"></i>Undelivered</p></div>
                                    //     <div className="row2"><p>No Data Found............</p></div>
                                    //     <div className="row3">
                                    //         <p>No Data Found</p>
                                    //         <span className="badge badge-primary Cash d-flex align-items-center font-12 font-w-400">Cash</span>
                                    //     </div>
                                    // </div>
                                    // <div>
                                    //     <i className="fa fa-spinner fa-spin"></i>
                                    //     {/* {JSON.stringify(this.state.invList)} */}
                                    // </div>
                                }
                            </div>
                            {/* <!--End Secondary Sidebar Content Area-->  */}
                            {/* <!-- End Secondary Sidebar Area-->  */}
                        </div>

                        <div className="layout-container" style={{ width: '100%' }}>
                            <div className="container-fluid">
                                <div className="col-12 delivery_collection_area">
                                    <div className="row deCollection_header">
                                        <div className="col-12">
                                            <h5>Invoice No: <span onClick={this.invoiceNoClickHandler} style={{ cursor: 'pointer', textDecoration: 'underline' }}>102131</span></h5>
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


                                    {
                                        this.state.dataTableFlag ?
                                            (
                                                <div>
                                                    <div className="row delivery-collection-table">
                                                        <table className="col-12">
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th> <div>Trade Price <span>(With Vat)</span></div> </th>
                                                                    <th>Quantity</th>
                                                                    <th>Discount</th>
                                                                    <th>Bonus</th>
                                                                    <th>Total Price</th>
                                                                    <th> </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    Array.from({ length: 20 }, (_, index) => (
                                                                        <tr className={index === 1 ? 'active' : ''} key={index}>
                                                                            <td>
                                                                                <div className="product">
                                                                                    <p className="name">Ace® Power <span>500mg</span></p>
                                                                                    <p className="type">Paricatamole</p>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <input className="form-control-sm" type="text" placeholder="00" value={300} readOnly />
                                                                            </td>
                                                                            <td>
                                                                                <form>
                                                                                    <div className="quantity-input">
                                                                                        <input className='minus' type='button' value='-' field='quantity' />
                                                                                        <input className='quantity' type='text' name='quantity' placeholder="0" />
                                                                                        <input className='plus' type='button' value='+' field='quantity' />
                                                                                    </div>
                                                                                </form>
                                                                            </td>
                                                                            <td>
                                                                                <p>300</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>10%</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>1000.00</p>
                                                                            </td>
                                                                            <td>
                                                                                <div className="hover-btns">
                                                                                    <span className="edit action-btn"><span className="material-icons edit" title="Edit" data-toggle="tooltip"> edit </span></span>
                                                                                    <span className="remove action-btn"><span className="material-icons delete_outline" title="Remove" data-toggle="tooltip"> delete_outline </span></span>
                                                                                    {/* <a title="Edit" data-toggle="tooltip" data-placement="left"><span className="action-btn fa fa-pencil"></span></a>
                                                                                    <a title="Remove" data-toggle="tooltip" data-placement="left"><span className="action-btn remove fa fa-trash"></span></a> */}
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    ))
                                                                }
                                                            </tbody>
                                                            <tfoot>
                                                                <tr>
                                                                    <th colSpan="2"><span className="btn-add-product" data-toggle="modal" data-target="#add-product-modal"><span className="material-icons font-18 add">add</span>Add Product</span></th>
                                                                    <th colSpan="3"> <p className="small-text">Subtotal</p> </th>
                                                                    <th> <p className="small-text">13,032.20</p> </th>
                                                                    <th></th>
                                                                </tr>
                                                                <tr>
                                                                    <th colSpan="2"></th>
                                                                    <th colSpan="3"> <p className="small-text">(+) Vat</p> </th>
                                                                    <th> <p className="small-text">13,032.20</p> </th>
                                                                    <th></th>
                                                                </tr>
                                                                <tr>
                                                                    <th colSpan="2"></th>
                                                                    <th colSpan="3"> <p className="small-text">Gross Total</p> </th>
                                                                    <th> <p className="small-text">13,032.20</p> </th>
                                                                    <th></th>
                                                                </tr>
                                                                <tr>
                                                                    <th colSpan="2"></th>
                                                                    <th colSpan="3"> <p className="small-text">(-) Less discount on TP (2%)</p> </th>
                                                                    <th> <p className="small-text">13,032.20</p> </th>
                                                                    <th></th>
                                                                </tr>
                                                                <tr>
                                                                    <th colSpan="2"></th>
                                                                    <th colSpan="3"> <p className="small-text">Special Discount</p> </th>
                                                                    <th> <p className="small-text">13,032.20</p> </th>
                                                                    <th></th>
                                                                </tr>
                                                                <tr>
                                                                    <th colSpan="2"><span className="btn-add-atachment"><span className="material-icons attachment font-18">attachment</span>Atachment</span></th>
                                                                    <th colSpan="3"><p className="grand-total">Grand Total</p></th>
                                                                    <th><p className="grand-total">14,505.55</p></th>
                                                                    <th></th>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                    <div className="row deCollection-footer">
                                                        <span><button className="btn btn-primary btn-global btn-draft mx-2">Cancel</button></span>
                                                        <span data-toggle="modal"><button className="btn btn-primary btn-global mx-2" onClick={this.proceedDeliveryClickHandler}>Proceed</button></span>
                                                    </div>
                                                </div>
                                            )
                                            :
                                            (
                                                <div>
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
                                                                                <span className="edit action-btn"><span className="material-icons edit" title="Edit" data-toggle="tooltip"> edit </span></span>
                                                                                <span className="remove action-btn"><span className="material-icons delete_outline" title="Remove" data-toggle="tooltip"> delete_outline </span></span>
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
                                                </div>
                                            )
                                    }


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
                                                            <select className="form-control" id="payment_mode" onChange={this.paymentModalSelectOptionOnChangeEvent}>
                                                                <option value={'CASH'} defaultValue>Cash</option>
                                                                <option value={'CHALLAN'}>Challan</option>
                                                                <option value={"EFTN"}>EFTN</option>
                                                                <option value={'CHAQUE'}>Chaque</option>
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

                                                        <div className="col-lg-12 col-md-12 col-12 form-group">
                                                            <label htmlFor="bank">Bank Name</label>
                                                            <select className="form-control" id="bank">
                                                                <option value="1">Select Bank</option>
                                                                <option value="2">Dhaka Bank Ltd</option>
                                                                <option value="3">City Bank Ltd</option>
                                                            </select>
                                                        </div>

                                                        <div className="col-lg-6 col-md-6 col-12 form-group">
                                                            <label htmlFor="bank">District</label>
                                                            <select className="form-control" id="bank">
                                                                <option value="1">Select Branch</option>
                                                                <option value="2">Dhaka</option>
                                                                <option value="3">Mymensingh</option>
                                                                <option value="4">..........</option>
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

                                                        <div className="col-lg-12 col-md-12 col-12 form-group">
                                                            <label htmlFor="challan_account_no">Account No</label>
                                                            <input type="text" className="form-control" id="challan_account_no" />
                                                        </div>

                                                        <div className="col-12 form-group">
                                                            <label htmlFor="scannedfile">Scanned File</label>
                                                            <input type="file" className="form-control-file" id="scannedfile" />
                                                        </div>

                                                    </div>

                                                    {/* <!-- EFTN --> */}
                                                    <div className="row" id="d-EFTN" style={{ display: 'none' }}>
                                                        <div className="col-lg-6 col-md-6 col-12 form-group">
                                                            <label htmlFor="eftn_document_no">Document No</label>
                                                            <input type="text" className="form-control" id="eftn_document_no" placeholder="Enter Document No" />
                                                        </div>

                                                        <div className="col-lg-6 col-md-6 col-12 form-group">
                                                            <label htmlFor="eftn_date">Date</label>
                                                            <input type="date" className="form-control" id="eftn_date" />
                                                        </div>

                                                        <div className="col-lg-12 col-md-12 col-12 form-group">
                                                            <label htmlFor="bank">Bank Name</label>
                                                            <select className="form-control" id="bank">
                                                                <option value="1">Select Bank</option>
                                                                <option value="2">Dhaka Bank Ltd</option>
                                                                <option value="3">City Bank Ltd</option>
                                                            </select>
                                                        </div>

                                                        <div className="col-lg-6 col-md-6 col-12 form-group">
                                                            <label htmlFor="bank">District</label>
                                                            <select className="form-control" id="bank">
                                                                <option value="1">Select Branch</option>
                                                                <option value="2">Dhaka</option>
                                                                <option value="3">Mymensingh</option>
                                                                <option value="4">..........</option>
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

                                                        <div className="col-lg-12 col-md-12 col-12 form-group">
                                                            <label htmlFor="eftn_account_no">Account No</label>
                                                            <input type="text" className="form-control" id="eftn_account_no" />
                                                        </div>

                                                        <div className="col-lg-12 col-md-12 col-12 form-group">
                                                            <label htmlFor="scannedfile">Scanned File</label>
                                                            <input type="file" className="form-control-file" id="scannedfile" />
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

                                                        <div className="col-lg-12 col-md-12 col-12 form-group">
                                                            <label htmlFor="bank">Bank Name</label>
                                                            <select className="form-control" id="bank">
                                                                <option value="1">Select Bank</option>
                                                                <option value="2">Dhaka Bank Ltd</option>
                                                                <option value="3">City Bank Ltd</option>
                                                            </select>
                                                        </div>

                                                        <div className="col-lg-6 col-md-6 col-12 form-group">
                                                            <label htmlFor="bank">District</label>
                                                            <select className="form-control" id="bank">
                                                                <option value="1">Select Branch</option>
                                                                <option value="2">Dhaka</option>
                                                                <option value="3">Mymensingh</option>
                                                                <option value="4">..........</option>
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

                                                        <div className="col-lg-12 col-md-12 col-12 form-group">
                                                            <label htmlFor="cheque_account_no">Account No</label>
                                                            <input type="text" className="form-control" id="cheque_account_no" />
                                                        </div>

                                                        <div className="col-12 form-group">
                                                            <label htmlFor="scannedfile">Scanned File</label>
                                                            <input type="file" className="form-control-file" id="scannedfile" />
                                                        </div>

                                                        {/* <!--Uploaded File--> */}
                                                        <div className="col-6 form-group">
                                                            <div className="uploaded-file">
                                                                <img className="w-100" src={doc_img} alt="document" />
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
}

// const useFormInput = initialValue => {
//     const [value, setValue] = useState(initialValue);

//     const handleChange = e => {
//         setValue(e.target.value);
//     }
//     return {
//         value,
//         onChange: handleChange
//     }
// }

export default Deliveries;
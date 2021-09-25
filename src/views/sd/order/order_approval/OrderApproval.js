import React from 'react';
import CommonLayout from '../../../common/CommonLayout';
import TitleBreadcrumb from '../../../common/TitleBreadcrumb';

class OrderApproval extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tb: "Order Approval" };
    }

    componentDidMount = () => {
        console.log('componentDidMount')
    }

    render() {
        return (
            <>
                <CommonLayout />
                <TitleBreadcrumb titleBreadcrumb={this.state.tb} />
                <div className="main-section">
                    <div className="layout-body ThirdPartyTender">
                        <div className="layout-sidebar ThirdPartyTender">
                            <div className="header">
                                <div className="row1">
                                    <div className="form-group"><span className="fa fa-search"> </span>
                                        <input type="text" placeholder="Search by Name, ID No" className="form-control" />
                                    </div>
                                    <span className="filter_search"><span className="fa fa-filter"> </span> </span>
                                </div>
                                <div className="row2">
                                    <h5>Total Customer: <span>200</span></h5>
                                </div>
                            </div>
                            <div className="content">
                                <div className="ds_accordion" id="accordion-1">
                                    {
                                        Array.from({ length: 10 }, (_, card_body) => (
                                            <div className="card_body" key={card_body}>
                                                <div className="row1"><h5>JMI-2231225</h5> <p className="credit">Credit</p></div>
                                                <div className="row2"><p>New Bhai Bhai Pharmacy</p></div>
                                                <div className="row3"><p>House:100, Road: 11,Block:C,Dhaka 1213</p></div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>

                        <div className="layout-container w-100">
                            <div className="container-fluid">
                                <div className="col-12 delivery_collection_area">
                                    <div className="row deCollection_header">
                                        <div className="col-12 d-flex justify-content-between">
                                            <h5>Invoice No: <span onClick={this.invoiceNoClickHandler} style={{ cursor: 'pointer', textDecoration: 'underline' }}>102131</span></h5>
                                            <span title="Print" data-toggle="tooltip" className="material-icons print"> print </span>
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
                                                                    <span title="Edit" data-toggle="tooltip" data-placement="left"><span className="material-icons edit" title="Edit" data-toggle="tooltip"> edit </span></span>
                                                                    <span title="Remove" data-toggle="tooltip" data-placement="left"><span className="material-icons delete_outline" title="Remove" data-toggle="tooltip"> delete_outline </span></span>
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
                                        <span><button className="btn btn-primary btn-global btn-draft mx-2" data-toggle="modal" data-target="#popup-modal">Cancel</button></span>
                                        <span data-toggle="modal"><button className="btn btn-primary btn-global mx-2" onClick={this.proceedDeliveryClickHandler}>Proceed</button></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal" id="add-product-modal" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Add Product</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="leftsidebar-productlist">
                                                    <div className="header">
                                                        <div className="row1">
                                                            <div className="form-group">
                                                                <i className="fa fa-search"> </i>
                                                                <input type="text" placeholder="Search by Name, ID No" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        {
                                                            Array.from({ length: 20 }, (_, index) => (
                                                                <div className="card_body" key={index}>
                                                                    <div className="row1"><h5>Ace® Power - 500mg Ace®</h5></div>
                                                                    <div className="row2"><p>Code: NP2125</p> <p>TP: 60.00 | MRP: 100.00</p></div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-8">
                                                <div className="row addproduct-modal-table">
                                                    <table className="col-12">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Quantity</th>
                                                                <th>Total Price</th>
                                                                <th> </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                Array.from({ length: 20 }, (_, index) => (
                                                                    <tr key={index}>
                                                                        <td>
                                                                            <div className="product">
                                                                                <p className="name">Ace® Power <span>500mg</span></p>
                                                                                <p className="type">Code: NP2125</p>
                                                                            </div>
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
                                                                            <span className="fa fa-trash remove" aria-hidden="true"></span>
                                                                        </td>
                                                                    </tr>
                                                                ))
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer justify-content-center">
                                        <button type="button" className="btn btn-primary btn-global">Add Product</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade popup-name" id="popup-modal" tabIndex="-1" role="dialog" aria-labelledby="popupmodal" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <div className="popup-content">
                                            <div className="icon">
                                                {/* <span className="zmdi zmdi-help"></span> */}
                                                <span className="material-icons help_outline"> help_outline </span>
                                            </div>
                                            <div className="context">
                                                <h5>Are you Sure?</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                            </div>
                                            <div className="btns-group">
                                                <button type="button" className="btn btn-primary btn-discard" data-dismiss="modal" aria-label="Close">Discard</button>
                                                <button type="button" className="btn btn-primary btn-continue">Continue</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div >
                </div >
            </>
        );
    }
}

export default OrderApproval;
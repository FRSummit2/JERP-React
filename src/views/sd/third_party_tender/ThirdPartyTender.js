import React from 'react';
import CommonLayout from '../../common/CommonLayout';
import TitleBreadcrumb from '../../common/TitleBreadcrumb';

class ThirdPartyTender extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tb: "Third Party Tender" };
    }

    componentDidMount = () => {
        console.log('componentDidMount')
    }

    cardOnClickHandler = (index_card) => {
        console.log(index_card)
        // let card_list = document.querySelectorAll('.card')
        // card_list.forEach(el => {
        //     document.querySelector('#' + el.id + ' .card-header').className = 'card-header'
        //     document.querySelector('#' + el.id + ' .collapse').className = 'collapse'
        // })
        // document.querySelector('#card_' + index_card + ' .card-header').className = 'card-header active'
        // document.querySelector('#card_' + index_card + ' .collapse').className = 'collapse show'
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
                                            <div className="card_body">
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
                                <div className="col-12 ThirdPartyTender-area">
                                    <div className="row ThirdPartyTender-header">
                                        <div className="col-lg-12 col-md-4 col-12">
                                            <p>Customer: <span className="customer-name">ABI Pharmacy and Diagnostic Center</span></p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-12 mt-1">
                                            <div className="form-group">
                                                <label className="mr-2" for="tender-type">Tender&nbsp;Type:</label>
                                                <select className="form-control-sm">
                                                    <option>Select Tender Type</option>
                                                    <option>3rd Party Tender</option>
                                                    <option>Direct Tender</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-12 mt-1">
                                            <div className="form-group">
                                                <label className="mr-2" for="tender-title">Tender&nbsp;Title:</label>
                                                <input className="form-control-sm" type="text" placeholder="Enter Tender Title" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-12 mt-1">
                                            <div className="form-group">
                                                <label className="mr-2" for="tender-package">Tender&nbsp;Package:</label>
                                                <input className="form-control-sm" type="text" placeholder="Enter Tender Package" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-12 mt-1">
                                            <div className="form-group">
                                                <label for="currency">Currency:</label>
                                                <select className="form-control-sm">
                                                    <option>BDT</option>
                                                    <option>USD</option>
                                                    <option>Euro</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-12 mt-1">
                                            <div className="form-group">
                                                <label className="mr-2" for="depot">Depot:</label>
                                                <select className="form-control-sm">
                                                    <option>Select Depot</option>
                                                    <option>USD</option>
                                                    <option>Euro</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-12 mt-1">
                                            <div className="form-group">
                                                <label for="territory">Territory:</label>
                                                <select className="form-control-sm">
                                                    <option>Select Territory</option>
                                                    <option>USD</option>
                                                    <option>Euro</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-12 mt-1">
                                            <div className="form-group">
                                                <label for="address">Address:</label>
                                                <input className="form-control-sm" type="text" placeholder="Enter Address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-12 mt-1">
                                            <div className="form-group">
                                                <label className="mr-2" for="tender-package">FX&nbsp;Rate:</label>
                                                <input className="form-control-sm" type="text" placeholder="00.00" value="86.00" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ThirdPartyTender-table">
                                        <table className="col-12">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th> <div>Unit Price <span>(With Vat)</span></div> </th>
                                                    <th>Quantity</th>
                                                    <th>Total Price</th>
                                                    <th> </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    Array.from({ length: 20 }, (_, index) => (
                                                        <tr className={index === 2 ? 'active' : ''} key={index}>
                                                            <td>
                                                                <div className="product">
                                                                    <p className="name">Ace® Power <span>500mg</span></p>
                                                                    <p className="type">Paricatamole</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p>300</p>
                                                            </td>
                                                            <td>
                                                                <p>30</p>
                                                            </td>
                                                            <td>
                                                                <p>300</p>
                                                            </td>
                                                            <td>
                                                                <div className="hover-btns">
                                                                    <span title="Edit" data-toggle="tooltip" data-placement="left"><span class="material-icons edit"> edit </span></span>
                                                                    <span title="Remove" data-toggle="tooltip" data-placement="left"><span class="material-icons delete"> delete </span></span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th colspan="2"><a className="btn-add-product" data-toggle="modal" data-target="#add-product-modal"><span className="material-icons">add</span>Add Product</a></th>
                                                    <th> <p className="small-text">Subtotal</p> </th>
                                                    <th> <p className="small-text">13,032.20</p> </th>
                                                    <th></th>
                                                </tr>
                                                <tr>
                                                    <th colspan="2"></th>
                                                    <th> <p className="small-text">(+) Vat</p> </th>
                                                    <th> <p className="small-text">13,032.20</p> </th>
                                                    <th></th>
                                                </tr>
                                                <tr>
                                                    <th colspan="2"><a className="btn-add-atachment"><span className="material-icons">attachment</span>Atachment</a></th>
                                                    <th><p className="grand-total">Grand Total</p></th>
                                                    <th><p className="grand-total">14,505.55</p></th>
                                                    <th></th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    <div className="row ThirdPartyTender-footer">
                                        <span><button type="button" className="btn btn-primary btn-global btn-discard mx-2" data-toggle="modal" data-target="#popup-modal">Cancle Order</button></span>
                                        <span data-toggle="modal" data-target=".popup-name"><button type="button" className="btn btn-primary btn-global mx-2">Confirm Order</button></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal" id="add-product-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Add Product</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-4">
                                                <div class="leftsidebar-productlist">
                                                    <div class="header">
                                                        <div class="row1">
                                                            <div class="form-group">
                                                                <i class="fa fa-search"> </i>
                                                                <input type="text" placeholder="Search by Name, ID No" class="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="content">
                                                        {
                                                            Array.from({ length: 20 }, (_, index) => (
                                                                <div class="card_body" key={index}>
                                                                    <div class="row1"><h5>Ace® Power - 500mg Ace®</h5></div>
                                                                    <div class="row2"><p>Code: NP2125</p> <p>TP: 60.00 | MRP: 100.00</p></div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-8">
                                                <div class="row addproduct-modal-table">
                                                    <table class="col-12">
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
                                                                            <div class="product">
                                                                                <p class="name">Ace® Power <span>500mg</span></p>
                                                                                <p class="type">Code: NP2125</p>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <form>
                                                                                <div class="quantity-input">
                                                                                    <input class='minus' type='button' value='-' field='quantity' />
                                                                                    <input class='quantity' type='text' name='quantity' placeholder="0" />
                                                                                    <input class='plus' type='button' value='+' field='quantity' />
                                                                                </div>
                                                                            </form>
                                                                        </td>
                                                                        <td>
                                                                            <p>300</p>
                                                                        </td>
                                                                        <td>
                                                                            <span class="fa fa-trash remove" aria-hidden="true"></span>
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
                                    <div class="modal-footer justify-content-center">
                                        <button type="button" class="btn btn-primary btn-global">Add Product</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal fade popup-name" id="popup-modal" tabindex="-1" role="dialog" aria-labelledby="popupmodal" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <div class="popup-content">
                                            <div class="icon">
                                                {/* <span class="zmdi zmdi-help"></span> */}
                                                <span class="material-icons help_outline"> help_outline </span>
                                            </div>
                                            <div class="context">
                                                <h5>Are you Sure?</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                            </div>
                                            <div class="btns-group">
                                                <button type="button" class="btn btn-primary btn-discard" data-dismiss="modal" aria-label="Close">Discard</button>
                                                <button type="button" class="btn btn-primary btn-continue">Continue</button>
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

export default ThirdPartyTender;
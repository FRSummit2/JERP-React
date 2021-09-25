import React from 'react';
import CommonLayout from '../../../../common/CommonLayout';
import TitleBreadcrumb from '../../../../common/TitleBreadcrumb';
import avater from '../../../../../assets/images/avater.png'

class Collection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tb: "Collection",
            // collection_list: []
        };
    }

    componentDidMount = async () => {
        // console.log(requisition_product_list)
        // await this.setState({
        //     prod_list: requisition_product_list.product_list
        // })
        // console.log(this.state.prod_list)
    }

    render() {
        return (
            <>
                <CommonLayout />
                <TitleBreadcrumb titleBreadcrumb={this.state.tb} />
                <div id="main-section" className="main-section">
                    <div className="layout-body">

                        <div className="layout-sidebar collection-sidebar">
                            <div className="header">
                                <div className="row1">
                                    <div className="form-group">
                                        <span><i className="fa fa-search"></i></span>
                                        <input type="text" placeholder="Search by Name, ID No" className="form-control" />
                                    </div>
                                    <span className="filter_history" data-toggle="modal" data-target="#collection-history-modal" aria-hidden="true"><span className="material-icons">assignment</span> </span>
                                </div>

                                <div className="modal" id="collection-history-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-lg modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Collection History</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="row collection-history-table">
                                                    <div className="modal-search-area">
                                                        <div className="form-group">
                                                            <span> <i className="fa fa-search"></i></span>
                                                            <input type="text" placeholder="Search by Name, ID No" className="form-control" />
                                                        </div>
                                                        <button type="button" className="btn btn-primary btn-global">Search</button>
                                                    </div>
                                                    <table className="col-12">
                                                        <thead>
                                                            <tr>
                                                                <th>Remit No</th>
                                                                <th>Date</th>
                                                                <th>Amount</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                Array.from({ length: 20 }, (_, index) => (
                                                                    <tr key={index}>
                                                                        <td>
                                                                            <p>ABC565525</p>
                                                                        </td>
                                                                        <td>
                                                                            <p>20 Jun 2021 </p>
                                                                        </td>
                                                                        <td>
                                                                            <p>30,561.00</p>
                                                                        </td>
                                                                        <td>
                                                                            <span className="material-icons print">print</span>
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
                                </div>
                            </div>

                            <div className="content">
                                <div className="collection-sidebar-accordion" id="accordion-1">
                                    {
                                        Array.from({ length: 20 }, (_, index) => (
                                            <div className="card" key={index}>
                                                <div className="card-header" id="collector1">
                                                    <button className="btn btn-link" data-toggle="collapse" data-target={'#collapse-' + index} aria-expanded="false" aria-controls="collapse1">
                                                        <div className="user-info">
                                                            <h5>Collector 1</h5>
                                                            <p>Designation</p>
                                                        </div>
                                                        <span>2000</span>
                                                    </button>
                                                </div>

                                                <div id={'collapse-' + index} className="collapse" aria-labelledby="collector1" data-parent="#accordion-1">
                                                    <div className="card-body">
                                                        <div className="collection-header">
                                                            <h5>Collection Mode</h5>
                                                            <span className="material-icons print">print</span>
                                                        </div>
                                                        <div className="collection-type">
                                                            <h5>Cash</h5>
                                                            <span>10,000</span>
                                                        </div>
                                                        <div className="collection-type">
                                                            <h5>Challan</h5>
                                                            <span>25,000</span>
                                                        </div>
                                                        <div className="collection-type">
                                                            <h5>EFTN</h5>
                                                            <span>10,000</span>
                                                        </div>
                                                        <div className="collection-type">
                                                            <h5>Cheque</h5>
                                                            <span>11,000</span>
                                                        </div>
                                                        <div className="collection-total">
                                                            <h5>Total</h5>
                                                            <span>56,000</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="sticky-footer">
                                <div className="footer-inner">
                                    {/* <p>Hello</p> */}
                                </div>
                            </div>
                        </div>

                        <div className="layout-container w-100">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <table className="collection-table-1">
                                            <thead>
                                                <tr>
                                                    <th colspan="11">
                                                        <h5>Collector 1 (<span>Cash</span>)</h5>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>Territory</th>
                                                    <th>Customer</th>
                                                    <th>Invoice</th>
                                                    <th>Date</th>
                                                    <th>Amount</th>
                                                    <th>Return</th>
                                                    <th>Paid</th>
                                                    <th>Receivable</th>
                                                    <th>Collection</th>
                                                    <th>Due</th>
                                                    <th>Instrument</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    Array.from({ length: 20 }, (_, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                <p>DHK10101</p>
                                                            </td>
                                                            <td>
                                                                <p className="customer-name" data-toggle="modal" data-target="#customer-card" aria-hidden="true">New Bhai Bhai Pharmacy</p>
                                                            </td>
                                                            <td>
                                                                <p className="invoice-no">Invoice 546</p>
                                                            </td>
                                                            <td>
                                                                <p>20/08/2021 </p>
                                                            </td>
                                                            <td>
                                                                <p>12,525</p>
                                                            </td>
                                                            <td>
                                                                <p>10</p>
                                                            </td>
                                                            <td>
                                                                <p>8,546</p>
                                                            </td>
                                                            <td>
                                                                <p>9622</p>
                                                            </td>
                                                            <td>
                                                                <p>4586</p>
                                                            </td>
                                                            <td>
                                                                <p>3121</p>
                                                            </td>
                                                            <td>
                                                                <div className="hover-btns">
                                                                    <span title="Edit" data-toggle="tooltip" data-placement="left"> <span data-toggle="modal" data-target="#adjust-collection-modal" aria-hidden="true" className="action-btn material-icons">edit</span> </span>
                                                                </div>
                                                                <p>abc21532</p>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Total</th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th>30,000</th>
                                                    <th></th>
                                                    <th>20,000</th>
                                                    <th></th>
                                                </tr>
                                            </tfoot>
                                        </table>

                                        <div className="modal" id="adjust-collection-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog modal-lg modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title"> <span>Customer Name</span> (Challan:<span>50,000</span>)</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="row adjust-collection-modal-table">
                                                            <table className="col-12">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Invoice</th>
                                                                        <th>Receivable</th>
                                                                        <th>Collection</th>
                                                                        <th>Due</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {
                                                                        Array.from({ length: 20 }, (_, index) => (
                                                                            <tr key={index}>
                                                                                <td>
                                                                                    <p>INV-1236536</p>
                                                                                </td>
                                                                                <td>
                                                                                    <p>45,0000</p>
                                                                                </td>
                                                                                <td>
                                                                                    <input type="text" dir="rtl" className="form-control-sm" placeholder="00" />
                                                                                </td>
                                                                                <td>
                                                                                    <p>3252</p>
                                                                                </td>
                                                                            </tr>
                                                                        ))
                                                                    }
                                                                </tbody>
                                                                <tfoot>
                                                                    <tr>
                                                                        <th colspan="2">
                                                                            <p className="error-message"> <span className="material-icons">error_outline</span>Collection amount didn't matched.</p>
                                                                        </th>
                                                                        <th>
                                                                            <p className="notmatch mr-2" >13,032.20</p>
                                                                        </th>
                                                                        <th></th>
                                                                    </tr>
                                                                </tfoot>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer justify-content-center">
                                                        <a href="#"><button type="button" className="btn btn-primary btn-global">Save</button></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="modal" id="customer-card" tabindex="-1" role="dialog" aria-labelledby="CustomerCard" aria-hidden="true">
                                            <div className="modal-dialog modal-lg modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-body">
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                        <div className="row">
                                                            <div className="customer-header">
                                                                <img className="user-photo" src={avater} alt="" />
                                                                <div class="header-info">
                                                                    <h5>Mehedi Hassan</h5>
                                                                    <div class="contact-info">
                                                                        <div class="item">
                                                                            <span class="material-icons"> phone_in_talk </span>
                                                                            <p>01755440038</p>
                                                                        </div>
                                                                        <div class="item ml-3">
                                                                            <span class="material-icons"> mail </span>
                                                                            <p>mehedi.all.info @gmail.com</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="item">
                                                                        <span class="material-icons"> place </span>
                                                                        <p>mehedi.all.info @gmail.com</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="customer-accounts">
                                                                <div className="item-list">
                                                                    <div className="accounts-item">
                                                                        <h5>1200</h5>
                                                                        <p>Total Orders</p>
                                                                    </div>
                                                                    <div className="accounts-item">
                                                                        <h5>1200</h5>
                                                                        <p>Total Invoices</p>
                                                                    </div>
                                                                    <div className="accounts-item">
                                                                        <h5>1200</h5>
                                                                        <p>In Transit</p>
                                                                    </div>
                                                                    <div className="accounts-item">
                                                                        <h5>1200</h5>
                                                                        <p>Current Due</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="customer-basic">
                                                                <h5 class="title">Customer Basic</h5>
                                                                <div class="row">
                                                                    <div class="col-4 info-col">
                                                                        <span class="">Date of Birth:</span>
                                                                        <p class="">12 feb , 1969</p>
                                                                    </div>
                                                                    <div class="col-4 info-col">
                                                                        <span class="">Sex:</span>
                                                                        <p class="">Male</p>
                                                                    </div>
                                                                    <div class="col-4 info-col">
                                                                        <span class="">Marital Status:</span>
                                                                        <p class="">Married</p>
                                                                    </div>
                                                                    <div class="col-4 info-col">
                                                                        <span class="">Religion:</span>
                                                                        <p class="">Islam</p>
                                                                    </div>
                                                                    <div class="col-4 info-col">
                                                                        <span class="">Blood Group:</span>
                                                                        <p class="">O+</p>
                                                                    </div>
                                                                    <div class="col-4 info-col">
                                                                        <span class="">Thana:</span>
                                                                        <p class="">Gazipur</p>
                                                                    </div>
                                                                    <div class="col-4 info-col">
                                                                        <span class="">District</span>
                                                                        <p class="">Dhaka</p>
                                                                    </div>
                                                                    <div class="col-4 info-col">
                                                                        <span class="">NID:</span>
                                                                        <p class="">12243564758659909</p>
                                                                    </div>
                                                                    <div class="col-4 info-col">
                                                                        <span class="">TIN:</span>
                                                                        <p class="">12243564758659909</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="customer-business">
                                                                <h5 class="title">Customer Business</h5>
                                                                <div class="row">
                                                                    <div class="col-4 info-col">
                                                                        <span class="">Vat Registration:</span>
                                                                        <p class="">22355566312158</p>
                                                                    </div>
                                                                    <div class="col-4 info-col">
                                                                        <span class="">Trade License:</span>
                                                                        <p class="">3632215864285</p>
                                                                    </div>
                                                                    <div class="col-4 info-col">
                                                                        <span class="">VIN:</span>
                                                                        <p class="">6556 6526 52896</p>
                                                                    </div>
                                                                    <div class="col-4 info-col">
                                                                        <span class="">TIN:</span>
                                                                        <p class="">556525 525652 52565</p>
                                                                    </div>
                                                                    <div class="col-4 info-col">
                                                                        <span class="">BIN:</span>
                                                                        <p class="">31345536674788</p>
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
                </div>
            </>
        );
    }
}

export default Collection;
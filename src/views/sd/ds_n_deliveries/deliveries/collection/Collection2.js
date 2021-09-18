import React, { useState } from 'react';
import CommonLayout from '../../../../common/CommonLayout';
import TitleBreadcrumb from '../../../../common/TitleBreadcrumb';

const Collection2 = () => {
    const [tb] = useState('Collection 2');

    const checkColorStatus = (index) => {
        if (index % 3 === 0) return 'fa fa-square mr-1 green'
        else if (index % 3 === 1) return 'fa fa-square mr-1 orange'
        else if (index % 3 === 2) return 'fa fa-square mr-1 gray'
    }

    const checkPaymentMethod = (index) => {
        if (index % 4 === 0) return 'Cash'
        else if (index % 4 === 1) return 'Cheque'
        else if (index % 4 === 2) return 'Challan'
        else if (index % 4 === 3) return 'EFTN'
    }

    return (
        <div>
            <CommonLayout />
            <TitleBreadcrumb titleBreadcrumb={tb} />
            <div className="main-section">
                <div className="layout-body">

                    <div className="layout-sidebar collection">
                        {/* <!-- Start Secondary Sidebar Area-->   */}
                        {/* <!-- Start Secondary Sidebar Header Area-->   */}
                        <div className="header">
                            <div className="row1">
                                <div className="form-group"><i className="fa fa-search"> </i><input type="text" placeholder="Search by Name, ID No" className="form-control" /></div>
                                <span className="filter_search" data-toggle="modal" data-target="#CollectionFilter"><i className="fa fa-filter"> </i> </span>
                                {/* <!-- Start Filter Modal --> */}
                                <div className="modal" id="CollectionFilter" tabIndex="-1" role="dialog" aria-labelledby="CollectionFilterTitle"
                                    aria-hidden="true" data-backdrop="false">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content" id="collection-modalContent">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLongTitle">Filter</h5>
                                            </div>
                                            <div className="modal-body">
                                                <div className="form-group">
                                                    <label htmlFor="date_range">Filter by SR</label>
                                                    <select className="form-control">
                                                        <option value="">Select SR</option>
                                                        <option value="">Mehedi Hassan</option>
                                                        <option value="">Atik Faysal</option>
                                                        <option value="">Nahid Ahmed</option>
                                                    </select>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="date_range">Set Date Range</label>
                                                    <input type="date" className="form-control" id="date_range" />
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="Adjust" />
                                                    <label className="form-check-label" htmlFor="Adjust">
                                                        Adjust
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="Pending" />
                                                    <label className="form-check-label" htmlFor="Pending">
                                                        Pending
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="Unadjusted" defaultChecked />
                                                    <label className="form-check-label" htmlFor="Unadjusted">
                                                        Unadjusted
                                                    </label>
                                                </div>

                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary btn-global btn-filterSerach"
                                                    data-dismiss="modal">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Filter Modal --> */}
                            </div>
                        </div>
                        {/* <!--End Secondary Sidebar Header Area-->   */}

                        {/* <!--Start Secondary Sidebar Content Area-->  */}
                        <div className="content">
                            {
                                Array.from({ length: 20 }, (_, index) => (
                                    <div className="card_body" key={index}>
                                        <div className="row1">
                                            <h5><i className={checkColorStatus(index)} aria-hidden="true"></i>Mehedi Hassan</h5>
                                            <p className="date">10/04/2021</p>
                                        </div>
                                        <div className="row2">
                                            <p>Total Collection: <span>200</span></p>
                                        </div>
                                        <div className="row3">
                                            <p>Territory Name 1, Territory Name...</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {/* <!--End Secondary Sidebar Content Area--> 
            <!-- End Secondary Sidebar Area-->  */}
                    </div>

                    <div className="layout-container w-100">
                        <div className="container-fluid">
                            <div className="row collection_area">
                                <div className="col-4">
                                    <table className="collection-table-1">
                                        <thead>
                                            <tr>
                                                <th className="type1" colSpan="2">
                                                    <h5>Customers (<span>20</span>)</h5>
                                                    <div className="about-color">
                                                        <p><span className="fa fa-square green"></span>Adjusted</p>
                                                        <p><span className="fa fa-square orange"></span>Pending</p>
                                                        <p><span className="fa fa-square gray"></span>Unadjusted</p>
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>Customer</th>
                                                <th>Type</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                Array.from({ length: 30 }, (_, index) => (
                                                    <tr className={index === 2 ? 'active' : ''} key={index}>
                                                        <td>
                                                            <p><span className={checkColorStatus(index)}></span>Customer 0{(index + 1)}</p>
                                                        </td>
                                                        <td>
                                                            <p>Chemist</p>
                                                        </td>
                                                        <td>
                                                            <p>10,000</p>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>

                                        <tfoot>
                                            <tr>
                                                <th>Total</th>
                                                <th></th>
                                                <th>18000</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="col-8">
                                    <table className="collection-table-2">
                                        <thead>
                                            <tr>
                                                <th colSpan="5">
                                                    <h5>Collections (<span>20</span>)</h5>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>Mode</th>
                                                <th>Description</th>
                                                <th>Amount</th>
                                                <th>Unadjusted</th>
                                                <th>Value Date</th>
                                                <th></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                Array.from({ length: 12 }, (_, index) => (
                                                    <tr className={index === 2 ? 'active' : ''} key={index}>
                                                        <td>
                                                            <p>{checkPaymentMethod(index)}</p>
                                                        </td>
                                                        <td>
                                                            <p>No123 DT21/Sep/2021</p>
                                                        </td>
                                                        <td>
                                                            <p>10,000</p>
                                                        </td>
                                                        <td>
                                                            <p>5,000</p>
                                                        </td>
                                                        <td>
                                                            <p>21/Sep/2021</p>
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <i className="fa fa-refresh" title="Auto Adjust" data-toggle="tooltip" data-placement="bottom" aria-hidden="true"></i>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>

                                        <tfoot>
                                            <tr>
                                                <th>Total</th>
                                                <th></th>
                                                <th>18000</th>
                                                <th>18000</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </tfoot>
                                    </table>

                                    <table className="collection-table-3">
                                        <thead>
                                            <tr>
                                                <th colSpan="7"><h5>Invoices (<span>20</span>)</h5></th>
                                            </tr>
                                            <tr>
                                                <th>Invoice</th>
                                                <th>Date</th>
                                                <th>Amount</th>
                                                <th>Paid</th>
                                                <th>Pending</th>
                                                <th>Due</th>
                                                <th>Adjustment</th>
                                                <th></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                Array.from({ length: 12 }, (_, index) => (
                                                    <tr className={index === 2 ? 'active' : ''} key={index}>
                                                        <td>
                                                            <p><span className={index === 2 ? 'fa fa-circle' : ''}></span>INV-010101</p>
                                                        </td>
                                                        <td>
                                                            <p>1/1/2021</p>
                                                        </td>
                                                        <td>
                                                            <p>10,000</p>
                                                        </td>
                                                        <td>
                                                            <p>5,000</p>
                                                        </td>
                                                        <td>
                                                            <p>2,000</p>
                                                        </td>
                                                        <td>
                                                            <p>1000</p>
                                                        </td>
                                                        <td>
                                                            <p>18000</p>
                                                        </td>
                                                        <td>
                                                            {
                                                                index % 2 === 0 ?
                                                                    <span data-toggle="modal" data-target="#add-collection-modal" className="" href=""><i className="fa fa-plus" title="Add"
                                                                        data-toggle="tooltip" data-placement="bottom" aria-hidden="true"></i></span>
                                                                    :
                                                                    <span data-toggle="modal" data-target="#edit-collection-modal" className="" href=""><i className="fa fa-pencil" title="Edit"
                                                                        data-toggle="tooltip" data-placement="bottom" aria-hidden="true"></i></span>
                                                            }
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>

                                        <tfoot>
                                            <tr>
                                                <th>Total</th>
                                                <th></th>
                                                <th>18000</th>
                                                <th>18000</th>
                                                <th>18000</th>
                                                <th>18000</th>
                                                <th>18000</th>

                                                <th></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* <!------------ Start Add Collection Modal------------> */}
                        <div className="modal" id="add-collection-modal" tabIndex="-1" role="dialog" aria-labelledby="AddCollection"
                            aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Add</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">

                                            <div className="col-lg-6 form-group">
                                                <label htmlFor="invoice_no_add">Invoice No</label>
                                                <input type="text" className="form-control" id="invoice_no_add" value="INV23414545" readOnly />
                                            </div>
                                            <div className="col-lg-6 form-group">
                                                <label htmlFor="collection_add_date">Date</label>
                                                <input type="text" className="form-control" id="collection_add_date" value="20-Oct-2021" readOnly />
                                            </div>
                                            <div className="col-lg-6 form-group">
                                                <label htmlFor="invoice_due">Total Due</label>
                                                <input type="number" className="form-control" id="invoice_due" value="100000" readOnly />
                                            </div>
                                            <div className="col-lg-6 form-group">
                                                <label htmlFor="invoice_adjustment">Adjustment</label>
                                                <input type="number" className="form-control" id="invoice_adjustment" placeholder="Enter Adjustment Amount" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="modal-footer justify-content-center">
                                        <button type="button" className="btn btn-primary btn-global">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!------------ End Add Collection Modal------------> */}

                        {/* <!------------ Start Edit Collection Modal------------> */}
                        <div className="modal" id="edit-collection-modal" tabIndex="-1" role="dialog" aria-labelledby="EditCollection"
                            aria-hidden="true">
                            <div className="modal-dialog  modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Edit</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">

                                            <div className="col-lg-6 form-group">
                                                <label htmlFor="invoice_no_edit">Invoice No</label>
                                                <input type="text" className="form-control" id="invoice_no_edit" value="INV23414545" readOnly />
                                            </div>
                                            <div className="col-lg-6 form-group">
                                                <label htmlFor="collection_edit_date">Date</label>
                                                <input type="text" className="form-control" id="collection_edit_date" value="20-Oct-2021" readOnly />
                                            </div>
                                            <div className="col-lg-6 form-group">
                                                <label htmlFor="invoice_total">Total</label>
                                                <input type="number" className="form-control" id="invoice_total" value="100000" readOnly />
                                            </div>
                                            <div className="col-lg-6 form-group">
                                                <label htmlFor="invoice_due">Due</label>
                                                <input type="number" className="form-control" id="invoice_due" value="100000" readOnly />
                                            </div>

                                            <div className="col-lg-6 form-group">
                                                <label htmlFor="quantity">Adjustment</label>
                                                <div className="input-group">
                                                    <input type="number" className="form-control" value="100000" aria-describedby="addon1" readOnly />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text fa fa-trash" id="addon1"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="modal-footer justify-content-center">
                                        <button type="button" className="btn btn-primary btn-global">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!------------ End Edit Collection Modal------------> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection2;
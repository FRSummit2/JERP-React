import React from 'react';
import CommonLayout from '../../../common/CommonLayout';
import TitleBreadcrumb from '../../../common/TitleBreadcrumb';
import attachment_logo from '../../../../assets/images/attachment.jpg'

class ExpenditureRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tb: "Expenditure Register" };
    }

    render() {
        return (
            <>
                <CommonLayout />
                <TitleBreadcrumb titleBreadcrumb={this.state.tb} />
                <div className="main-section">
                    <div className="layout-body">
                        <div className="layout-sidebar expenditure-register">
                            <div className="header">
                                <div className="row1">
                                    <div className="form-group">
                                        <span className="material-icons"> search </span>
                                        <input type="text" placeholder="Search by Name, ID No"
                                            className="form-control" />
                                    </div>
                                    <span className="action-btn"><span className="material-icons"> filter_alt </span></span>
                                </div>
                                <div className="row2">
                                    <h5>Pending Bills: <span>200</span></h5>
                                </div>
                            </div>
                            <div className="content">
                                <div className="card_body">
                                    <div className="row1">
                                        <h5><span className="material-icons new"> circle </span>PV20240500001</h5>
                                        <p className="date">10/04/2021</p>
                                    </div>
                                    <div className="row2">
                                        <p>Conveyance bill for office purpose</p>
                                    </div>
                                    <div className="row3">
                                        <p>By <span>Karim</span></p>
                                        <p className="payment-type"><span className="material-icons">monetization_on</span>15,000.00</p>
                                    </div>
                                </div>
                                <div className="card_body">
                                    <div className="row1">
                                        <h5><span className="material-icons verified"> circle </span>PV20240500001</h5>
                                        <p className="date">10/04/2021</p>
                                    </div>
                                    <div className="row2">
                                        <p>Conveyance bill for office purpose</p>
                                    </div>
                                    <div className="row3">
                                        <p>By <span>Karim</span></p>
                                        <p className="payment-type"><span className="material-icons">payments</span>15,000.00</p>
                                    </div>
                                </div>
                                <div className="card_body">
                                    <div className="row1">
                                        <h5><span className="material-icons approved"> circle </span>PV20240500001</h5>
                                        <p className="date">10/04/2021</p>
                                    </div>
                                    <div className="row2">
                                        <p>Conveyance bill for office purpose</p>
                                    </div>
                                    <div className="row3">
                                        <p>By <span>Karim</span></p>
                                        <p className="payment-type"><span className="material-icons">payment</span>15,000.00</p>
                                    </div>
                                </div>
                                <div className="card_body">
                                    <div className="row1">
                                        <h5><span className="material-icons new"> circle </span>PV20240500001</h5>
                                        <p className="date">10/04/2021</p>
                                    </div>
                                    <div className="row2">
                                        <p>Conveyance bill for office purpose</p>
                                    </div>
                                    <div className="row3">
                                        <p>By <span>Karim</span></p>
                                        <p className="payment-type"><span className="material-icons">monetization_on</span>15,000.00</p>
                                    </div>
                                </div>
                                <div className="card_body">
                                    <div className="row1">
                                        <h5><span className="material-icons verified"> circle </span>PV20240500001</h5>
                                        <p className="date">10/04/2021</p>
                                    </div>
                                    <div className="row2">
                                        <p>Conveyance bill for office purpose</p>
                                    </div>
                                    <div className="row3">
                                        <p>By <span>Karim</span></p>
                                        <p className="payment-type"><span className="material-icons">payments</span>15,000.00</p>
                                    </div>
                                </div>
                                <div className="card_body">
                                    <div className="row1">
                                        <h5><span className="material-icons approved"> circle </span>PV20240500001</h5>
                                        <p className="date">10/04/2021</p>
                                    </div>
                                    <div className="row2">
                                        <p>Conveyance bill for office purpose</p>
                                    </div>
                                    <div className="row3">
                                        <p>By <span>Karim</span></p>
                                        <p className="payment-type"><span className="material-icons">payment</span>15,000.00</p>
                                    </div>
                                </div>
                            </div>

                            <div className="sticky-footer">
                                <p><span className="material-icons new"> circle </span>New</p>
                                <p><span className="material-icons verified"> circle </span>Verified</p>
                                <p><span className="material-icons approved"> circle </span>Approved</p>
                            </div>
                        </div>

                        <div className="layout-container w-100">
                            <div className="container-fluid">
                                <div className="expenditure-reg-area">
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-end">
                                            <button type="button" className="btn btn-primary btn-global create-btn" data-toggle="modal" data-target="#create-expenditure-modal"> <span className="material-icons mr-2"> add </span>Create New</button>
                                        </div>
                                        <div className="col-12">
                                            <div className="expenditure-body">
                                                <div className="expenditure-header">
                                                    <div className="col-12">
                                                        <div className="header-row-1">
                                                            <div className="header-info">
                                                                <h5>PV20240500001<span>Verified</span></h5>
                                                                <p>Date:<span >11-May-2021</span></p>
                                                            </div>
                                                            <span data-toggle="modal" data-target="#edit-expenditure-modal" className="btn-edit material-icons">edit</span>
                                                        </div>

                                                        <div className="row header-row-2">
                                                            <div className="col-12 narration">
                                                                <span>Narration</span>
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                                </p>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="row">
                                                                    <div className="col-lg-3 col-12">
                                                                        <div className="info-col">
                                                                            <h5>Payment Mode:<span>Cheque</span></h5>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-3 col-12">
                                                                        <div className="info-col">
                                                                            <h5>Total:<span>39,500.00</span></h5>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-3 col-12">
                                                                        <div className="info-col">
                                                                            <span className="">Expenditure for:</span>
                                                                            <p className="">Entertainment</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-3 col-12">
                                                                        <div className="info-col">
                                                                            <span className="">Account No:</span>
                                                                            <p className="">2101307879001</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-3 col-12">
                                                                        <div className="info-col">
                                                                            <span className="">Cheque No:</span>
                                                                            <p className="">abc54596215265</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-3 col-12">
                                                                        <div className="info-col">
                                                                            <span className="">Date:</span>
                                                                            <p className="">21-JUL-2021</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <table className="col-12 expenditure-register-table">
                                                        <thead>
                                                            <tr>
                                                                <th>Head</th>
                                                                <th>Description</th>
                                                                <th>Amount</th>
                                                                <th>Employee</th>
                                                                <th>Referance</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <p>Fuel for transport</p>
                                                                </td>
                                                                <td>
                                                                    <p>Conveyance bill for office purpose</p>
                                                                </td>
                                                                <td>
                                                                    <p>2100.00</p>
                                                                </td>
                                                                <td>
                                                                    <p>Mehedi Hassan</p>
                                                                </td>
                                                                <td>
                                                                    <p>Asset</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p>Fuel for transport</p>
                                                                </td>
                                                                <td>
                                                                    <p>Conveyance bill for office purpose</p>
                                                                </td>
                                                                <td>
                                                                    <p>2100.00</p>
                                                                </td>
                                                                <td>
                                                                    <p>Mehedi Hassan</p>
                                                                </td>
                                                                <td>
                                                                    <p>Asset</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p>Fuel for transport</p>
                                                                </td>
                                                                <td>
                                                                    <p>Conveyance bill for office purpose</p>
                                                                </td>
                                                                <td>
                                                                    <p>2100.00</p>
                                                                </td>
                                                                <td>
                                                                    <p>Mehedi Hassan</p>
                                                                </td>
                                                                <td>
                                                                    <p>Asset</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p>Fuel for transport</p>
                                                                </td>
                                                                <td>
                                                                    <p>Conveyance bill for office purpose</p>
                                                                </td>
                                                                <td>
                                                                    <p>2100.00</p>
                                                                </td>
                                                                <td>
                                                                    <p>Mehedi Hassan</p>
                                                                </td>
                                                                <td>
                                                                    <p>Asset</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p>Fuel for transport</p>
                                                                </td>
                                                                <td>
                                                                    <p>Conveyance bill for office purpose</p>
                                                                </td>
                                                                <td>
                                                                    <p>2100.00</p>
                                                                </td>
                                                                <td>
                                                                    <p>Mehedi Hassan</p>
                                                                </td>
                                                                <td>
                                                                    <p>Asset</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p>Fuel for transport</p>
                                                                </td>
                                                                <td>
                                                                    <p>Conveyance bill for office purpose</p>
                                                                </td>
                                                                <td>
                                                                    <p>2100.00</p>
                                                                </td>
                                                                <td>
                                                                    <p>Mehedi Hassan</p>
                                                                </td>
                                                                <td>
                                                                    <p>Asset</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p>Fuel for transport</p>
                                                                </td>
                                                                <td>
                                                                    <p>Conveyance bill for office purpose</p>
                                                                </td>
                                                                <td>
                                                                    <p>2100.00</p>
                                                                </td>
                                                                <td>
                                                                    <p>Mehedi Hassan</p>
                                                                </td>
                                                                <td>
                                                                    <p>Asset</p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="p-2 d-flex justify-content-center">
                                                    <button type="button" className="btn btn-primary btn-global">Varify</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal" id="create-expenditure-modal" tabIndex="-1" role="dialog" aria-labelledby="editexpendituremodal" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Create Expenditure: <span>Expenditure Basic</span></h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-12 form-group">
                                                            <label htmlFor="expenditure-date">Expenditure Date</label>
                                                            <input type="date" className="form-control" id="expenditure-date" />
                                                        </div>
                                                        <div className="col-lg-3 col-12 form-group">
                                                            <label htmlFor="expenditure-total">Total</label>
                                                            <input type="number" className="form-control" id="expenditure-total" placeholder="00" readOnly />
                                                        </div>
                                                        <div className="col-lg-3 col-12 form-group">
                                                            <label htmlFor="expenditure-for">Expenditure for</label>
                                                            <select className="form-control">
                                                                <option>Select Items</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-3 col-12 form-group">
                                                            <label htmlFor="expenditure-payment-mode">Payment Mode</label>
                                                            <select className="form-control">
                                                                <option>Select Mode</option>
                                                                <option>Cheque</option>
                                                                <option>Cash</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-3 col-12 form-group">
                                                            <label htmlFor="expenditure-bank-account">Acount No</label>
                                                            <select className="form-control">
                                                                <option>Select Account No</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-3 col-12 form-group">
                                                            <label htmlFor="expenditure-cheque-no">Cheque / Ref. number</label>
                                                            <input type="text" className="form-control" id="expenditure-cheque-no" placeholder="Enter Cheque No" />
                                                        </div>
                                                        <div className="col-lg-3 col-12 form-group">
                                                            <label htmlFor="expenditure-cheque-date">Date</label>
                                                            <input type="date" className="form-control" id="expenditure-cheque-date" />
                                                        </div>
                                                        <div className="col-12 form-group">
                                                            <label htmlFor="expenditure-narration">Narration</label>
                                                            <textarea className="form-control" type="text" placeholder="Write Here.." id="expenditure-narration"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="row expenditure-register-edit-table">
                                                        <table className="col-12">
                                                            <thead>
                                                                <tr>
                                                                    <th>Head</th>
                                                                    <th>Description</th>
                                                                    <th>Amount</th>
                                                                    <th>Employee</th>
                                                                    <th>Referance</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <select className="form-control-sm">
                                                                            <option>Select</option>
                                                                            <option>1</option>
                                                                            <option>2</option>
                                                                            <option>3</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" className="form-control-sm" placeholder="Enter Description" />
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" className="form-control-sm text-right" placeholder="00" />
                                                                    </td>
                                                                    <td>
                                                                        <select className="form-control-sm">
                                                                            <option>Select</option>
                                                                            <option>1</option>
                                                                            <option>2</option>
                                                                            <option>3</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <select className="form-control-sm">
                                                                            <option>Select</option>
                                                                            <option>1</option>
                                                                            <option>2</option>
                                                                            <option>3</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <span className="material-icons remove"> delete </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <select className="form-control-sm">
                                                                            <option>Select</option>
                                                                            <option>1</option>
                                                                            <option>2</option>
                                                                            <option>3</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" className="form-control-sm" placeholder="Enter Description" />
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" className="form-control-sm text-right" placeholder="00" />
                                                                    </td>
                                                                    <td>
                                                                        <select className="form-control-sm">
                                                                            <option>Select</option>
                                                                            <option>1</option>
                                                                            <option>2</option>
                                                                            <option>3</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <select className="form-control-sm">
                                                                            <option>Select</option>
                                                                            <option>1</option>
                                                                            <option>2</option>
                                                                            <option>3</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <span className="material-icons addmore"> add </span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="row upload-expenditure-file">
                                                        <div className="col-8">
                                                            <div className="form-group">
                                                                <label htmlFor="expenditure-attachment">Attach File (File Should be jpg, png, pdf)</label>
                                                                <input type="file" className="form-control-file" id="expenditure-attachment" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6 col-12">
                                                            <div className="preview-expenditure-file">
                                                                <div className="file-info">
                                                                    <p className="file-name">Cheque.jpg</p>
                                                                    <span className="material-icons"> cancel </span>
                                                                </div>
                                                                <div className="overlay"></div>
                                                                <img src={attachment_logo} alt="Attachment" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-12">
                                                            <div className="preview-expenditure-file">
                                                                <div className="file-info">
                                                                    <p className="file-name">Cheque.jpg</p>
                                                                    <span className="material-icons"> cancel </span>
                                                                </div>
                                                                <div className="overlay"></div>
                                                                <img src={attachment_logo} alt="Attachment" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <p>Page 1 of 2</p>
                                                    <div className="wizard-btn-group">
                                                        <button type="button" className="btn btn-primary btn-back"><span className="material-icons">west</span>Back</button>
                                                        <button type="button" className="btn btn-primary btn-next">Save & Next<span className="material-icons">east</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal" id="edit-expenditure-modal" tabIndex="-1" role="dialog" aria-labelledby="editexpendituremodal" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Edit (<p>PV20240500001</p>): <span>Expenditure Basic</span></h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-12 form-group">
                                                            <label htmlFor="expenditure-date">Expenditure Date</label>
                                                            <input type="date" className="form-control" id="expenditure-date" />
                                                        </div>
                                                        <div className="col-lg-3 col-12 form-group">
                                                            <label htmlFor="expenditure-total">Total</label>
                                                            <input type="number" className="form-control" id="expenditure-total" placeholder="00" readOnly />
                                                        </div>
                                                        <div className="col-lg-3 col-12 form-group">
                                                            <label htmlFor="expenditure-for">Expenditure for</label>
                                                            <select className="form-control">
                                                                <option>Select Items</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-3 col-12 form-group">
                                                            <label htmlFor="expenditure-payment-mode">Payment Mode</label>
                                                            <select className="form-control">
                                                                <option>Select Mode</option>
                                                                <option>Cheque</option>
                                                                <option>Cash</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-3 col-12 form-group">
                                                            <label htmlFor="expenditure-bank-account">Acount No</label>
                                                            <select className="form-control">
                                                                <option>Select Account No</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-3 col-12 form-group">
                                                            <label htmlFor="expenditure-cheque-no">Cheque / Ref. number</label>
                                                            <input type="text" className="form-control" id="expenditure-cheque-no" placeholder="Enter Cheque No" />
                                                        </div>
                                                        <div className="col-lg-3 col-12 form-group">
                                                            <label htmlFor="expenditure-cheque-date">Date</label>
                                                            <input type="date" className="form-control" id="expenditure-cheque-date" />
                                                        </div>
                                                        <div className="col-12 form-group">
                                                            <label htmlFor="expenditure-narration">Narration</label>
                                                            <textarea className="form-control" type="text" placeholder="Write Here.." id="expenditure-narration"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="row expenditure-register-edit-table">
                                                        <table className="col-12">
                                                            <thead>
                                                                <tr>
                                                                    <th>Head</th>
                                                                    <th>Description</th>
                                                                    <th>Amount</th>
                                                                    <th>Employee</th>
                                                                    <th>Referance</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <select className="form-control-sm">
                                                                            <option>Select</option>
                                                                            <option>1</option>
                                                                            <option>2</option>
                                                                            <option>3</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" className="form-control-sm" placeholder="Enter Description" />
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" className="form-control-sm text-right" placeholder="00" />
                                                                    </td>
                                                                    <td>
                                                                        <select className="form-control-sm">
                                                                            <option>Select</option>
                                                                            <option>1</option>
                                                                            <option>2</option>
                                                                            <option>3</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <select className="form-control-sm">
                                                                            <option>Select</option>
                                                                            <option>1</option>
                                                                            <option>2</option>
                                                                            <option>3</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <span className="material-icons remove"> delete </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <select className="form-control-sm">
                                                                            <option>Select</option>
                                                                            <option>1</option>
                                                                            <option>2</option>
                                                                            <option>3</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" className="form-control-sm" placeholder="Enter Description" />
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" className="form-control-sm text-right" placeholder="00" />
                                                                    </td>
                                                                    <td>
                                                                        <select className="form-control-sm">
                                                                            <option>Select</option>
                                                                            <option>1</option>
                                                                            <option>2</option>
                                                                            <option>3</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <select className="form-control-sm">
                                                                            <option>Select</option>
                                                                            <option>1</option>
                                                                            <option>2</option>
                                                                            <option>3</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <span className="material-icons addmore"> add </span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="row upload-expenditure-file">
                                                        <div className="col-8">
                                                            <div className="form-group">
                                                                <label htmlFor="expenditure-attachment">Attach File (File Should be jpg, png, pdf)</label>
                                                                <input type="file" className="form-control-file" id="expenditure-attachment" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6 col-12">
                                                            <div className="preview-expenditure-file">
                                                                <div className="file-info">
                                                                    <p className="file-name">Cheque.jpg</p>
                                                                    <span className="material-icons"> cancel </span>
                                                                </div>
                                                                <div className="overlay"></div>
                                                                <img src={attachment_logo} alt="Attachment" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-12">
                                                            <div className="preview-expenditure-file">
                                                                <div className="file-info">
                                                                    <p className="file-name">Cheque.jpg</p>
                                                                    <span className="material-icons"> cancel </span>
                                                                </div>
                                                                <div className="overlay"></div>
                                                                <img src={attachment_logo} alt="Attachment" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <p>Page 1 of 2</p>
                                                    <div className="wizard-btn-group">
                                                        <button type="button" className="btn btn-primary btn-back"><span className="material-icons">west</span>Back</button>
                                                        <button type="button" className="btn btn-primary btn-next">Save & Next<span className="material-icons">east</span></button>
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

export default ExpenditureRegister;
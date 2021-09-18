import React from 'react';
import CommonLayout from '../../../common/CommonLayout.js';
import TitleBreadcrumb from '../../../common/TitleBreadcrumb.js';

// const EftnRegister = () => {
class EftnRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tb: "EftnRegister",
            /*buttonPressed: ""*/
        };
    }

    pending_data = [
        { receive_date: '02-Oct-2021', details: 'DS_COLLECTION/1003', transection_date: '02-Oct-2021', source: 'Mehedi Hassan', amount: '30,561.00' },
        { receive_date: '02-Oct-2021', details: 'DS_COLLECTION/1003', transection_date: '02-Oct-2021', source: 'Mehedi Hassan', amount: '30,561.00' },
        { receive_date: '02-Oct-2021', details: 'DS_COLLECTION/1003', transection_date: '02-Oct-2021', source: 'Mehedi Hassan', amount: '30,561.00' },
        { receive_date: '02-Oct-2021', details: 'DS_COLLECTION/1003', transection_date: '02-Oct-2021', source: 'Mehedi Hassan', amount: '30,561.00' },
        { receive_date: '02-Oct-2021', details: 'DS_COLLECTION/1003', transection_date: '02-Oct-2021', source: 'Mehedi Hassan', amount: '30,561.00' },
        { receive_date: '02-Oct-2021', details: 'DS_COLLECTION/1003', transection_date: '02-Oct-2021', source: 'Mehedi Hassan', amount: '30,561.00' },
        { receive_date: '02-Oct-2021', details: 'DS_COLLECTION/1003', transection_date: '02-Oct-2021', source: 'Mehedi Hassan', amount: '30,561.00' },
        { receive_date: '02-Oct-2021', details: 'DS_COLLECTION/1003', transection_date: '02-Oct-2021', source: 'Mehedi Hassan', amount: '30,561.00' },
        { receive_date: '02-Oct-2021', details: 'DS_COLLECTION/1003', transection_date: '02-Oct-2021', source: 'Mehedi Hassan', amount: '30,561.00' },
        { receive_date: '02-Oct-2021', details: 'DS_COLLECTION/1003', transection_date: '02-Oct-2021', source: 'Mehedi Hassan', amount: '30,561.00' },
        { receive_date: '02-Oct-2021', details: 'DS_COLLECTION/1003', transection_date: '02-Oct-2021', source: 'Mehedi Hassan', amount: '30,561.00' },
        { receive_date: '02-Oct-2021', details: 'DS_COLLECTION/1003', transection_date: '02-Oct-2021', source: 'Mehedi Hassan', amount: '30,561.00' },
        { receive_date: '02-Oct-2021', details: 'DS_COLLECTION/1003', transection_date: '02-Oct-2021', source: 'Mehedi Hassan', amount: '30,561.00' },
        { receive_date: '02-Oct-2021', details: 'DS_COLLECTION/1003', transection_date: '02-Oct-2021', source: 'Mehedi Hassan', amount: '30,561.00' },
        { receive_date: '02-Oct-2021', details: 'DS_COLLECTION/1003', transection_date: '02-Oct-2021', source: 'Mehedi Hassan', amount: '30,561.00' },
        { receive_date: '02-Oct-2021', details: 'DS_COLLECTION/1003', transection_date: '02-Oct-2021', source: 'Mehedi Hassan', amount: '30,561.00' },
        { receive_date: '02-Oct-2021', details: 'DS_COLLECTION/1003', transection_date: '02-Oct-2021', source: 'Mehedi Hassan', amount: '30,561.00' },
        { receive_date: '02-Oct-2021', details: 'DS_COLLECTION/1003', transection_date: '02-Oct-2021', source: 'Mehedi Hassan', amount: '30,561.00' },
        { receive_date: '02-Oct-2021', details: 'DS_COLLECTION/1003', transection_date: '02-Oct-2021', source: 'Mehedi Hassan', amount: '30,561.00' }
    ]

    day_closing_data = [
        { date: '02-Oct-2021', opening: '30000', inward: '10000', outward: '20000', closing: '30561' },
        { date: '02-Oct-2021', opening: '30000', inward: '10000', outward: '20000', closing: '30561' },
        { date: '02-Oct-2021', opening: '30000', inward: '10000', outward: '20000', closing: '30561' },
        { date: '02-Oct-2021', opening: '30000', inward: '10000', outward: '20000', closing: '30561' },
        { date: '02-Oct-2021', opening: '30000', inward: '10000', outward: '20000', closing: '30561' },
        { date: '02-Oct-2021', opening: '30000', inward: '10000', outward: '20000', closing: '30561' },
        { date: '02-Oct-2021', opening: '30000', inward: '10000', outward: '20000', closing: '30561' },
        { date: '02-Oct-2021', opening: '30000', inward: '10000', outward: '20000', closing: '30561' },
        { date: '02-Oct-2021', opening: '30000', inward: '10000', outward: '20000', closing: '30561' },
        { date: '02-Oct-2021', opening: '30000', inward: '10000', outward: '20000', closing: '30561' },
        { date: '02-Oct-2021', opening: '30000', inward: '10000', outward: '20000', closing: '30561' },
        { date: '02-Oct-2021', opening: '30000', inward: '10000', outward: '20000', closing: '30561' }
    ]

    domination_data = [
        { domination_type: '1000', quantity: '30', amount: '30000.00' },
        { domination_type: '1000', quantity: '30', amount: '30000.00' },
        { domination_type: '1000', quantity: '30', amount: '30000.00' },
        { domination_type: '500', quantity: '60', amount: '30000.00' },
        { domination_type: '500', quantity: '60', amount: '30000.00' },
        { domination_type: '500', quantity: '60', amount: '30000.00' },
        { domination_type: '200', quantity: '150', amount: '30000.00' },
        { domination_type: '200', quantity: '150', amount: '30000.00' },
        { domination_type: '200', quantity: '150', amount: '30000.00' },
        { domination_type: '100', quantity: '300', amount: '30000.00' },
        { domination_type: '100', quantity: '300', amount: '30000.00' },
        { domination_type: '100', quantity: '300', amount: '30000.00' }
    ]

    // https://programmingwithmosh.com/react/guide-to-learn-useeffect-hook-in-react/

    componentDidMount() {
        console.log(this.pending_data)
        console.log(this.day_closing_data)
        console.log(this.domination_data)
    }

    /*componentDidMount() {
      console.log("Component did mount", this.state.buttonPressed)
    }
  
    componentDidUpdate() {
      console.log("Component did update", this.state.buttonPressed)
    }
  
    onYesPress() {
      this.setState({ buttonPressed: "Yes" });
    }
  
    onNoPress() {
      this.setState({ buttonPressed: "No" });
    }*/

    render() {
        return (
            <div>
                <CommonLayout />
                <TitleBreadcrumb titleBreadcrumb={this.state.tb} />
                {/* <TitleBreadcrumb todos={ todos } /> */}
                <div className="main-section">
                    <div className="layout-body">
                        <div className="layout-container">
                            <div className="container-fluid">
                                <div className="col-12 cash-register">
                                    <div className="row cash-register-tab">

                                        {/* <button onClick={() => this.onYesPress()}>Yes</button>
                                        <button onClick={() => this.onNoPress()}>No</button> */}

                                        <div className="col-12">
                                            <ul className="nav nav-tabs nav-justified" id="cash-register-tab-inner" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="register-single-tab" data-toggle="tab" href="#tab-pending">Pending</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="register-single-tab" data-toggle="tab" href="#tab-inward">Inward</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="register-single-tab" data-toggle="tab" href="#tab-outward">Outward</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="register-single-tab" data-toggle="tab" href="#tab-day-closing">Day Closing</a>
                                                </li>
                                            </ul>

                                            {/* <!-- Tab panes --> */}
                                            <div className="tab-content">
                                                {/* <!------------ Start Cash Register Pending Table Area ------------> */}
                                                <div id="tab-pending" className="tab-pane active">
                                                    <div className="tab-content-header">
                                                        <h5>Pending (<span>00</span>)</h5>
                                                        <div className="row1">
                                                            <div className="form-group"><i className="fa fa-search"> </i><input type="text" placeholder="Search by Name, ID No" className="form-control" /></div>
                                                            <span className="filter_search"><i className="fa fa-filter"> </i> </span>
                                                            <span className="filter_calendar"><i className="fa fa-calendar-o"> </i> </span>
                                                            <span className="transfer" data-toggle="modal" data-target="#cr-transfer-modal" ><i className="material-icons compare_arrows" data-toggle="tooltip" data-placement="bottom" title="Transfer" aria-hidden="true">compare_arrows</i>  </span>
                                                        </div>
                                                    </div>

                                                    <div className="row cr-pending-table">
                                                        <table className="col-12">
                                                            <thead>
                                                                <tr>
                                                                    <th>
                                                                        <div className="dropdown">
                                                                            <span id="pendingselection" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</span>
                                                                            <div className="dropdown-menu" aria-labelledby="pendingselection">
                                                                                <button className="dropdown-item" type="button">Select All</button>
                                                                                <button className="dropdown-item" type="button">Unselect All</button>
                                                                                <hr />
                                                                                <button className="dropdown-item" type="button">Verify Selected</button>
                                                                                <button className="dropdown-item" type="button">Cancel Selected</button>
                                                                            </div>
                                                                        </div>
                                                                    </th>
                                                                    <th>Receive date</th>
                                                                    <th>Details</th>
                                                                    <th>TRANSACTION DATE</th>
                                                                    <th>Source</th>
                                                                    <th>Amount</th>
                                                                    <th> </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    this.pending_data.map((data, index) => (
                                                                        <tr key={index}>
                                                                            <td>
                                                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                                            </td>
                                                                            <td>
                                                                                <p>{data.receive_date}</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>{data.details}</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>{data.transection_date}</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>{data.source}</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>{data.amount}</p>
                                                                            </td>
                                                                            <td>
                                                                                <span title="Verify" data-toggle="tooltip" data-placement="bottom"><i className="fa fa-check-circle-o verify" aria-hidden="true"></i></span>
                                                                                <span title="Cancel" data-toggle="tooltip" data-placement="bottom"><i className="fa fa-times-circle-o cancel" aria-hidden="true"></i></span>
                                                                            </td>
                                                                        </tr>
                                                                    ))
                                                                }
                                                            </tbody>
                                                            <tfoot>
                                                                <tr>
                                                                    <th colSpan="5">
                                                                        <p>Total:</p>
                                                                    </th>
                                                                    <th><p>13,032.20</p></th>
                                                                    <th></th>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>

                                                </div>
                                                {/* <!------------ End Cash Register Pending Table Area -------------> */}

                                                {/* <!------------ Start Cash Register Inward Content Area -------------> */}
                                                <div id="tab-inward" className="tab-pane">
                                                    <div className="tab-content-header">
                                                        <h5>Inward (<span>00</span>)</h5>
                                                        <div className="row1">
                                                            <div className="form-group"><i className="fa fa-search"> </i><input type="text" placeholder="Search by Name, ID No" className="form-control" /></div>
                                                            <span className="filter_search"><i className="fa fa-filter"> </i> </span>
                                                            <span className="filter_calendar active"><i className="fa fa-calendar-o"> </i> </span>
                                                            <span className="transfer" data-toggle="modal" data-target="#cr-transfer-modal" ><i className="material-icons compare_arrows" data-toggle="tooltip" data-placement="bottom" title="Transfer" aria-hidden="true">compare_arrows</i>  </span>
                                                        </div>
                                                    </div>

                                                    <div className="row cr-inward-table">
                                                        <table className="col-12">
                                                            <thead>
                                                                <tr>
                                                                    <th>Receive Date</th>
                                                                    <th>Details</th>
                                                                    <th>Transaction Date</th>
                                                                    <th>Source</th>
                                                                    <th>Amount</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    this.pending_data.map((data, index) => (
                                                                        <tr key={index}>
                                                                            <td>
                                                                                <p>{data.receive_date}</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>{data.details}</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>{data.transection_date}</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>{data.source}</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>{data.amount}</p>
                                                                            </td>
                                                                            <td>
                                                                                <span title="Verify" data-toggle="tooltip" data-placement="bottom"><i className="fa fa-check-circle-o verify" aria-hidden="true"></i></span>
                                                                                <span title="Cancel" data-toggle="tooltip" data-placement="bottom"><i className="fa fa-times-circle-o cancel" aria-hidden="true"></i></span>
                                                                            </td>
                                                                        </tr>
                                                                    ))
                                                                }
                                                            </tbody>
                                                            <tfoot>
                                                                <tr>
                                                                    <th colSpan="4">
                                                                        <p>Total:</p>
                                                                    </th>
                                                                    <th>
                                                                        <p>13,032.20</p>
                                                                    </th>
                                                                    <th></th>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>

                                                </div>
                                                {/* <!------------ End Cash Register Inward Content Area ------------> */}

                                                {/* <!------------ Start Cash Register Outward Content Area ------------> */}
                                                <div id="tab-outward" className="tab-pane">
                                                    <div className="tab-content-header">
                                                        <h5>Outward (<span>00</span>)</h5>
                                                        <div className="row1">
                                                            <div className="form-group"><i className="fa fa-search"> </i><input type="text" placeholder="Search by Name, ID No" className="form-control" /></div>
                                                            <span className="filter_search"><i className="fa fa-filter"> </i> </span>
                                                            <span className="filter_calendar active"><i className="fa fa-calendar-o"> </i> </span>
                                                            <span className="transfer" data-toggle="modal" data-target="#cr-transfer-modal" ><i className="material-icons compare_arrows" data-toggle="tooltip" data-placement="bottom" title="Transfer" aria-hidden="true">compare_arrows</i>  </span>
                                                        </div>
                                                    </div>

                                                    <div className="row cr-outward-table">
                                                        <table className="col-12">
                                                            <thead>
                                                                <tr>
                                                                    <th>Date</th>
                                                                    <th>Details</th>
                                                                    <th>Target</th>
                                                                    <th>Amount</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    this.pending_data.map((data, index) => (
                                                                        <tr key={index}>
                                                                            <td>
                                                                                <p>{data.receive_date}</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>{data.details}</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>{'BANK'}</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>{data.amount}</p>
                                                                            </td>
                                                                            <td></td>
                                                                        </tr>
                                                                    ))
                                                                }
                                                            </tbody>
                                                            <tfoot>
                                                                <tr>
                                                                    <th colSpan="3">
                                                                        <p>Total:</p>
                                                                    </th>
                                                                    <th>
                                                                        <p>13,032.20</p>
                                                                    </th>
                                                                    <th></th>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                </div>
                                                {/* <!------------ End Cash Register Outward Content Area ------------> */}

                                                {/* <!------------ Start Offers Tab Content Area ------------> */}
                                                <div id="tab-day-closing" className="tab-pane">
                                                    <div className="tab-content-header">
                                                        <h5>Day Closing (<span>00</span>)</h5>
                                                        <div className="row1">
                                                            <div className="form-group"><i className="fa fa-search"> </i><input type="text" placeholder="Search by Name, ID No" className="form-control" /></div>
                                                            <span className="filter_search"><i className="fa fa-filter"> </i> </span>
                                                            <span className="filter_calendar active"><i className="fa fa-calendar-o"> </i> </span>
                                                            <span className="transfer" data-toggle="modal" data-target="#cr-transfer-modal" ><i className="material-icons compare_arrows" data-toggle="tooltip" data-placement="bottom" title="Transfer" aria-hidden="true">compare_arrows</i>  </span>
                                                        </div>
                                                    </div>

                                                    <div className="row cr-date-closing-table">
                                                        <table className="col-12">
                                                            <thead>
                                                                <tr>
                                                                    <th>Date</th>
                                                                    <th>Opening</th>
                                                                    <th>Inward</th>
                                                                    <th>Outward</th>
                                                                    <th>Closing</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    this.day_closing_data.map((element, index) => (
                                                                        <tr key={index}>
                                                                            <td>
                                                                                <p>02-Oct-2021</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>30,000</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>10,000</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>20,000</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>30,561</p>
                                                                            </td>
                                                                            <td>
                                                                                {
                                                                                    index % 2 === 0 ?
                                                                                        <span title="Add Denomination" data-toggle="tooltip" data-placement="bottom"><i className="fa fa-plus add" data-toggle="modal" data-target="#add-denomination-modal" aria-hidden="true"></i></span> :
                                                                                        <span title="Show Denomination" data-toggle="tooltip" data-placement="bottom"><i className="fa fa-usd view" data-toggle="modal" data-target="#show-denomination" aria-hidden="true"></i></span>
                                                                                }
                                                                            </td>
                                                                        </tr>
                                                                    ))
                                                                }
                                                            </tbody>
                                                            <tfoot>
                                                                <tr>
                                                                    <th colSpan="4">
                                                                        <p>Total:</p>
                                                                    </th>
                                                                    <th>
                                                                        <p>13,032.20</p>
                                                                    </th>
                                                                    <th></th>
                                                                </tr>
                                                            </tfoot>
                                                        </table>

                                                        {/* <!------------ Start Add Denomition Modal------------> */}
                                                        <div className="modal" id="add-denomination-modal" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                                                            aria-hidden="true">
                                                            <div className="modal-dialog modal-lg modal-dialog-centered max-w-700">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title">Add Cash Denomination:<span>12/05/2021</span></h5>
                                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <div className="row denomination-modal-table">
                                                                            <table className="col-12">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Denomination Type</th>
                                                                                        <th>Quantity</th>
                                                                                        <th>Amount</th>
                                                                                        <th></th>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th>
                                                                                            <select className="form-control-sm" id="unit">
                                                                                                <option >Select Unit</option>
                                                                                                <option>Box</option>
                                                                                                <option>Box 2</option>
                                                                                                <option>Box 3</option>
                                                                                            </select>
                                                                                        </th>
                                                                                        <th>
                                                                                            <input type="text" className="form-control-sm" id="product_group_1" placeholder="00" />
                                                                                        </th>
                                                                                        <th>
                                                                                            <input type="text" className="form-control-sm" id="product_group_2" placeholder="00" />
                                                                                        </th>
                                                                                        <th><button className="btn btn-primary btn-add">Add</button></th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    {
                                                                                        this.domination_data.map((element, index) => (
                                                                                            <tr key={index}>
                                                                                                <td>
                                                                                                    <p>TK {element.domination_type}</p>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <p>{element.quantity}</p>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <p>{element.amount}</p>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <i className="fa fa-trash remove" aria-hidden="true"></i>
                                                                                                </td>
                                                                                            </tr>
                                                                                        ))
                                                                                    }
                                                                                </tbody>
                                                                                <tfoot>
                                                                                    <tr>
                                                                                        <th colSpan="2">
                                                                                            <p>Total:</p>
                                                                                        </th>
                                                                                        <th>
                                                                                            <p>13,032.20</p>
                                                                                        </th>
                                                                                        <th></th>
                                                                                    </tr>
                                                                                </tfoot>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div className="modal-footer justify-content-center">
                                                                        <a href="/"><button type="button" className="btn btn-primary btn-global">Save</button></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!------------ End Add Denomition Modal------------> */}

                                                        {/* <!------------ Start Show Denomition Modal------------> */}
                                                        <div className="modal" id="show-denomination" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                                                            aria-hidden="true">
                                                            <div className="modal-dialog modal-lg modal-dialog-centered">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title">Show Cash Denomination:<span>12/05/2021</span></h5>
                                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <div className="row denomination-modal-table">
                                                                            <table className="col-12">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Denomination Type</th>
                                                                                        <th>Quantity</th>
                                                                                        <th>Amount</th>
                                                                                        <th></th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr className="active">
                                                                                        <td>
                                                                                            <select className="form-control-sm" id="unit">
                                                                                                <option >Select Unit</option>
                                                                                                <option>Box</option>
                                                                                                <option>Box 2</option>
                                                                                                <option>Box 3</option>
                                                                                            </select>
                                                                                        </td>
                                                                                        <td>
                                                                                            <input type="text" className="form-control-sm" id="product_group_3" placeholder="00" />
                                                                                        </td>
                                                                                        <td>
                                                                                            <input type="text" className="form-control-sm" id="product_group_4" placeholder="00" />
                                                                                        </td>
                                                                                        <td>
                                                                                            <i className="fa fa-pencil edit" aria-hidden="true"></i>
                                                                                        </td>
                                                                                    </tr>
                                                                                    {
                                                                                        this.domination_data.map((element, index) => (
                                                                                            <tr key={index}>
                                                                                                <td>
                                                                                                    <p>TK {element.domination_type}</p>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <p>{element.quantity}</p>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <p>{element.amount}</p>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <i className="fa fa-pencil edit" aria-hidden="true"></i>
                                                                                                </td>
                                                                                            </tr>
                                                                                        ))
                                                                                    }
                                                                                </tbody>
                                                                                <tfoot>
                                                                                    <tr>
                                                                                        <th colSpan="2">
                                                                                            <p>Total:</p>
                                                                                        </th>
                                                                                        <th>
                                                                                            <p className="notmatch" >13,032.20</p>
                                                                                        </th>
                                                                                        <th></th>
                                                                                    </tr>
                                                                                </tfoot>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div className="modal-footer justify-content-center">
                                                                        <a href="/"><button type="button" className="btn btn-primary btn-global">Save</button></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!------------ End Show Denomition Modal------------> */}
                                                    </div>

                                                </div>
                                                {/* <!------------ End Offers Tab Content Area ------------> */}

                                                {/* <!------------ Start Cash Register Transfer Modal ------------> */}
                                                <div className="modal" id="cr-transfer-modal" tabIndex="-1" role="dialog" aria-labelledby="InwardTransfer"
                                                    aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title">Transfer</h5>
                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="row">
                                                                    <div className="col-lg-6 form-group">
                                                                        <label htmlFor="transfer-type">Transfer Type</label>
                                                                        {/* <select className="form-control" id="transfer-type" onChange="getOption(this.value)"> */}
                                                                        <select className="form-control" id="transfer-type">
                                                                            <option value="d-Cash">Cash</option>
                                                                            <option value="d-Bank">Bank</option>
                                                                        </select>
                                                                    </div>

                                                                    <div className="col-lg-6 form-group" id="d-Cash" style={{ display: 'none' }}>
                                                                        <label htmlFor="office">Office</label>
                                                                        <select className="form-control">
                                                                            <option value="">Select Office</option>
                                                                            <option value="">Office 1</option>
                                                                        </select>
                                                                    </div>

                                                                    <div className="col-lg-6 form-group" id="d-Bank" style={{ display: 'none' }}>
                                                                        <label htmlFor="bank">Bank</label>
                                                                        <select className="form-control">
                                                                            <option value="">Select Bank</option>
                                                                            <option value="">Bank 1</option>
                                                                        </select>
                                                                    </div>

                                                                    <div className="col-lg-6 form-group" >
                                                                        <label htmlFor="cash_amount">Amount</label>
                                                                        <input type="text" className="form-control" id="cash_amount" placeholder="Enter Amount" />
                                                                    </div>
                                                                </div>

                                                                <div className="modal-footer justify-content-center">
                                                                    <a href="/"><button type="button" className="btn btn-primary btn-global">Save</button></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!------------ End Cash Register Transfer Modal ------------> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EftnRegister;
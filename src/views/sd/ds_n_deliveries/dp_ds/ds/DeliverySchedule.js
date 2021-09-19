import React from 'react';
import CommonLayout from '../../../../common/CommonLayout';
import TitleBreadcrumb from '../../../../common/TitleBreadcrumb';

class DeliverySchedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tb: "Delivery Schedule" };
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
                    <div className="layout-body delivery_schedule">
                        <div className="layout-sidebar delivery_schedule">
                            <div className="header">
                                <div className="row1">
                                    <div className="form-group">
                                        <i className="fa fa-search"> </i>
                                        <input type="text" placeholder="Search by Name, ID No" className="form-control" />
                                    </div>
                                    <span className="filter_search">
                                        <i className="fa fa-filter"> </i>
                                    </span>
                                </div>
                            </div>
                            <div className="content">
                                <div className="ds_accordion" id="accordion-1">
                                    {
                                        Array.from({ length: 10 }, (_, index_card) => (
                                            <div id={'card_' + index_card} className="card" key={index_card} onClick={() => this.cardOnClickHandler(index_card)}>
                                                <div className="card-header">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target={'#collapse_' + index_card} aria-expanded="false" aria-controls="collapseTwo">
                                                        <h5>{12 + index_card} May 2021</h5>
                                                        <span>1222</span>
                                                    </button>
                                                </div>
                                                <div id={'collapse_' + index_card} className="collapse" aria-labelledby="headingTwo" data-parent="#accordion-1">
                                                    <div className="card-body">
                                                        {
                                                            Array.from({ length: 3 }, (_, index_ds_innerItem) => (
                                                                <div className="ds_innerItem" key={index_ds_innerItem}>
                                                                    <div className="row1">
                                                                        <div className="group-1">
                                                                            <p>Abu Naser Tuhin (<span>DHK213686</span>)</p>
                                                                        </div>
                                                                        <h5>32,500.00</h5>
                                                                    </div>
                                                                    <div className="row2">
                                                                        <p>Tangi Bazar,Mall Gate</p>
                                                                    </div>
                                                                    {/* <div className="row3">
                                                                        <div className="group-2"><p>Scheduled: <span>08</span></p><p>New: <span>03</span></p></div>
                                                                    </div> */}
                                                                    <div className="row3">
                                                                        <div className="group-2">
                                                                            {
                                                                                index_ds_innerItem % 2 === 0 ?
                                                                                    <>
                                                                                        <p>Scheduled: <span>{'08'}</span></p>
                                                                                        <p>New: <span>{'03'}</span></p>
                                                                                    </>
                                                                                    :
                                                                                    <>
                                                                                        <p>Scheduled: <span>{'08'}</span></p>
                                                                                        <p>Delivered: <span>{'05'}</span></p>
                                                                                    </>
                                                                            }
                                                                        </div>
                                                                        <div className="group-2">
                                                                            {
                                                                                index_ds_innerItem % 2 === 0 ?
                                                                                    <>
                                                                                        <span className="material-icons add"> add </span>
                                                                                        <span className="material-icons vpn_key"> vpn_key </span>
                                                                                    </>
                                                                                    :
                                                                                    <>
                                                                                        <span className="material-icons lock" title="Locked"> lock </span>
                                                                                    </>
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>

                        <div className="layout-container w-100">
                            <div className="container-fluid">
                                <div className="col-12 delivery_schedule-body">
                                    <div className="row ds-header">
                                        <div className="col-lg-6 col-12">
                                            <p className="sr_name">SR: <span>Mehedi Hassan</span></p>
                                        </div>

                                        <div className="col-lg-6 col-12 d-flex align-items-center justify-content-end">
                                            <div className="product-header-info">
                                                <div className="info">
                                                    <p>Status: <span className="open">Open</span></p>
                                                    <p>Date: <span className="date">11-May-2021</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="delivery_schedule-tab">
                                        <ul className="nav nav-tabs mb-3" id="lineTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="underline_invoice-tab" data-toggle="tab" href="#underline_invoice" role="tab" aria-controls="underline_invoice" aria-selected="false">Invoices</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="underline_map-tab" data-toggle="tab" href="#underline_map" role="tab" aria-controls="underline_map" aria-selected="false">Map View</a>
                                            </li>
                                        </ul>

                                        <div className="tab-content" id="delivery_scheduleTabContent">


                                            <div className="tab-pane fade show active" id="underline_invoice" role="tabpanel" aria-labelledby="underline_invoice-tab">

                                                <table className="delivery_schedule-table">
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
                                                            </th>
                                                            <th>Customer</th>
                                                            <th>Invoice No</th>
                                                            <th>Amount</th>
                                                            <th> </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            Array.from({length: 20}, (_, index) => (
                                                                <tr className={index === 2 ? 'active': ''} key={index}>
                                                                    <td>
                                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
                                                                    </td>
                                                                    <td>
                                                                        <div>
                                                                            <p className="customer_name">Mehedi Hassan</p>
                                                                            <p className="order">Order: <span>87256798678</span> <span>(2 days Ago)</span> </p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <p data-toggle="modal" data-target="#invoice-modal">DHK002151</p>
                                                                    </td>
                                                                    <td>
                                                                        <p>30,561.00</p>
                                                                    </td>
                                                                    <td>
                                                                        <span title="Add" data-toggle="tooltip" data-placement="bottom"><span className="material-icons add"> add </span></span>
                                                                        <span title="Reshedule" data-toggle="tooltip" data-placement="bottom"><span class="material-icons insert_invitation"> insert_invitation </span></span>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <th colSpan="2">
                                                                <span className="bulk-button"><span className="fa fa-plus" aria-hidden="true"></span>Bulk Add</span>
                                                                <span className="bulk-button" data-toggle="modal" data-target="#reshedule-modal"><span className="fa fa-calendar-plus-o" aria-hidden="true"></span>Bulk Reshedule</span>
                                                            </th>
                                                            <th><p>Total: <span>3323</span></p></th>
                                                            <th><p>Total: <span>13,032.20</span></p></th>
                                                            <th></th>
                                                        </tr>
                                                    </tfoot>
                                                </table>

                                                <div className="modal" id="reshedule-modal" tabIndex="-1" role="dialog" aria-labelledby="InwardTransfer"
                                                    aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title">Bulk Reshedule</h5>
                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <p className="invoice-list">Invoices: <span>INV32152612, INV31866556, INV32152612 <span className="moreInvoice">More 20+</span></span></p>
                                                                <div className="row">
                                                                    <div className="col-lg-6 form-group">
                                                                        <label htmlFor="sr_name">Select SR</label>
                                                                        <select className="form-control" id="sr_name">
                                                                            <option>Mehedi Hassan</option>
                                                                            <option>Sahid Nawaz</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-lg-6 form-group" >
                                                                        <label htmlFor="shift_to">Shift to</label>
                                                                        <input type="date" className="form-control" id="shift_to" />
                                                                    </div>
                                                                </div>

                                                                <div className="modal-footer justify-content-center">
                                                                    <span><button type="button" className="btn btn-primary btn-global">Save</button></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="modal" id="invoice-modal" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                                                    aria-hidden="true">
                                                    <div className="modal-dialog modal-lg modal-dialog-centered">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title">Invoice</h5>
                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="row customer_info">
                                                                    <div className="col-lg-4 col-12">
                                                                        <p>Order/Invoice No: <span>INV32646668</span></p>
                                                                    </div>
                                                                    <div className="col-lg-4 col-12">
                                                                        <p>Date: <span>11-May-2021</span></p>
                                                                    </div>
                                                                    <div className="col-lg-4 col-12">
                                                                        <p>Total: <span>3,550.00</span></p>
                                                                    </div>
                                                                    <div className="col-lg-4 col-12">
                                                                        <p>Customer: <span>Lazz Pharma</span></p>
                                                                    </div>
                                                                    <div className="col-lg-4 col-12">
                                                                        <p>Type: <span>Cash</span></p>
                                                                    </div>
                                                                    <div className="col-lg-4 col-12">
                                                                        <p>Current Due: <span>5,500.00</span></p>
                                                                    </div>
                                                                    <div className="col-lg-4 col-12">
                                                                        <p>SR: <span>Abu Naser Tuhin</span></p>
                                                                    </div>
                                                                    <div className="col-lg-4 col-12">
                                                                        <p>Scheduled: <span>11-May-2021</span></p>
                                                                    </div>
                                                                </div>

                                                                <div className="row invoice-modal-table">
                                                                    <table className="col-12">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Items</th>
                                                                                <th>Type</th>
                                                                                <th>Amount</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {
                                                                                Array.from({length: 20}, (_, index) => (
                                                                                    <tr key={index}>
                                                                                        <td>
                                                                                            <p>5 X Altrip. Almotriptan.</p>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p>Regular (R)</p>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p>30,561.00</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                ))
                                                                            }
                                                                        </tbody>
                                                                        <tfoot>
                                                                            <tr>
                                                                                <th colSpan="2"><span>Subtotal:</span></th>
                                                                                <th><p>13,032.20</p></th>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan="2"><span>(+) Vat:</span></th>
                                                                                <th><p>50.00</p></th>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan="2"><span>(-) Discount:</span></th>
                                                                                <th><p>250.00</p></th>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan="2"><span>Gross Total:</span></th>
                                                                                <th><p>13,032.20</p></th>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan="2"><span>(+/-) Rounding Adjustment:</span></th>
                                                                                <th><p>-0.20</p></th>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan="2"> <span>Grand Total:</span></th>
                                                                                <th><p>13,032.00</p></th>
                                                                            </tr>
                                                                        </tfoot>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="underline_map" role="tabpanel" aria-labelledby="underline_map-tab">
                                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8332148972645!2d90.37697376498139!3d23.753326284587903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ac20cff015%3A0xff2b5ccc3b603741!2sShukrabad%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1621413506321!5m2!1sen!2sbd" width="100%" height="600" style={{border: '0'}} allowfullscreen="" loading="lazy"></iframe> */}
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

export default DeliverySchedule;
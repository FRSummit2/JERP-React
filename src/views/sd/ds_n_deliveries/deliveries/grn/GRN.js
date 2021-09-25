import React from 'react';
import CommonLayout from '../../../../common/CommonLayout';
import TitleBreadcrumb from '../../../../common/TitleBreadcrumb';

class GRN extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tb: "GRN" };
    }

    render() {
        return (
            <>
                <CommonLayout />
                <TitleBreadcrumb titleBreadcrumb={this.state.tb} />
                <div className="main-section">
                    <div className="layout-body ThirdPartyTender grn">
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
                                                <div className="row1"><h5>GRN/DHK/1052</h5> <p>16 Sep 2021</p></div>
                                                <div className="row2"><p>DS/DHK/1836</p></div>
                                                <div className="row3"><p>DELIVERY-RETURN</p></div>
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
                                            <h5>GRN No: <span>GRN/DHK/1052</span></h5>
                                            <span title="Print" data-toggle="tooltip" className="material-icons print"> print </span>
                                        </div>
                                    </div>


                                    <div className="row grn delivery-collection-table">
                                        <table className="col-12">
                                            <thead>
                                                <tr>
                                                    <th>Sl No</th>
                                                    <th>Product Name</th>
                                                    <th>Batch</th>
                                                    <th>Pack Size</th>
                                                    <th>Mfg Date</th>
                                                    <th>Exp Date</th>
                                                    <th>Quantity</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    Array.from({ length: 20 }, (_, index) => (
                                                        <tr className={index === 1 ? 'active' : ''} key={index}>
                                                            <td>{(index + 1)}</td>
                                                            <td>
                                                                <p>Avamist Nasal Spray - 1X1</p>
                                                            </td>
                                                            <td>
                                                                <p>15795412</p>
                                                            </td>
                                                            <td>
                                                                <p>20s</p>
                                                            </td>
                                                            <td>
                                                                <p>Jul 2021</p>
                                                            </td>
                                                            <td>
                                                                <p>Jul 2023</p>
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
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="row deCollection-footer">
                                        <span data-toggle="modal"><button className="btn btn-primary btn-global mx-2" data-toggle="modal" data-target="#popup-modal">Return GRN</button></span>
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

export default GRN;
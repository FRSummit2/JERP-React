import React from 'react';
import CommonLayout from '../../../../common/CommonLayout';
import TitleBreadcrumb from '../../../../common/TitleBreadcrumb';

class DeliveryPreparation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tb: "Delivery Preparation" };
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
                    <div className="layout-body delivery_preparation">
                        <div className="layout-sidebar delivery_preparation">
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
                                <div className="deliveryPre_accordion" id="accordion-1">
                                    {
                                        Array.from({ length: 10 }, (_, index_card) => (
                                            <div id={'card_' + index_card} className="card" key={index_card} onClick={() => this.cardOnClickHandler(index_card)}>
                                                <div className="card-header">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target={'#collapse_' + index_card} aria-expanded="false" aria-controls="collapseTwo">
                                                        <h5>{12 + index_card} May 2021</h5>
                                                    </button>
                                                </div>
                                                <div id={'collapse_' + index_card} className="collapse" aria-labelledby="headingTwo" data-parent="#accordion-1">
                                                    <div className="card-body">
                                                        {
                                                            Array.from({ length: 3 }, (_, index_ds_innerItem) => (
                                                                <div className="ds_innerItem" key={index_ds_innerItem}>
                                                                    <div className="row1">
                                                                        <h5>Abu Naser Tuhin</h5>
                                                                        <span>{11 + index_ds_innerItem}-May-2021</span>
                                                                    </div>
                                                                    <div className="row2">
                                                                        <p>Total Invoice: <span>08</span></p>
                                                                        <span className="fa fa-check-circle status"></span>
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
                                <div className="row delivery_preparation_area">
                                    <div className="col-4">
                                        <div className="delivery_preparation-block ">
                                            <div className="heading">
                                                <h5>All Printings</h5>
                                            </div>
                                            <div >
                                                <div className="print-category">
                                                    <h5 className="complete">Invoices</h5>
                                                    <div className="action-status">
                                                        <span className="material-icons print"> print </span>
                                                    </div>
                                                </div>
                                                <div className="print-category">
                                                    <h5 className="active">Challan</h5>
                                                    <div className="action-status">
                                                        <span className="material-icons print"> print </span>
                                                    </div>
                                                </div>
                                                <div className="print-category">
                                                    <h5 className="">Invoice Summary</h5>
                                                    <div className="action-status">
                                                        <span className="material-icons print"> print </span>
                                                    </div>
                                                </div>
                                                <div className="print-category">
                                                    <h5 className="">Package Summary</h5>
                                                    <div className="action-status">
                                                        <span className="material-icons print"> print </span>
                                                    </div>
                                                </div>
                                                <div className="print-category">
                                                    <h5 className="">Gate Pass</h5>
                                                    <div className="action-status">
                                                        <span className="material-icons print"> print </span>
                                                    </div>
                                                </div>
                                                <div className="print-category">
                                                    <button type="button" className="btn btn-primary btn-global w-100">Handover</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="delivery_preparation-block">
                                            <div className="heading">
                                                <h5>All Printings (<span>500</span>)</h5>
                                            </div>
                                            <div className="dPlaning_printing-table">
                                                <table className="col-12">
                                                    <thead>
                                                        <tr>
                                                            <th>Sl No</th>
                                                            <th>Customer</th>
                                                            <th>Invoice Number</th>
                                                            <th>Amount</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            Array.from({ length: 20 }, (_, index) => (
                                                                <tr key={index}>
                                                                    <td>
                                                                        <p>{(index + 1)}</p>
                                                                    </td>
                                                                    <td>
                                                                        <p>Fayazur Rahman Summit</p>
                                                                    </td>
                                                                    <td>
                                                                        <p>INV232156336</p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="done">1000</p>
                                                                    </td>
                                                                    <td>
                                                                        <span className="material-icons print"> print </span>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="col-12 d-flex justify-content-center">
                                                <span><button type="button" className="btn btn-primary btn-global disabled">Handover</button></span>
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

export default DeliveryPreparation;
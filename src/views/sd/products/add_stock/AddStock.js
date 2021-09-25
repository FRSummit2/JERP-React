import React from 'react';
import CommonLayout from '../../../common/CommonLayout';
import TitleBreadcrumb from '../../../common/TitleBreadcrumb';

import { requisition_product_list } from './requisition_product_list'

class AddStock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tb: "Add Stock",
            prod_list: []
        };
    }

    componentDidMount = async () => {
        console.log(requisition_product_list)
        await this.setState({
            prod_list: requisition_product_list.product_list
        })
        console.log(this.state.prod_list)
    }

    render() {
        return (
            <>
                <CommonLayout />
                <TitleBreadcrumb titleBreadcrumb={this.state.tb} />
                <div id="main-section" className="main-section">
                    <div className="layout-body">
                        <div className="layout-sidebar add-stock-sidebar">
                            <div className="header">
                                <div className="row1">
                                    <div className="form-group">
                                        <span className="material-icons search"> search </span>
                                        <input type="text" placeholder="Search by Name, ID No" className="form-control" />
                                    </div>
                                    <span className="filter_search material-icons"> filter_alt </span>
                                </div>
                                <div className="row2">
                                    <h5>Available Product: <span>200</span></h5>
                                </div>
                            </div>

                            <div className="content">
                                {
                                    // Array.from({ length: 20 }, (_, index) => (
                                        this.state.prod_list.map( (element, index) => (
                                        <div className="card_body" key={index}>
                                            <input id="product-9" type="checkbox" name="product" value="product-9" />
                                            <label htmlFor="product-9" className="check-item">
                                                <div className="row1"><h5>{ element.prod_name } ({ element.com_pack_size }) </h5> <span>{ Number(element.req_current_stock).toFixed(2) }</span></div>
                                                <div className="row2"><p>{ element.prod_code } - { element.com_pack_desc }</p></div>
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="layout-container w-100">
                            <div className="container-fluid">
                                <div className="col-12 add-stock-details">
                                    <div className="row add-stock-header">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <p>Depot Name: <span className="text-data">Rangpur</span></p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 text-lg-right">
                                            <p>Date: <span className="text-data">10/01/2021</span></p>
                                        </div>
                                    </div>
                                    <div className="row add-stock-table">
                                        <table className="col-12">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Batch No</th>
                                                    <th>MFG Date</th>
                                                    <th>EXP Date</th>
                                                    <th>Quantity</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="product">
                                                            <p className="name">Ace® Power <span>500mg</span></p>
                                                            <p className="type">Paricatamole</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <input className="form-control-sm" type="text" placeholder="Enter Btch" />
                                                    </td>
                                                    <td>
                                                        <input className="form-control-sm" type="date" />
                                                    </td>
                                                    <td>
                                                        <input className="form-control-sm" type="date" />
                                                    </td>
                                                    <td>
                                                        <div className="quantity-input">
                                                            <input className="minus" type='button' value='-' field='quantity' />
                                                            <input className="quantity" type='text' name='quantity' placeholder="0" />
                                                            <input className="plus" type='button' value='+' field='quantity' />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="hover-btns">
                                                            <a title="View" data-toggle="tooltip" data-placement="left"> <span className="action-btn material-icons">delete</span> </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="add-stock-footer">
                                        <button type="button" className="btn btn-primary btn-global btn-draft mx-2">Cancle</button>
                                        <button type="button" className="btn btn-primary btn-global mx-2">Add Stock</button>
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

export default AddStock;
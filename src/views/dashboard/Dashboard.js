import React from 'react';
// import { getUser, removeUserSession } from '../Utils/Common';
// import { getUser, getTokenExpiresTime, removeUserSession } from '../../Utils/Common';
import { Bar, Radar } from 'react-chartjs-2';
import { NavLink } from "react-router-dom"

import CommonLayout from '../common/CommonLayout';

// function Dashboard(props) {
class Dashboard extends React.Component {
    // const user = getUser();

    // handle click event of logout button
    // const handleLogout = () => {
    /*handleLogout = () => {
        // removeUserSession();
        // props.history.push('/login');
        console.log(getTokenExpiresTime())
        console.log(new Date(getTokenExpiresTime()).getTime())
        console.log(getUser())
        console.log(new Date().getTime())

        removeUserSession()
        this.props.history.push('/');
    }*/

    // BAR CHART
    // const data = {
    data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // const options = {
    options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    // const menus = [
    menus = [
        { name: 'Monthly Delivery Plan', url: '/features/local_sales/delivery_plan' },
        { name: 'Dispatch Entry', url: '/features/local_sales/dispatch-entry' },
        { name: 'DS Transfer Packing Preparation', url: '/features/local_sales/ds-transfer-packing-preparation' },
        { name: 'Sales Order', url: '/features/local_sales/sales_order' },
        { name: 'Order Approval', url: '/features/local_sales/order_approval' },
        { name: 'Add Stock', url: '/features/goods_movement/add-stock' },
        { name: 'Customer Pending List', url: '/features/marketing_and_crm/customer-pending-list' },
        { name: 'Customer List', url: '/features/stakeholders/retailer' },
        { name: 'Customer Credit', url: '/features/marketing_and_crm/customer-credit' },
        { name: 'Deliveries', url: '/features/local_sales/deliveries' },
        { name: 'Customer Payment', url: '/features/local_sales/customer-payment' },
        { name: 'Delivery Schedule', url: '/features/local_sales/dp-ds' },
        { name: 'Delivery Preparation', url: '/features/local_sales/delivery-preparation' },
        { name: 'Collection', url: '/features/local_sales/collection' },
        { name: 'Employee List', url: '/features/configuration/employee' },
        { name: 'Balance Sheet', url: '/features/local_sales/balance-sheet' },
        { name: 'Stock Position', url: '/features/reports/stock-report' },
        { name: 'Delivery GRN SR', url: '/features/local_sales/delivery_grn' },
        { name: 'GRN', url: '/features/inventory/grn' },
        { name: 'Transfer Requisition', url: '/features/inventory/requisition' },
        { name: 'Create Requisition', url: '/features/local_sales/create-requisition' },
        { name: 'Approve Requisition', url: '/features/goods_movement/approve-requisition' },
        { name: 'Transfer Verify', url: '/features/goods_movement/verified-requisition' },
        { name: 'Transfer Verify Update', url: '/features/goods_movement/verified-requisition-update' },
        { name: 'Transfer Approve', url: '/features/inventory/transfer' },
        { name: 'Products', url: '/features/inventory/products' },
        { name: 'Product Details', url: '/features/inventory/all-products' },
        { name: 'Price Approval', url: '/features/inventory/product-price-approval' },
        { name: 'Special Request Approval', url: '/features/local_sales/special-req-approval' },
        { name: 'Third Party Tender', url: '/features/local_sales/third-party-tender' },
        { name: 'Sales Area', url: '/features/configuration/sales_area' },
        { name: 'Sales Slab Discount', url: '/features/sales_promotion/slab-discount' },
        { name: 'Cash Register', url: '/features/accounts/cash-register' },
        { name: 'EFTN Register', url: '/features/accounts/eftn-register' },
        { name: 'Challan Register', url: '/features/accounts/challan-register' },
        { name: 'Bank Register', url: '/features/accounts/bank-register' },
        { name: 'Cheque Register', url: '/features/accounts/cheque-register' },
        { name: 'Expenditure Register', url: '/features/accounts/expenditure-register' }
    ]

    // RADAR CHART
    // const radar_data = {
    radar_data = {
        labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
        datasets: [
            {
                label: '# of Votes',
                data: [2, 9, 3, 5, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    // const radar_options = {
    radar_options = {
        scale: {
            ticks: { beginAtZero: true },
        },
    };

    // const menuItemClickHandler = (path) => {
    //     props.history.push(path)
    // }

    render() {
        return (
            <div>
                <CommonLayout />
                {/* Welcome {user.name}!<br /><br /> */}
                <div id="main-section" className="main-section">
                    {/* <input type="button" onClick={this.handleLogout} value="Logout" /> */}

                    <div className="dashboard-menu row">
                        {
                            this.menus.map((element, index) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 url-sec-dashboard" key={index}>
                                    {/* <a className={index}> */}
                                    <NavLink to={element.url}>{element.name}</NavLink>
                                    {/* </a> */}
                                </div>
                            ))
                        }
                    </div>

                    {/* <div style={{marginTop: "20px"}}> */}
                    <div className="row m-0 w-100">
                        <div className="col-lg-6 w-50 p-0" style={{ border: "1px solid #026CD1" }}>
                            <div className='header'>
                                <h1 className='title'>Vertical Bar Chart</h1>
                                <div className='links'>
                                    <a
                                        className='btn btn-gh'
                                        href='https://reactchartjs.github.io/react-chartjs-2/#/'
                                        rel="noreferrer" target="_blank"
                                    >
                                        Chartjs 2 Source
                                    </a>
                                    <a
                                        className='btn btn-gh'
                                        href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/VerticalBar.js'
                                        rel="noreferrer" target="_blank"
                                    >
                                        Github Source
                                    </a>
                                </div>
                            </div>
                            <Bar data={this.data} options={this.options} />
                        </div>
                        <div className="col-lg-6 w-50 p-0" style={{ border: "1px solid #026CD1" }}>
                            <div className='header'>
                                <h1 className='title'>Radar Chart</h1>
                                <div className='links'>
                                    <a
                                        className='btn btn-gh'
                                        href='https://reactchartjs.github.io/react-chartjs-2/#/'
                                        rel="noreferrer" target="_blank"
                                    >
                                        Chartjs 2 Source
                                    </a>
                                    <a
                                        className='btn btn-gh'
                                        href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Radar.js'
                                        rel="noreferrer" target="_blank"
                                    >
                                        Github Source
                                    </a>
                                </div>
                            </div>
                            <Radar data={this.radar_data} options={this.radar_options} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
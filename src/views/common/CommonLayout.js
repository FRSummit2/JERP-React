import React, { Component } from 'react';
import Header from '../common/Header.js';
import Sidebar from '../common/Sidebar.js';
import Footer from '../common/Footer.js';

// function Header() {
class CommonLayout extends Component {
    render() {
        return (
            <div id="master-layout" className="master-layout">
                <Header />
                <Sidebar />
                <Footer />
            </div>
        );
    }
}

export default CommonLayout;
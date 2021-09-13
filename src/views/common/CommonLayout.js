// import React, { Component, useState } from 'react';
import Header from '../common/Header.js';
import TitleBreadcrumb from '../common/TitleBreadcrumb.js';
import Sidebar from '../common/Sidebar.js';
import Footer from '../common/Footer.js';

const CommonLayout = () => {
    // class CommonLayout extends Component {
    // const [sidenav_common, setSidenav_common] = useState(0)

    const hamburgerToggleEvent = (e) => {
        // setSidenav_common(1)
        console.log(e)
    }

    // render() {
    return (
        <div id="master-layout" className="master-layout">
            <Header hamburgerToggleEvent_FromHeader={ hamburgerToggleEvent } />
            <TitleBreadcrumb />
            <Sidebar />
            <Footer />
        </div>
    );
    // }
}

export default CommonLayout;
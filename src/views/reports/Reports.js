import React from 'react';
import CommonLayout from '../common/CommonLayout';
import TitleBreadcrumb from '../common/TitleBreadcrumb';

class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tb: "Reports" };
    }

    report_name = [
        { name: 'Invoice' },
        { name: 'Invoice Multi' },
        { name: 'Challan' },
        { name: 'Challan Multi' },
    ]

    printClick = (str) => {
        switch(str) {
            case 'Invoice':
                break;
            case 'Invoice Multi':
                break;
            case 'Challan':
                break;
            case 'Challan Multi':
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <CommonLayout />
                <TitleBreadcrumb titleBreadcrumb={this.state.tb} />

                <div id="main-section" className="main-section">
                    <div className="printing-report row">
                        {
                            this.report_name.map((element, index) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 url-sec-dashboard" key={index} style={{ padding: '0' }}>
                                    <button className="report-btn" onClick={ () => this.printClick(element.name) }>{element.name}</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Reports;
import React, { Component } from 'react';
// import { render } from 'react-dom';
import Parent from './OtherParent';
import Child from './OtherChild';
// import './style.css';

export default class OtherMain extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React',
            parentTextBoxValue: ''
        };
    }

    handleParentData = (e) => {
        this.setState({ parentTextBoxValue: e })
    }

    getDataFromChild = (e) => {
        console.log('Child data: ' + e)
    }

    render() {
        return (
            <div>
                <Parent handleData={this.handleParentData} getFromChild={this.getDataFromChild} />
                <Child parentTextBoxValue={this.state.parentTextBoxValue} />
            </div>
        );
    }
}

// export default OtherMain;
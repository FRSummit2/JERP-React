import React, { Component } from 'react';

class OtherChild extends Component {

    // constructor(props) {
    //     super(props);
    // }


    render() {
        return (
            <div className="App">
                <p>{this.props.parentTextBoxValue}</p>
            </div>
        );
    }
}

export default OtherChild;
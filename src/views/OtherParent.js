import React, { Component } from 'react';
// import Button from 'react-uikit-button';

class OtherParent extends Component {

    constructor(props) {
        super(props);
        this.state = { TextBoxValue: "" }
    }

    SubmitValue = (e) => {
        this.props.handleData(this.state.TextBoxValue)
    }

    onChange = (e) => {
        console.log(e.target.value)
        this.setState({ TextBoxValue: e.target.value })

        this.props.getFromChild(e.target.value)
    }
    render() {
        return (
            <div className="">
                <input type="text" name="TextBox" onChange={this.onChange}/>
                <button onClick={this.SubmitValue}>Submit Value</button>
            </div>
        );
    }
}

export default OtherParent;
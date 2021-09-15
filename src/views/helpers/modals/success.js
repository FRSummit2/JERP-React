import React from "react";

class SuccessModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tb: "BankRegister",
            /*buttonPressed: ""*/
        };
    }

    render() {
        return (
            <div className="modal fade" id="confirmation-modal" tabIndex="-1" role="dialog" aria-labelledby="popupmodal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="popup-content">
                                <div className="icon">
                                    <span className="material-icons">help</span>
                                </div>
                                <div className="context">
                                    <h5>Are you Sure?</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                </div>
                                <div className="btns-group">
                                    <button type="button" className="btn btn-primary btn-discard" data-dismiss="modal" aria-label="Close">Discard</button>
                                    <span>|</span>
                                    <button type="button" className="btn btn-primary btn-continue">Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SuccessModal;
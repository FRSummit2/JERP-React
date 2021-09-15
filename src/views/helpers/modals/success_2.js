// npm install react-confirm-alert --save
// https://www.npmjs.com/package/react-confirm-alert

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
// import { useState } from 'react'

// export const SuccessModal = ({ handleClose, show, children }) => {
  export const SuccessModal2 = async (title, message) => {
    // submit = () => {
      // let ret_val = 'false'

      confirmAlert({
        title: title,
        message: message,
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              // ret_val = 'true'
              // return setSuccessModalResponse(true)
              console.log('Yes')
              confirm()
            }
          },
          {
            label: 'No',
            onClick: () => {
              // ret_val = 'false'
              // return setSuccessModalResponse(false)
              console.log('No')
              cancel()
            }
          }
        ]
      });

    //   return 100
    // };
    // const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    // return (
    //   <div className={showHideClassName}>
    //     <section className="modal-main">
    //       {children}
    //       <button type="button" onClick={handleClose}>
    //         Close
    //       </button>
    //     </section>
    //   </div>
    // );
};

const confirm = async () => {
    console.log('confirm')
    return 1
}

const cancel = async () => {
    console.log('cancel')
    return 0
}

/*
class SuccessModal extends React.Component {
    submit = () => {
      confirmAlert({
        title: 'Confirm to submit',
        message: 'Are you sure to do this.',
        buttons: [
          {
            label: 'Yes',
            onClick: () => alert('Click Yes')
          },
          {
            label: 'No',
            onClick: () => alert('Click No')
          }
        ]
      });
    };

    render() {
      return (
        <div className='container'>
          <button onClick={this.submit}>Confirm dialog</button>
        </div>
      );
    }
}
*/
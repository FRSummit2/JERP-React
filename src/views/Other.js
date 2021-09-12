import React from 'react';
import { NavLink } from 'react-router-dom';

function Other() {
  return (
    <div>
      {/* <NavLink exact activeClassName="active" to="/">Home</NavLink> */}

      <div className="row">
        <div className="margin-btm-fro-lnk col-lg-3 col-md-4 col-sm-6"><NavLink exact activeClassName="active" to="/" className="btn btn-primary active">Home</NavLink></div>
        <div className="margin-btm-fro-lnk col-lg-3 col-md-4 col-sm-6"><NavLink exact activeClassName="active" to="/vuejs/question-part-1" className="btn btn-primary">VuejsQuestionPart_1</NavLink></div>
        <div className="margin-btm-fro-lnk col-lg-3 col-md-4 col-sm-6"><NavLink exact activeClassName="active" to="/" className="btn btn-primary">Home</NavLink></div>
        <div className="margin-btm-fro-lnk col-lg-3 col-md-4 col-sm-6"><NavLink exact activeClassName="active" to="/" className="btn btn-primary">Home</NavLink></div>
        <div className="margin-btm-fro-lnk col-lg-3 col-md-4 col-sm-6"><NavLink exact activeClassName="active" to="/" className="btn btn-primary">Home</NavLink></div>
        <div className="margin-btm-fro-lnk col-lg-3 col-md-4 col-sm-6"><NavLink exact activeClassName="active" to="/" className="btn btn-primary">Home</NavLink></div>
      </div>
    </div>
  );
}

export default Other;
import React from 'react';
import "./RightArrow.css";

const RightArrow = props => {
    return (
      <div className="nextArrow" onClick={props.goToNext}>
        <i className="fas fa-caret-right" aria-hidden="true"></i>
      </div>
    );
};

export default RightArrow;

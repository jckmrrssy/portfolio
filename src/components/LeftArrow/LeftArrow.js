import React from 'react';
import "./LeftArrow.css";

const LeftArrow = props => {
    return (
      <div className="backArrow" onClick={props.goToPrevious}>
        <i className="fas fa-caret-left" aria-hidden="true"></i>
      </div>
    );
};

export default LeftArrow;

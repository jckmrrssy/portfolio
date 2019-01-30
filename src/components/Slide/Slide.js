import React from 'react';
import "./Slide.css";

const Slide = ({ image }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: '250px 250px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    };
    
    return (
        <div className="slide" style={styles}></div>
    );
};

export default Slide;
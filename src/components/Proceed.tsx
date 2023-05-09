import React from 'react';
import logo from "../assets/stacktrek_v1.png";

const Proceed = () => {
  return (
    <div className="bg-white">
      <div className="line" style={{ borderTop: '1px solid black', margin: '10px 0' }}></div>
      <img src={logo} alt="Logo" className="logo" style={{ maxWidth: '200px' }} />
      <div className="line" style={{ borderTop: '1px solid black', margin: '10px 0' }}></div>
    </div>
  );
};

export default Proceed;

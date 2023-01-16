import React from 'react';
import './Footer.css';
import bgFooter from '../../../assets/shape-bg.png';


function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        {/* <div style={ { marginLeft: '30%', position: 'absolute', bottom: '20px', fontStyle: 'italic' } }>
          @2021 - All Rights reserved
        </div> */}
        <img src={bgFooter} alt="footer back" />
      </div>
    </div>
  );
}

export default Footer;
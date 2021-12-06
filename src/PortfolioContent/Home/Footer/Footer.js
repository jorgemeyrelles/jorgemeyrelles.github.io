import React from 'react';
import './Footer.css';

// import { Container } from './styles';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        {/* <div style={ { marginLeft: '30%', position: 'absolute', bottom: '20px', fontStyle: 'italic' } }>
          @2021 - All Rights reserved
        </div> */}
        <img src="https://mellopipelines.com/public/image/footer-hills.png" alt="footer back" />
      </div>
    </div>
  );
}

export default Footer;
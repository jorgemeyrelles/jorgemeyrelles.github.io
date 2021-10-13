import React from 'react';

function Footer() {
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap');
  </style>
  const styleFooter = {
    backgroundColor: 'green',
    width: '100%',
    height: '100px',
    position: 'fixed',
    bottom: '0',
    background: '#1A1A1A',
    fontFamily: '"Nunito", sans-serif',
    color: 'white',
    textAlign: '-webkit-center',
  };

  const styleDiv = {
    display: 'flex',
    justifyContent: 'space-evenly',
    position: 'relative',
    top: '20%',
    width: '300px',
  };

  return(
    <footer style={ styleFooter }>
      <div style={ styleDiv }>
        {/* <a href="https://linkedin.com/in/jorgemeyrelles" target="blank">
          <img align="center" src="https://icongr.am/devicon/linkedin-plain.svg?size=30&color=D7D7D7" alt="https://linkedin.com/in/jorgemeyrelles" />
        </a> */}
        <a href="https://www.facebook.com/jorge.meyrelles/" target="blank">
          <img align="center" src="https://icongr.am/simple/facebook.svg?size=30&color=D7D7D7" alt="https://fb.com/jorge.meyrelles" />
        </a>
        <a href="https://www.xing.com/profile/Jorge_Meyrelles/cv" target="blank">
          <img align="center" src="https://icongr.am/fontawesome/xing-square.svg?size=30&color=D7D7D7" alt="xing_jorgemeyrelles" />
        </a>
      </div>
      <div style={ { position: 'relative', top: '30px', fontStyle: 'italic' } }>
        @2021 - All Rights reserved
      </div>
    </footer>
  );
};

export default Footer;

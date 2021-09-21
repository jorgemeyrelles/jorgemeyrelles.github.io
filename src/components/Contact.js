import React from 'react';

function Contact() {
  const styleBtn = {
    position: 'relative',
    width: '61px',
    height: '56px',

    background: '#C4C4C4',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  };
  return(
    <a
      style={ styleBtn }
      href="https://wa.me/5521994844035?&text=Oi!" target="blank"
    >
      <img
        style={ { position: 'relative', top: '25%' } }
        src="https://icongr.am/simple/whatsapp.svg?size=30&color=currentColor&colored=false"
        alt="whats icon"
      />
    </a>
  );
};

export default Contact;

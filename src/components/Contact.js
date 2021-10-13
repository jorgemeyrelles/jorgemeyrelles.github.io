import React from 'react';

function Contact() {
  const styleBtn = {
    position: 'relative',
    width: '61px',
    height: '56px',
    borderRadius: '10px',

    background: '#C4C4C4',
    boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.25)',
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

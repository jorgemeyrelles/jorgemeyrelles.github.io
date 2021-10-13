import React, { useState } from 'react';

function Github() {
  const [hover, setHover] = useState(false);
  const styleBtn = (hover) => ({
    position: 'relative',
    width: '61px',
    height: '56px',
    borderRadius: '10px',

    background: '#C4C4C4',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.5)',
    border: '1px solid #1A1A1A',
    transform: !hover ? 'scale(1)' : 'scale(1.1)',
  });
  return(
    <a
      onPointerOver={ ()=> setHover(true) }
      onPointerOut={ () => setHover(false) }
      style={ styleBtn(hover) }
      href="https://github.com/jorgemeyrelles" target="blank"
    >
      <img
        style={ { position: 'relative', top: '25%' } }
        src="https://icongr.am/simple/github.svg?size=30&color=currentColor&colored=false"
        alt="github icon"
      />
    </a>
  );
};

export default Github;

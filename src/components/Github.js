import React from 'react';

function Github() {
  const styleBtn = {
    position: 'relative',
    width: '61px',
    height: '56px',
    // left: '271px',
    // top: '726px',

    background: '#C4C4C4',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  };
  return(
    <a
      style={ styleBtn }
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

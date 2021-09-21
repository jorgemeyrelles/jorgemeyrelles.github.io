import React from 'react';

function Portifolio() {
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Raleway:wght@600&display=swap');
  </style>
  const styleName = {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 'bold',
    fontSize: '60px',
    listStyle: 'none',
    marginTop: '80px',
  }
  const styleTitle = {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 'bold',
    fontSize: '60px',
    listStyle: 'none',
    marginTop: '20px',
  }
  return(
    <main style={ { position: 'absolute', textAlign: 'center', left: '35%' } }>
      <div style={ styleTitle }>Portifolio</div>
      <ul style={ { textAlign: 'center', position: 'relative', top: '50%' } }>
        <li style={ styleName }>
          <a href="https://jorgemeyrelles.github.io/triviagame/">
            Trivia Game
          </a>
        </li>
        <li style={ styleName }>
          <a href="https://jorgemeyrelles.github.io/mandd-app/">
            Recipe App
          </a>
        </li>
      </ul>
    </main>
  );
};

export default Portifolio;

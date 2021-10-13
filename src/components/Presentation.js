import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import Footer from './Footer';
import Github from './Github';
import './presentationStyle.css';
import ProfilePicture from './ProfilePicture';

function Presentation() {
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Raleway:wght@600&display=swap');
  </style>
  const styleNav = {
    fontFamily: '"Montserrat", sans-serif',
    position: 'relative',
    width: '500px',
    height: '46px',
    left: '55%',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: '4',
    alignItems: 'center',
    fontWeight: 'bold',
  };
  const styleMain = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0px',
    top: '0px',
  };
  const styleLeft = {
    position: 'absolute',
    width: '920px',
    height: '100%',
    left: '-2px',
    top: '0px',
    background: '#D7D7D7',
  };
  const styleRight = {
    position: 'fixed',
    width: '1200px',
    height: '1000px',
    left: '45%',
    top: '-192px',
    background: '#000000',
    transform: 'rotate(9.67deg)',
    boxShadow: '0 0 15px black',
  };
  const styleIam = {
    position: 'absolute',
    width: '171px',
    height: '58px',
    left: '56px',
    top: '121px',
    fontFamily: '"Raleway", sans-serif',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '40px',
    lineHeight: '47px',
    display: 'flex',
    alignItems: 'flex-end',
    textAlign: 'center',
  };
  const styleName = {
    position: 'absolute',
    width: '50%',
    height: '105px',
    left: '63px',
    top: '203px',

    fontFamily: '"Raleway", sans-serif',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '50px',
    lineHeight: '94px',
    textSlign: 'center',

    color: '#000000',
  };
  const styleSubTitle = {
    position: 'absolute',
    width: '632px',
    height: '40px',
    left: '65px',
    top: '335px',
    textShadow: '0px 0px 15px rgba(0, 0, 0, 0.25)',

    fontFamily: '"Raleway", sans-serif',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '20px',
    lineHeight: '29px',
    // textAlign: 'center',

    color: '#919191',

  };
  const styleBtn = {
    position: 'absolute',
    width: '300px',
    height: '60px',
    left: '15%',
    top: '476px',
    display: 'flex',
    justifyContent: 'space-around',
    textAlign: 'center',
  };

  const btn = {
    textDecoration: "none",
  }

  return(
    <main style={ styleMain }>
      <div style={ { width: '100%', height: '50px' } }>
        <nav style={ styleNav }>
          <div>About me</div>
          <div>Skills</div>
          <Link style={ btn } to="/portifolio">
            Portfolio
          </Link>
          <div>Contact me</div>
        </nav>
      </div>
      <section style={ styleLeft }>
        <div style={ styleIam }>
          Hi, I am
        </div>
        <div style={ styleName }>
          Jorge Meyrelles Jr.
        </div>
        <div style={ styleSubTitle }>
          Front-end / Back-end / Data Science (Jr)
        </div>
        <div style={ styleBtn }>
          <Contact />
          <Github />
        </div>
      </section>
      <section style={ styleRight }>
        <ProfilePicture />
      </section>
      <Footer />
    </main>
  );
}

export default Presentation;

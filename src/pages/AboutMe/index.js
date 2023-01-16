/* eslint-disable import/no-cycle */
import React from 'react';
import About from '../../PortfolioContent/AboutMe';
// import Footer from '../../PortfolioContent/Home/Footer';
// import Header from '../../PortfolioContent/Home/Header';
import '../Home/Home.css';

// import { Container } from './styles';

function AboutMe() {
  return (
    <div>
      {/* <Header /> */}
      <About id="About Me" />
      {/* <Footer /> */}
    </div>
  );
}

export default AboutMe;
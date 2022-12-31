import React from 'react';
import About from '../../PortfolioContent/AboutMe';
import Footer from '../../PortfolioContent/Home/Footer';
import Header from '../../PortfolioContent/Home/Header';
import './Home.css';

// import { Container } from './styles';

function AboutMe() {
  return (
    <div className="home-container">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default AboutMe;
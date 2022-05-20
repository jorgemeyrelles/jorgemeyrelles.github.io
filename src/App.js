import React from 'react';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import Portifolio from './pages/Portifolio';
// import AboutMe from './pages/AboutMe';
// import Profile from './PortfolioContent/Home/Profile';
// import Footer from './PortfolioContent/Home/Footer/Footer';

function App() {
  return (
    <Switch>
      <Route exact path="/" component= { Home } />
      <Route exact path="/portfolio" component= { Portifolio } />
      {/* <Route exact path="/aboutme" component={ AboutMe } /> */}
    </Switch>
    // <div>
    //   <Profile />
    //   <Footer />
    // </div>
  );
}

export default App;

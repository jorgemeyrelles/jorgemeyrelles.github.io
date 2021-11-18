import React from 'react';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import Portifolio from './pages/Portifolio';
import Profile from './PortfolioContent/Home/Profile';
import Footer from './PortfolioContent/Home/Footer/Footer';

function App() {
  return (
    <Switch>
      <Route exact path="/" component= { Home } />
      <Route exact path="/portifolio" component= {Portifolio} />
    </Switch>
    // <div>
    //   <Profile />
    //   <Footer />
    // </div>
  );
}

export default App;

import React from 'react';
// import Home from './pages/Home/index';
// import { Route, Switch } from 'react-router-dom';
// import Portifolio from './pages/Portfolio';
import PortfolioContent from './PortfolioContent';

function App() {
  return (
    <div>
      <PortfolioContent />
    </div>
    // <Switch>
    //   <Route exact path="/" component={Home} />
    //   <Route exact path="/portfolio" component={Portifolio} />
    //   {/* <Route exact path="/aboutme" component={ AboutMe } /> */}
    // </Switch>
  );
}

export default App;

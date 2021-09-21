import React from 'react';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import Portifolio from './pages/Portifolio';

function App() {
  return (
    <Switch>
      <Route exact path="/" component= { Home } />
      <Route exact path="/portifolio" component= {Portifolio} />
    </Switch>
  );
}

export default App;

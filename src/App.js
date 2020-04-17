import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const HatsPage = (props) => {
  return (
    <div>
      <h1>HATS PAGE {props.match.params.productID}</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop/hats' component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;

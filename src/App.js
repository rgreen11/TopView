import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './containers/Navbar/Navbar';
import Bikes from './containers/Bikes/Bikes';
import Helmet from './containers/Helmet/Helmet';
import Products from './assets/products';
import NumItemsPurchase from './Context/Context';



function App() {
  const [products] = useState(Products)
  const [itemsPurchase, setItemsPurchase] = useState({})

  return (<NumItemsPurchase.Provider value={{ itemsPurchase, setItemsPurchase }}>
    <Route component={() => NavBar(Products)} />
    <Switch className="App">
      <Route exact path="/" component={() => Bikes(products)} />
      <Route exact path="/accessory" component={() => Helmet(products)} />
    </Switch>
  </NumItemsPurchase.Provider>
  );
}

export default App;

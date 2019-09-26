import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './containers/Navbar/Navbar';
import Bikes from './containers/Bikes/Bikes';
import Helmet from './containers/Helmet/Helmet';
import Products from './assets/products';
import OperationContext from './Context/OperationContext';
function App() {
  const [products] = useState(Products)
  return (<div>
    <OperationContext.Provider value={products} >
      <Route component={NavBar} />
      <Switch className="App">
        <Route exact path="/" component={() => Bikes(products)} />
        <Route exact path="/accessory" component={() => Helmet(products)} />
      </Switch>
    </OperationContext.Provider>
  </div>
  );
}

export default App;

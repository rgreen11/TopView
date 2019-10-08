import React, { useState } from 'react';
import NavBar from './containers/Navbar/Navbar';
import Bikes from './containers/Bikes/Bikes';
import Products from './assets/products';
import NumItemsPurchase from './Context/Context';
import "./App.scss";



function App() {
  const [products] = useState(Products)
  const [itemsPurchase, setItemsPurchase] = useState({})

  return (<NumItemsPurchase.Provider value={{ itemsPurchase, setItemsPurchase }}>
    <NavBar products={products} />
    <Bikes products={products} />
  </NumItemsPurchase.Provider>
  );
}

export default App;

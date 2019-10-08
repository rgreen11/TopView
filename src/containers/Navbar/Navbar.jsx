import React from "react";
import Logo from "../../components/Logo/logo";
import "./Navbar.scss";

function Navbar(props) {
  return (
    <header className="header">
      <div className="header-container">
        <h1>TopView</h1>
        <Logo products={props.products} />
      </div>
    </header>
  );
}

export default Navbar;

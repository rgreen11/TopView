import React from "react";
import { withRouter } from "react-router-dom";
import PageName from "../../components/pageName/pageName";
import Logo from "../../components/Logo/logo";
import "./Navbar.scss";

function Navbar(props) {
  let { pathname } = props.location;
  let name = pathname.replace(/\//gi, "");

  return (
    <header className="header">
      <div className="header-container">
        <PageName name={name} />
        <Logo />
      </div>
    </header>
  );
}

export default withRouter(Navbar);

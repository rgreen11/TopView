import React from "react";
import "./pageName.scss";

function pageName({ name }) {
  if (!name) {
    name = "bike";
  }
  return (
    <header>
      <h1 className="page-name">{name} </h1>
    </header>
  );
}

export default pageName;

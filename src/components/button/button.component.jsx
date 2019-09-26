import React from "react";
import { Link, withRouter } from "react-router-dom";

function Button(props) {
  if (props.location.pathname === "/")
    return <Link to="/accessory"> Next page</Link>;
  if (props.location.pathname === "/accessory")
    return <Link to="/checkout"> Next page</Link>;
}

export default withRouter(Button);

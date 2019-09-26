import React, { useState, useEffect } from "react";
import OperationContext from "../../Context/OperationContext";

function Logo() {
  console.log(OperationContext.Provider);
  //   const quantityPrice = OperationContext.Consumer;
  const [items, setItems] = useState({});
  useEffect(() => {
    setItems();
  }, []);
  return (
    <div>
      <h1>Logo</h1>
      <OperationContext.Consumer>
        {value => console.log(value)}
      </OperationContext.Consumer>
    </div>
  );
}
export default Logo;

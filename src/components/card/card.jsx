import React, { useState } from "react";
import "./card.scss";
import Operations from "../operations/operations";
// import OperationContext from "../../Context/OperationContext";

function Card({ image, name, price }) {
  const [priceQuantity, setPriceQuantity] = useState({});
  const operation = new Operations(price);

  // OperationContext.Provider = priceQuantity;

  return (
    <div className="container-card">
      {/* <OperationContext.Provider value={{ priceQuantity: priceQuantity }} /> */}
      <div
        className="container-card-holder"
        onClick={e => {
          setPriceQuantity(operation.add(e));
        }}
      >
        <div className="container-card-holder_image">
          <img
            className="container-card-holder_image_1"
            alt="bike"
            src={image}
            name={name}
          />
        </div>
        <div className="container-card-holder_name-price">
          <h1>{name}</h1>
          <h1>$ {price}</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;

import React, { useContext, useEffect } from "react";
import "./card.scss";
import Operations from "../operations/operations";
import NumItemsPurchase from "../../Context/Context";

function Card({ image, name, price }) {
  const { itemsPurchase, setItemsPurchase } = useContext(NumItemsPurchase);
  const operation = new Operations(price);

  return (
    <div className="container-card">
      <div
        className="container-card-holder"
        onClick={e => {
          setItemsPurchase(operation.add(e));
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

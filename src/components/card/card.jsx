import React, { useContext } from "react";
import "./card.scss";
import { Operations, addZeros } from "../operations/operations";
import NumItemsPurchase from "../../Context/Context";

function Card({ image, name, price }) {
  const { itemsPurchase, setItemsPurchase } = useContext(NumItemsPurchase);
  const operation = new Operations(price);
  console.log(itemsPurchase);
  return (
    <div className="container-card">
      <div className="container-card-holder">
        <div className="container-card-holder_image">
          <h1 className="add_to_cart">Add to Cart</h1>
          <img
            className="container-card-holder_image_1"
            alt="bike"
            src={image}
            name={name}
            onClick={async e => {
              e.preventDefault();
              await setItemsPurchase(operation.add(e));
            }}
          />
        </div>
        <div className="container-card-holder_name-price">
          <h1>{name}</h1>
          <h1>$ {addZeros(price)}</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;

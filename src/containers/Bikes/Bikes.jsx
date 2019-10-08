import React from "react";
import Card from "../../components/card/card";
import Filter from "../../components/filter/filter";
import "./Bikes.scss";
import Helmet from "../Helmet/Helmet";
import Insurance from "../Insurance/Insurance.jsx";

function Bikes({ products }) {
  const bikes = Filter(products.products, "bike");
  return (
    <>
      <div className="container">
        {bikes.map(({ image, name, price }, i) => {
          return (
            <Card image={image} name={name} price={price} alt={name} key={i} />
          );
        })}
      </div>
      <div>
        <Helmet products={products} />
      </div>
      <div>
        <Insurance products={products} />
      </div>
    </>
  );
}

export default Bikes;

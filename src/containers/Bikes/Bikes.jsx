import React from "react";
import Card from "../../components/card/card";
import Filter from "../../components/filter/filter";
import "./Bikes.scss";
import NextPageButton from "../../components/button/button.component";

function Bikes({ products }) {
  const bikes = Filter(products, "bike");
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
        <NextPageButton />
      </div>
    </>
  );
}

export default Bikes;

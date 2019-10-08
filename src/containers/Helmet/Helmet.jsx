import React from "react";
import Card from "../../components/card/card";
import Filter from "../../components/filter/filter";

function Helmet({ products }) {
  const helmets = Filter(products.products, "accessory");
  return (
    <>
      <div className="container">
        {helmets.map(({ image, name, price }, i) => {
          return <Card image={image} name={name} price={price} key={i} />;
        })}
      </div>
    </>
  );
}

export default Helmet;

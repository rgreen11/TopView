import React from "react";
import Card from "../../components/card/card";
import Filter from "../../components/filter/filter";

function Insurance({ products }) {
    const addon = Filter(products.products, "addon");
    return (
        <>
            <div className="container">
                {addon.map(({ image, name, price }, i) => {
                    return <Card image={image} name={name} price={price} key={i} />;
                })}
            </div>
        </>
    );
}

export default Insurance;
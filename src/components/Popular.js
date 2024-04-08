import React from "react";
import data_product from "./Assets/data";
import Item from "./Item";

const Popular = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">POPULAR IN WOMEN</h1>
      <hr className="mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data_product.map((el, i) => (
          <Item
            key={i}
            id={el.id}
            image={el.image}
            name={el.name}
            new_price={el.new_price}
            old_price={el.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;

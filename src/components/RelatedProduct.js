import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import { ShopContext } from "../context/ShopContext";

const RelatedProduct = ({ category }) => {
  const { all_product } = useContext(ShopContext);

  // Filter products by category and get only the first 4 matching products
  const filteredProducts = all_product
    .filter((el) => el.category === category)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      <h1 className="text-3xl text-center font-semibold mb-8">
        RELATED PRODUCTS
      </h1>
      <hr className="mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {filteredProducts.map((el) => (
          <Link to={`/product/${el.id}`} key={el.id}>
            <Item
              id={el.id}
              image={el.image}
              name={el.name}
              new_price={el.new_price}
              old_price={el.old_price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;

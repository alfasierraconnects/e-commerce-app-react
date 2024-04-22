import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import { ShopContext } from "../context/ShopContext";

const NewCollections = () => {
  const { all_product } = useContext(ShopContext);
  return (
    <div id="new-collections" className="container mx-auto px-4  xl:px-20 py-8">
      <h1 className="text-3xl text-center font-semibold mb-4">
        NEW COLLECTIONS
      </h1>
      <hr className="mb-4" />
      <div className="grid grid-cols-4 gap-6">
        {all_product.map(
          (el, i) =>
            i % 3 === 0 &&
            i > 9 &&
            i < 36 && (
              <Link
                to={`/product/${el.id}`}
                key={el.id}
                onClick={window.scrollTo(0, 0)}
              >
                <Item
                  id={el.id}
                  image={el.image}
                  name={el.name}
                  new_price={el.new_price}
                  old_price={el.old_price}
                />
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default NewCollections;

import React from "react";
import { Link } from "react-router-dom";
import new_collection from "../Assets/new_collections";
import Item from "./Item";

const NewCollections = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center font-semibold mb-4">
        NEW COLLECTIONS
      </h1>
      <hr className="mb-4" />
      <div className="grid grid-cols-4 gap-6">
        {new_collection.map((el, i) => (
          <Link to={`/product/${el.id}`} onClick={window.scrollTo(0, 0)}>
            <Item
              key={i}
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

export default NewCollections;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

  const filteredProducts = all_product.filter(
    (product) => product.category === category
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner */}
      <img src={banner} alt={`${category} banner`} />
      <div className="flex justify-between items-center mt-6 mb-4">
        <p className="text-gray-800 text-lg">Showing 12 out of 36</p>
        <select className="px-4 py-2 rounded-full border-2 border-gray-300">
          <option value="default">Sort by</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="name_asc">Name: A to Z</option>
          <option value="name_desc">Name: Z to A</option>
        </select>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <Item
              image={product.image}
              name={product.name}
              new_price={product.new_price}
              old_price={product.old_price}
            />
          </Link>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="flex justify-center mt-12">
        <button className="border-2 bg-gray-300 hover:border-gray-600 hover:bg-white active:bg-gray-300 text-gray-600 font-semibold text-lg px-6 py-1 rounded-full">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;

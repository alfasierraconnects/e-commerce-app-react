import React, { useState } from "react";

const ProductDisplay = ({ product }) => {
  const { name, category, image, new_price, old_price } = product;
  const [size, setSize] = useState("S");

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap">
        {/* Image Options */}
        <div className="flex gap-4 w-full mb-4 md:w-1/2 md:pr-4">
          <div className="flex flex-col gap-2">
            {/* Image Options Here (thumbnails or color options) */}
            <img src={image} alt={name} className="rounded-lg border" />
            <img src={image} alt={name} className="rounded-lg border" />
            <img src={image} alt={name} className="rounded-lg border" />
          </div>
          {/* Main Product Image */}
          <img
            src={image}
            alt={name}
            className="h-[60%] rounded-lg shadow-lg mb-4"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 md:pl-8">
          {/* Product Name */}
          <h1 className="text-3xl font-semibold mb-4">{name}</h1>

          {/* Product Category */}
          <p className="text-lg text-gray-600 mb-4">Category: {category}</p>

          {/* Product Price */}
          <div className="mb-4">
            <span className="text-3xl font-bold text-orange-500">
              &#8377; {new_price}
            </span>
            <span className="text-lg text-gray-500 line-through ml-4">
              &#8377; {old_price}
            </span>
          </div>

          {/* Ratings and Reviews */}
          <div className="flex items-center mb-4">
            <span className="text-yellow-400 text-xl">
              <ion-icon name="star"></ion-icon>
            </span>
            <span className="text-lg font-bold mx-2">4.3</span>
            <span className="text-gray-600">|</span>
            <span className="ml-2">132 Ratings</span>
          </div>

          {/* Size Selector */}
          <div className="mb-4 flex gap-2 items-center">
            <label className="text-lg font-medium mr-2">Size:</label>
            <p
              onClick={() => setSize("S")}
              className={`p-2 px-3 border-2 ${
                size === "S" ? "border-orange-500 bg-orange-200" : ""
              }`}
            >
              S
            </p>
            <p
              onClick={() => setSize("M")}
              className={`p-2 px-3 border-2 ${
                size === "M" ? "border-orange-500 bg-orange-200" : ""
              }`}
            >
              M
            </p>
            <p
              onClick={() => setSize("L")}
              className={`p-2 px-3 border-2 ${
                size === "L" ? "border-orange-500 bg-orange-200" : ""
              }`}
            >
              L
            </p>
            <p
              onClick={() => setSize("XL")}
              className={`p-2 px-3 border-2 ${
                size === "XL" ? "border-orange-500 bg-orange-200" : ""
              }`}
            >
              XL
            </p>
          </div>

          {/* Buy Button */}
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 active:shadow-xl">
            Add To Cart
          </button>

          {/* Product Description */}
          <div className="my-6">
            <h2 className="text-xl font-semibold mb-2">Product Details</h2>
            <p>Taupe woven cargos</p>
            <p>Regular fit</p>
            <p>High-rise</p>
            <p>Length: regular</p>
            <p>Pattern: solid</p>
            <p>Flat-front, with no pleats design</p>
            <p>Feature: plain</p>
            <p>4 pockets</p>
          </div>

          <hr className="my-6" />

          {/* Size & Fit */}
          <div className="my-6">
            <h2 className="text-xl font-semibold mb-2">Size & Fit</h2>
            <p>Regular Fit</p>
            <p>Size worn by the model: M</p>
            <p>Waist: 29.5''</p>
            <p>Hips: 39''</p>
            <p>Height: 5'6"</p>
          </div>

          <hr className="my-6" />

          {/* Material & Care */}
          <div className="my-6">
            <h2 className="text-xl font-semibold mb-2">Material & Care</h2>
            <p>100% Cotton</p>
            <p>Machine Wash</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

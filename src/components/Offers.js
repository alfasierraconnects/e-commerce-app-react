import React from "react";
import exclusive_image from "./Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-fuchsia-300 text-white my-16 mx-32 py-8 px-4 md:px-0 flex flex-col md:flex-row items-center justify-center">
      <div className="text-center md:text-left mb-8 md:mb-0 md:mr-8">
        <h2 className="text-5xl font-semibold leading-tight mb-4">
          Exclusive <br /> Offers for You
        </h2>
        <p className="text-lg mt-4 leading-relaxed uppercase">
          Only on Best Selling Products
        </p>
        <button className="mt-4 text-lg font-semibold rounded-full border-2 hover:border-red-700 hover:text-red-700 active:shadow-2xl py-2 px-10 border-red-900 text-red-900">
          Check Now
        </button>
      </div>
      <img
        src={exclusive_image}
        alt="Exclusive Offer"
        className="h-96 w-auto"
      />
    </div>
  );
};

export default Offers;

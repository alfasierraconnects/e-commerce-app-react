import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-fuchsia-300 text-gray-800 w-[85%] m-auto py-16 p-4 md:px-0 my-16">
      <h2 className="text-4xl font-semibold mb-4 text-center">
        Get Exclusive Offers On Your Email
      </h2>
      <p className="text-lg mb-8 text-center">
        Subscribe to our Newsletter and stay updated
      </p>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Your Email id"
          className="rounded-l-full border border-gray-300 font-semibold px-4 py-2 w-full md:w-2/3"
        />
        <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-8 rounded-full -ml-6">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;

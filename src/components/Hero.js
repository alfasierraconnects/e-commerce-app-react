import React from "react";
import hero_image from "./Assets/hero_image.png";
import arrow from "./Assets/arrow.png";
import hand_icon from "./Assets/hand_icon.png";

const Hero = () => {
  return (
    <div className=" bg-fuchsia-100">
      <div className=" md:w-[85%] m-auto sm:flex">
        {" "}
        {/* Hero Left Section */}
        <div className="flex flex-col justify-center items-start sm:w-1/2 p-8 sm:gap-8">
          <h2 className="font-semibold mb-4 sm:text-2xl">NEW ARRIVALS ONLY</h2>
          <p className="font-semibold text-5xl mb-4 sm:text-8xl">
            <div className="flex items-center gap-2 sm:gap-4">
              new
              <img className="h-6 sm:h-16" src={hand_icon} alt="" />
            </div>
            <div>collections</div>
            <div>for everyone</div>
          </p>

          <div className="mt-4 flex rounded-full bg-red-600 text-white px-10 py-2.5 items-center sm:px-12">
            <p className="text-lg font-medium sm:text-2xl">
              Latest collections
            </p>
            <img
              className="w-3 h-3 sm:w-5 sm:h-5 ml-4 animate-bounce"
              src={arrow}
              alt=""
            />
          </div>
        </div>
        {/* Hero Right Section */}
        <div className="sm:w-1/2">
          <img className="w-[80%] m-auto" src={hero_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white to-fuchsia-300 ">
      <div className=" md:w-[85%] m-auto md:flex justify-between">
        <div className="flex flex-col justify-center items-start w-[40%] p-8 gap-10">
          <h2 className="font-semibold text-3xl">NEW ARRIVALS ONLY</h2>
          <p className="font-semibold mb-8 text-7xl">
            new collections for everyone
          </p>

          <div className="flex rounded-full bg-red-500 hover:bg-red-600 cursor-pointer active:bg-red-500 text-white px-10 py-1 items-center">
            <p className="text-lg font-medium sm:text-2xl">
              Latest collections
            </p>
            <p className="mt-2 ml-4 animate-bounce">
              <ion-icon size="large" name="arrow-forward-outline"></ion-icon>
            </p>
          </div>
        </div>
        <div className="w-1/2 h-[calc(90vh)] relative">
          <div className="w-full h-full bg-fuchsia-900 shadow-xl animate-blob"></div>
          <img
            className="w-[75%] m-auto absolute top-0 left-20"
            src={hero_image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

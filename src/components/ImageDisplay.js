import React from "react";

const ImageDisplay = ({ image }) => {
  return (
    <div>
      <div className="flex gap-4 justify-center items-center">
        <div className="w-[15%] flex-col gap-5">
          <div className="rounded-lg shadow-lg overflow-hidden inline-block">
            <img src={image} alt="product" />
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden inline-block">
            <img src={image} alt="product" />
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden inline-block">
            <img src={image} alt="product" />
          </div>
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden">
          <img src={image} alt="product" />
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;

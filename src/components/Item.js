import React from "react";

const Item = (props) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <div className="h-84 overflow-hidden">
        <img
          className="w-full hover:scale-125 transition duration-700"
          src={props.image}
          alt={props.name}
        />
      </div>

      <div className="p-4 text-lg bg-fuchsia-100">
        <p className=" text-gray-900 font-semibold">{props.name}</p>
        <div className="flex mt-2 items-baseline">
          <p className="text-2xl font-semibold text-fuchsia-950">
            &#8377; {props.new_price}
          </p>
          <p className="text-gray-500 line-through ml-1">
            &#8377; {props.old_price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;

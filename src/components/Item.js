import React from "react";

const Item = (props) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-xl font-semibold">{props.name}</p>
        <div className="flex justify-between mt-2">
          <p className="text-green-500 font-bold">{props.new_price}</p>
          <p className="text-gray-500 line-through">{props.old_price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;

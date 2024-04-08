import React, { useState } from "react";
import logo from "./Assets/logo.png";

const Navbar = () => {
  const menuUnderline = `border-2 border-x-0 border-t-0 border-b-2 border-gray-300 pb-2`;
  const [menu, setMenu] = useState("shop");

  return (
    <div className="bg-gray-900 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-2" />
          <p className="text-xl font-semibold">SHOPPERS</p>
        </div>
        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            <li
              onClick={() => {
                setMenu("shop");
              }}
              className={`hover:text-gray-300 ${
                menu === "shop" ? menuUnderline : ""
              }`}
            >
              Shop
            </li>
            <li
              onClick={() => {
                setMenu("men");
              }}
              className={`hover:text-gray-300 ${
                menu === "men" ? menuUnderline : ""
              }`}
            >
              Men
            </li>
            <li
              onClick={() => {
                setMenu("women");
              }}
              className={`hover:text-gray-300 ${
                menu === "women" ? menuUnderline : ""
              }`}
            >
              Women
            </li>
            <li
              onClick={() => {
                setMenu("kids");
              }}
              className={`hover:text-gray-300 ${
                menu === "kids" ? menuUnderline : ""
              }`}
            >
              Kids
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Login
          </button>
          <div className="flex items-center">
            <ion-icon size="large" name="cart-outline"></ion-icon>
            <p className="ml-2">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

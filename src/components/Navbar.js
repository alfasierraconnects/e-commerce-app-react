import React, { useState } from "react";
import logo from "./Assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuUnderline = `border-2 border-x-0 border-t-0 border-b-2 border-gray-300 pb-2`;
  const [menu, setMenu] = useState("shop");

  return (
    <div className="bg-gray-900 text-white p-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-2" />
          <p className="text-xl font-semibold">SHOPPERS</p>
        </Link>
        <div className="hidden md:flex space-x-4  text-lg">
          <div className="flex space-x-4">
            <Link
              to="/"
              onClick={() => {
                setMenu("shop");
              }}
              className={`hover:text-gray-300 ${
                menu === "shop" ? menuUnderline : ""
              }`}
            >
              Shop
            </Link>
            <Link
              to="/men"
              onClick={() => {
                setMenu("men");
              }}
              className={`hover:text-gray-300 ${
                menu === "men" ? menuUnderline : ""
              }`}
            >
              Men
            </Link>
            <Link
              to="/women"
              onClick={() => {
                setMenu("women");
              }}
              className={`hover:text-gray-300 ${
                menu === "women" ? menuUnderline : ""
              }`}
            >
              Women
            </Link>
            <Link
              to="/kids"
              onClick={() => {
                setMenu("kids");
              }}
              className={`hover:text-gray-300 ${
                menu === "kids" ? menuUnderline : ""
              }`}
            >
              Kids
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="border-2 border-blue-500 hover:border-blue-700 active:bg-blue-500 text-white px-6 py-1 rounded-full"
          >
            Login
          </Link>
          <div className="relative">
            <Link to="/cart">
              <ion-icon size="large" name="cart-outline"></ion-icon>
            </Link>
            <p className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-700 text-white flex justify-center items-center">
              0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

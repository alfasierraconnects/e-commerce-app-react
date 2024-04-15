import React, { useState, useContext } from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const menuUnderline = `border-x-0 border-t-0 border-b-2 border-gray-900 pb-2`;
  const [menu, setMenu] = useState("shop");
  const { totalQuantity } = useContext(ShopContext);

  return (
    <div className="text-gray-900 p-4 font-semibold text-lg">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-2" />
          <p className="text-xl font-semibold">SHOPPERS</p>
        </Link>
        <div className="hidden md:flex space-x-4">
          <div className="flex space-x-4">
            <Link
              to="/"
              onClick={() => {
                setMenu("shop");
              }}
              className={`hover:text-gray-500 ${
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
              className={`hover:text-gray-500 ${
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
              className={`hover:text-gray-500 ${
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
              className={`hover:text-gray-500 ${
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
            className="border-2 border-blue-500 hover:border-blue-800 active:bg-blue-100 text-blue-900 px-6 py-1 rounded-full"
          >
            Login
          </Link>
          <div className="relative pt-2">
            <Link
              to="/cart"
              onClick={() => {
                setMenu("");
              }}
            >
              <ion-icon size="large" name="cart-outline"></ion-icon>
            </Link>
            <p className="absolute top-0 -right-1 h-5 w-5 rounded-full bg-red-700 text-white flex justify-center items-center">
              {totalQuantity}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

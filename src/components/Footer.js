import React from "react";
import footer_logo from "./Assets/logo_big.png";
import instagram_icon from "./Assets/instagram_icon.png";
import whatsapp_icon from "./Assets/whatsapp_icon.png";
import pinterest_icon from "./Assets/pintester_icon.png";

const Footer = () => {
  return (
    <div className="text-gray-800 py-8 px-4 bg-fuchsia-100">
      <div className="flex items-center justify-center mb-6">
        <img src={footer_logo} alt="Shopper" className="w-12 h-12 mr-4" />
        <p className="text-xl font-bold">SHOPPER</p>
      </div>
      <ul className="flex justify-center gap-6 mb-4 font-medium">
        <li className="cursor-pointer hover:font-bold transition">Company</li>
        <li className="cursor-pointer hover:font-bold transition">Products</li>
        <li className="cursor-pointer hover:font-bold transition">Offices</li>
        <li className="cursor-pointer hover:font-bold transition">About</li>
        <li className="cursor-pointer hover:font-bold transition">Contact</li>
      </ul>
      <div className="flex justify-center gap-4 mb-4">
        <img
          className="cursor-pointer hover:scale-125 transition w-6 h-6"
          src={instagram_icon}
          alt="instagram"
        />
        <img
          className="cursor-pointer hover:scale-125 transition w-6 h-6"
          src={pinterest_icon}
          alt="pinterest"
        />
        <img
          className="cursor-pointer hover:scale-125 transition w-6 h-6"
          src={whatsapp_icon}
          alt="whatsapp"
        />
      </div>
      <hr className="border-gray-800 mb-4" />
      <p className="text-center">&copy; 2024 SHOPPER. All rights reserved.</p>
    </div>
  );
};

export default Footer;

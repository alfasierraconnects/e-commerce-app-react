import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Checkout = () => {
  const { subTotal, deliveryFee, total } = useContext(ShopContext);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between my-20">
        <div className="w-1/2">
          <h3 className="font-semibold text-2xl mb-10">Delivery Information</h3>
          <form className="grid grid-cols-2 gap-2 gap-y-4">
            <input
              className="border-2 rounded p-1 font-semibold text-gray-700"
              placeholder="First name"
              type="text"
              minLength="2"
              maxLength="50"
              required
              autoComplete="given-name"
            />
            <input
              className="border-2 rounded p-1 font-semibold text-gray-700"
              placeholder="Last name"
              type="text"
              minLength="2"
              maxLength="50"
              required
              autoComplete="family-name"
            />
            <input
              className="border-2 rounded p-1 font-semibold text-gray-700 col-span-2"
              placeholder="Email address"
              type="email"
              required
              autoComplete="email"
            />
            <input
              className="border-2 rounded p-1 font-semibold text-gray-700 col-span-2"
              placeholder="House No./ Building"
              type="text"
              required
            />
            <input
              className="border-2 rounded p-1 font-semibold text-gray-700 col-span-2"
              placeholder="Street/ Location"
              required
              type="text"
            />
            <input
              className="border-2 rounded p-1 font-semibold text-gray-700 col-span-2"
              placeholder="Landmark"
              type="text"
              required
            />
            <input
              className="border-2 rounded p-1 font-semibold text-gray-700"
              placeholder="City"
              type="text"
              required
            />
            <input
              className="border-2 rounded p-1 font-semibold text-gray-700"
              placeholder="State"
              type="text"
              required
            />
            <input
              className="border-2 rounded p-1 font-semibold text-gray-700"
              placeholder="Pincode"
              type="textfield"
              minLength="6"
              maxLength="6"
              required
            />
            <input
              className="border-2 rounded p-1 font-semibold text-gray-700"
              placeholder="Phone Number"
              type="textfield"
              minLength="10"
              maxLength="15"
              required
              autoComplete="tel"
            />
          </form>
        </div>

        <div className="w-1/4">
          <h3 className="font-semibold text-xl mb-3">Cart Totals</h3>
          <div className="flex justify-between my-1 font-semibold text-gray-600">
            <p>Subtotal</p>
            <p>&#8377; {subTotal}</p>
          </div>
          <hr />
          <div className="flex justify-between my-1 font-semibold text-gray-600">
            <p>Delivery Fee</p>
            <p>&#8377; {deliveryFee}</p>
          </div>
          <hr />
          <div className="flex justify-between font-semibold my-1">
            <p>Total</p>
            <p>&#8377; {total}</p>
          </div>
          <button className="bg-red-500 text-white mt-12 px-8 py-2 rounded-full hover:bg-red-600 active:shadow-lg active:bg-red-500">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

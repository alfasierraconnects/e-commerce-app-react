import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useAuth } from "../Appwrite/AuthContext";
import { DatabaseContext } from "../Appwrite/DatabaseContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const uuid = require("uuid");
  const navigate = useNavigate();
  const { subTotal, deliveryFee, total } = useContext(ShopContext);
  const { user } = useAuth();
  const { cartItems, setCartItems } = useContext(ShopContext);
  const { createNewOrder } = useContext(DatabaseContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    houseNo: "",
    street: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const document = {
      userId: user.$id,
      orderId: uuid.v4(),
      "purchased-items": JSON.stringify(cartItems),
      address: JSON.stringify(formData),
      "price-breakup": JSON.stringify({
        subTotal: subTotal,
        deliveryFee: deliveryFee,
        total: total,
      }),
      transactionId: uuid.v4(),
      "date-purchased": new Date().toISOString(),
    };
    console.log(document);
    createNewOrder(document);
    setCartItems([]);
    setTimeout(() => {
      navigate("/orders");
    }, 3000);
  };

  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  return (
    <div className="container mx-auto">
      <ToastContainer />
      <div className="flex justify-between my-20">
        <div className="w-1/2">
          <h3 className="font-semibold text-2xl mb-10">Delivery Information</h3>
          <form
            className="grid grid-cols-2 gap-2 gap-y-4"
            onSubmit={handleSubmit}
          >
            <input
              className="border-2 rounded p-1 font-semibold text-gray-700"
              placeholder="First name"
              type="text"
              name="firstName"
              minLength="2"
              maxLength="50"
              required
              autoComplete="given-name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              className="border-2 rounded p-1 font-semibold text-gray-700"
              placeholder="Last name"
              type="text"
              name="lastName"
              minLength="2"
              maxLength="50"
              required
              autoComplete="family-name"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              className="border-2 rounded p-1 font-semibold text-gray-700 col-span-2"
              placeholder="Email address"
              type="email"
              name="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="border-2 rounded p-1 font-semibold text-gray-700 col-span-2"
              placeholder="House No./ Building"
              type="text"
              name="houseNo"
              required
              value={formData.houseNo}
              onChange={handleChange}
            />
            <input
              className="border-2 rounded p-1 font-semibold text-gray-700 col-span-2"
              placeholder="Street/ Location"
              type="text"
              name="street"
              required
              value={formData.street}
              onChange={handleChange}
            />
            <input
              className="border-2 rounded p-1 font-semibold text-gray-700 col-span-2"
              placeholder="Landmark"
              type="text"
              name="landmark"
              required
              value={formData.landmark}
              onChange={handleChange}
            />
            <input
              className="border-2 rounded p-1 font-semibold text-gray-700"
              placeholder="City"
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
            />
            <input
              className="border-2 rounded p-1 font-semibold text-gray-700"
              placeholder="State"
              type="text"
              name="state"
              required
              value={formData.state}
              onChange={handleChange}
            />
            <input
              className="border-2 rounded p-1 font-semibold text-gray-700"
              placeholder="Pincode"
              type="text"
              name="pincode"
              minLength="6"
              maxLength="6"
              required
              value={formData.pincode}
              onChange={handleChange}
            />
            <input
              className="border-2 rounded p-1 font-semibold text-gray-700"
              placeholder="Phone Number"
              type="text"
              name="phoneNumber"
              minLength="10"
              maxLength="15"
              required
              autoComplete="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <button
              type="submit"
              className=" bg-red-500 text-white mt-4 px-8 py-2 rounded-full hover:bg-red-600 active:shadow-lg active:bg-red-500 disabled:hover:bg-red-500 disabled:active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!isFormValid()}
            >
              PROCEED TO PAYMENT
            </button>
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
        </div>
      </div>
    </div>
  );
};

export default Checkout;

import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    all_product,
    removeFromCart,
    subTotal,
    deliveryFee,
    total,
  } = useContext(ShopContext);

  return (
    <div className="container mx-auto p-4 my-20">
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-12 gap-2 mb-4 font-semibold text-gray-600">
          <p className="col-span-2">Item</p>
          <p className="col-span-3">Title</p>
          <p className="col-span-1">Size</p>
          <p className="col-span-2">Price</p>
          <p className="col-span-1">Quantity</p>
          <p className="col-span-2">Total</p>
          <p className="col-span-1">Remove</p>
        </div>
        <hr className="border-b-2" />
        {/* {console.log(cartItems)} */}
        {cartItems.map((item, i) => {
          const product = all_product.find(
            (el) => el.id === item.ItemId && item.quantity > 0
          );
          // console.log(product);
          if (product) {
            return (
              <div key={i}>
                <div className="grid grid-cols-12 gap-2 m-2 items-center font-semibold">
                  <img
                    className="h-10 w-auto col-span-2 object-contain"
                    src={product.image}
                    alt={product.name}
                  />
                  <p className="col-span-3">{product.name}</p>
                  <p className="col-span-1">{item.size}</p>
                  <p className="col-span-2">&#8377; {product.new_price}</p>
                  <p className="col-span-1">{item.quantity}</p>
                  <p className="col-span-2">
                    &#8377; {product.new_price * item.quantity}
                  </p>
                  <button
                    className="col-span-1 text-start text-xl"
                    onClick={() => removeFromCart(item.ItemId, item.size)}
                  >
                    <ion-icon name="close"></ion-icon>
                  </button>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        {/* CartTotals */}
        <div className="my-20 flex justify-between">
          <div className="w-3/5">
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
            <button
              onClick={() => navigate("/checkout")}
              className=" bg-red-500 text-white mt-4 px-8 py-2 rounded-full hover:bg-red-600 active:shadow-lg active:bg-red-500 disabled:hover:bg-red-500 disabled:active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={total === 0}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div>
            <p className="font-semibold text-gray-600 mb-4">
              If you have a promo code, Enter it here
            </p>
            <div className="flex">
              <input
                className="bg-gray-200 font-semibold text-gray-600 rounded-l-full p-2 focus:outline-none"
                type="text"
                placeholder="promo code"
              />
              <button className="bg-black -ml-3 font-semibold text-gray-100 hover:text-white rounded-full py-2 px-8 hover:bg-gray-900 active:bg-black">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

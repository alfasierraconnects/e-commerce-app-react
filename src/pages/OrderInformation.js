import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useLocation } from "react-router-dom";

const OrderInformation = () => {
  const { all_product } = useContext(ShopContext);
  const location = useLocation();
  const { formattedOrder } = location.state || {};

  if (!formattedOrder) {
    return <div>Order not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div>
        <h3 className="text-2xl font-semibold mb-2">Order Information</h3>
        <p>
          <strong>Order ID:</strong> {formattedOrder.orderId}
        </p>
        <p>
          <strong>Date Purchased:</strong>
          {new Date(formattedOrder.datePurchased).toLocaleDateString()}
        </p>
        <p>
          <strong>Transaction ID:</strong> {formattedOrder.transactionId}
        </p>
      </div>
      <div>
        <p>
          <strong>Purchased Items:</strong>{" "}
        </p>
        {formattedOrder.purchasedItems.map((item, i) => {
          const product = all_product.find(
            (el) => el.id === item.ItemId && item.quantity > 0
          );
          if (product) {
            return (
              <div key={i}>
                <div className="grid grid-cols-11 gap-2 m-2 items-center font-semibold">
                  <img
                    className="h-10 w-auto col-span-2 object-contain"
                    src={product.image}
                    alt={product.name}
                  />
                  <p className="col-span-3">{product.name}</p>
                  <p className="col-span-1">{item.size}</p>
                  <p className="col-span-1">{item.quantity}</p>
                  <p className="col-span-2">&#8377; {product.new_price}</p>
                  <p className="col-span-2">
                    &#8377; {product.new_price * item.quantity}
                  </p>
                </div>
              </div>
            );
          }
          return null;
        })}

        <p>
          <strong>Price Breakup:</strong>
        </p>
        <div className="list-disc pl-5">
          <p>Subtotal: &#8377; {formattedOrder.priceBreakup.subTotal}</p>
          <p>Delivery Fee: &#8377; {formattedOrder.priceBreakup.deliveryFee}</p>
          <strong>Total: &#8377; {formattedOrder.priceBreakup.total}</strong>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Shipping Address</h3>
        <p>
          <strong>Name:</strong>{" "}
          {`${formattedOrder.address.firstName} ${formattedOrder.address.lastName}`}
        </p>
        <p>
          <strong>Email:</strong> {formattedOrder.address.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {formattedOrder.address.phoneNumber}
        </p>
        <p>
          <strong>Address:</strong>{" "}
          {`${formattedOrder.address.houseNo}, ${formattedOrder.address.street}, ${formattedOrder.address.landmark}, ${formattedOrder.address.city}, ${formattedOrder.address.state}, ${formattedOrder.address.pincode}`}
        </p>
      </div>
      <div className="flex gap-5 mt-5">
        <button className="border-orange-300 hover:border-orange-500 rounded-full py-1 px-4 border-2">
          Track Order
        </button>
        <button className="border-orange-300 hover:border-orange-500 rounded-full py-1 px-4 border-2">
          Cancel Order
        </button>
      </div>
    </div>
  );
};

export default OrderInformation;

import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { DatabaseContext } from "../Appwrite/DatabaseContext";

const OrderInformation = ({ formattedOrder }) => {
  const { all_product } = useContext(ShopContext);
  const { deleteOrder } = useContext(DatabaseContext);
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <div>
      {/* {console.log(formattedOrder.documentId)} */}
      {moreInfo === false && (
        <div
          className="flex flex-col md:flex-row gap-1 md:gap-3 items-start md:justify-between p-6 shadow-md border md:items-center rounded-md mb-6"
          key={formattedOrder.orderId}
        >
          <p>
            <strong>Order Id:</strong> {formattedOrder.orderId}
          </p>
          <p>
            <strong>Ordered On:</strong> {formattedOrder.datePurchased}
          </p>
          <p className="whitespace-nowrap">
            <strong>
              &#8377; {formattedOrder.priceBreakup.total.toFixed(2)}
            </strong>
          </p>
          <button
            onClick={() => setMoreInfo(true)}
            className="whitespace-nowrap border-orange-400 hover:border-orange-600 active:bg-orange-200 rounded-full py-1 px-4 border-2 self-center"
          >
            More Info
          </button>
        </div>
      )}
      {moreInfo === true && (
        <div className="container mx-auto p-6 border rounded-md shadow-md mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Order Information</h3>
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
                    <div className="grid grid-cols-11 gap-2 m-2 items-center font-medium">
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
              <p>
                Delivery Fee: &#8377; {formattedOrder.priceBreakup.deliveryFee}
              </p>
              <strong>
                Total: &#8377; {formattedOrder.priceBreakup.total}
              </strong>
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
              <strong>Phone Number:</strong>{" "}
              {formattedOrder.address.phoneNumber}
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {`${formattedOrder.address.houseNo}, ${formattedOrder.address.street}, ${formattedOrder.address.landmark}, ${formattedOrder.address.city}, ${formattedOrder.address.state}, ${formattedOrder.address.pincode}`}
            </p>
          </div>
          <div className="flex justify-evenly mt-4">
            <button className="whitespace-nowrap border-orange-400 hover:border-orange-600 active:bg-orange-200 rounded-full py-1 px-4 border-2 self-center">
              Track Order
            </button>
            <button
              onClick={() =>
                deleteOrder(formattedOrder.documentId, formattedOrder.userId)
              }
              className="whitespace-nowrap border-orange-400 hover:border-orange-600 active:bg-orange-200 rounded-full py-1 px-4 border-2 self-center"
            >
              Cancel Order
            </button>
            <button
              onClick={() => setMoreInfo(false)}
              className="whitespace-nowrap border-orange-400 hover:border-orange-600 active:bg-orange-200 rounded-full py-1 px-4 border-2 self-center"
            >
              Less Info
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderInformation;

import React, { useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { DatabaseContext } from "../Appwrite/DatabaseContext";
import { useAuth } from "../Appwrite/AuthContext";

const Orders = () => {
  const navigate = useNavigate();
  const { fetchOrders, orders } = useContext(DatabaseContext);
  const { user } = useAuth();
  const userId = user ? user.$id : "nouser";
  console.log(orders);

  useEffect(() => {
    fetchOrders(userId);
    // eslint-disable-next-line
  }, []);

  const formattedOrders = useMemo(
    () =>
      orders.map((order) => ({
        orderId: order.orderId,
        purchasedItems: JSON.parse(order["purchased-items"]),
        address: JSON.parse(order.address),
        priceBreakup: JSON.parse(order["price-breakup"]),
        datePurchased: new Date(order["date-purchased"]).toLocaleDateString(),
        transactionId: order.transactionId,
      })),
    [orders]
  );

  return (
    <div className="container my-10 mx-auto">
      <h1 className="font-semibold text-2xl mb-10">Your Orders</h1>
      {formattedOrders.map((formattedOrder) => (
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
            onClick={() =>
              navigate(`/orderinfo`, {
                state: { formattedOrder },
              })
            }
            className="whitespace-nowrap border-orange-400 hover:border-orange-600 active:bg-orange-200 rounded-full py-1 px-4 border-2 self-center"
          >
            More Info
          </button>
        </div>
      ))}
    </div>
  );
};

export default Orders;

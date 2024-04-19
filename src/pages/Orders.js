import React, { useContext, useEffect, useMemo } from "react";
import { DatabaseContext } from "../Appwrite/DatabaseContext";
import { useAuth } from "../Appwrite/AuthContext";
import OrderInformation from "../components/OrderInformation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Orders = () => {
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
        userId: order.userId,
        documentId: order.$id,
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
      <ToastContainer />
      {formattedOrders.map((formattedOrder) => (
        <OrderInformation
          key={formattedOrder.orderId}
          formattedOrder={formattedOrder}
        />
      ))}
    </div>
  );
};

export default Orders;

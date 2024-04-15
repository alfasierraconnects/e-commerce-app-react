import React, { useState, createContext, useEffect } from "react";
import all_product from "../Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newSubTotal = 0;
    let newDeliveryFee = 0;

    cartItems.forEach((el) => {
      const product = all_product.find((item) => item.id === el.ItemId);
      if (product) {
        newSubTotal += product.new_price * el.quantity;
        newDeliveryFee += el.quantity * 30;
      }
    });

    const newTotal = newSubTotal + newDeliveryFee;

    setSubTotal(newSubTotal);
    setDeliveryFee(newDeliveryFee);
    setTotal(newTotal);
  }, [cartItems]);

  useEffect(() => {
    const newTotalQuantity = cartItems.reduce(
      (acc, el) => acc + el.quantity,
      0
    );

    setTotalQuantity(newTotalQuantity);
  }, [cartItems]);

  const addToCart = (itemId, size) => {
    const item = cartItems.find(
      (el) => el.ItemId === itemId && el.size === size
    );

    if (!item) {
      setCartItems((prev) => [
        ...prev,
        { ItemId: itemId, quantity: 1, size: size },
      ]);
    } else {
      if (item.size === size) {
        const updatedItems = cartItems.map((el) =>
          el.ItemId === itemId && el.size === size
            ? { ...el, quantity: el.quantity + 1 }
            : el
        );
        setCartItems(updatedItems);
      }
    }
  };

  const removeFromCart = (itemId, size) => {
    const item = cartItems.find(
      (el) => el.ItemId === itemId && el.size === size && el.quantity > 0
    );
    if (item) {
      const updatedItems = cartItems.map((el) =>
        el.ItemId === itemId && el.size === size
          ? { ...el, quantity: el.quantity - 1 }
          : el
      );
      setCartItems(updatedItems);
    }
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    totalQuantity,
    subTotal,
    deliveryFee,
    total,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

import React, { useState, createContext, useEffect, useContext } from "react";
import { DatabaseContext } from "../Appwrite/DatabaseContext";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [total, setTotal] = useState(0);
  const { all_product } = useContext(DatabaseContext);

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
  }, [cartItems, all_product]);

  useEffect(() => {
    const newTotalQuantity = cartItems.reduce(
      (acc, el) => acc + el.quantity,
      0
    );

    setTotalQuantity(newTotalQuantity);
  }, [cartItems]);

  const addToCart = (itemId, size, quantity = 1) => {
    const itemIndex = cartItems.findIndex(
      (el) => el.ItemId === itemId && el.size === size
    );

    if (itemIndex === -1) {
      setCartItems((prev) => [
        ...prev,
        { ItemId: itemId, quantity: quantity, size: size },
      ]);
    } else {
      const updatedItems = [...cartItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        quantity: updatedItems[itemIndex].quantity + quantity,
      };
      setCartItems(updatedItems);
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
    setCartItems,
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

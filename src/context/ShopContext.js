import React, { useState, createContext } from "react";
import all_product from "../Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

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

  const contextValue = { all_product, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

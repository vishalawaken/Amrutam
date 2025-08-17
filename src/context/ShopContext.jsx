import { createContext, useState } from "react";

const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const value = { addToCart, cartItems };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export { ShopContext };
export default ShopContextProvider;

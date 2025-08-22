import { createContext, useState } from "react";
import expertData from "../../Expert_Info.json";
import ingredientsData from "../../Ingredients_info.json";

const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [experts, setExperts] = useState(expertData.experts);
  const [ingredients, setIngredients] = useState(ingredientsData.ingredients);

  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      delete newCart[productId];
      return newCart;
    });
  };

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        quantity: newQuantity,
      },
    }));
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  };

  const getCartTotal = () => {
    return Object.values(cartItems).reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };

  const clearCart = () => {
    setCartItems({});
  };

  const addToCart = (productId, productData, quantity = 1) => {
    setCartItems((prev) => {
      if (prev[productId]) {
        return {
          ...prev,
          [productId]: {
            ...prev[productId],
            quantity: prev[productId].quantity + quantity,
          },
        };
      }
      return {
        ...prev,
        [productId]: {
          product: productData,
          quantity: quantity,
        },
      };
    });
  };

  const value = {
    addToCart,
    cartItems,
    experts,
    ingredients,
    removeFromCart,
    updateCartQuantity,
    getCartCount,
    getCartTotal,
    clearCart,
    setExperts,
    setIngredients,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export { ShopContext };
export default ShopContextProvider;

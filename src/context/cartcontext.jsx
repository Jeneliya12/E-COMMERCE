import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [isCartMessageVisible, setIsCartMessageVisible] = useState(false);

  const handleCartClick = () => {
    setIsCartMessageVisible(true);
    if (isCartEmpty) {
      alert("Your cart is empty"); // You can replace this with a modal or other UI element
    }
  };

  const addItemToCart = () => {
    setIsCartEmpty(false);
  };

  const hideCartMessage = () => {
    setIsCartMessageVisible(false);
  };

  return (
    <CartContext.Provider
      value={{
        isCartEmpty,
        isCartMessageVisible,
        handleCartClick,
        hideCartMessage,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

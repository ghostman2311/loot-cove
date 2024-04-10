import { createContext, useContext, useState } from "react";
import { games } from "../data/api";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  const addToCart = (id) => {
    const game = games.find((game) => game.id === +id);
    context.setCart([...context.cart, game]);
  };

  const removeFromCart = (id) => {
    const updatedGames = context.cart.filter((game) => game.id !== id);
    context.setCart([...updatedGames]);
  };
  if (context === undefined) {
    throw new Error(`useCart must be used within a CartProvider`);
  }
  return {
    cart: context.cart,
    addToCart,
    removeFromCart,
  };
};

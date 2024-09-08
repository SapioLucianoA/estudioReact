import { createContext } from "react";
import { useCartFunctions } from "../Hooks/UseCartFunctions";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const { state, addTocart, removeProduct, clearCart } = useCartFunctions();

  return (
    <CartContext.Provider value={{
      cart: state,
      addTocart,
      clearCart,
      removeProduct
    }}>
      {children}
    </CartContext.Provider>
  );
}
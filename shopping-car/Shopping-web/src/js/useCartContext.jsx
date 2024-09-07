import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  

  const addTocart = (producto) => { 

    const isProductoExist = (producto) => {
      return cart.findIndex(item => item.id === producto.id);
    };

    const index = isProductoExist(producto);

    if (index >= 0) {
      const newCart = structuredClone(cart);
      newCart[index].quantity += 1;
      setCart(newCart);
    } else {
      setCart(previewState =>([
        ...previewState, {
          ...producto,
          quantity: 1
        }
      ]));
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeProduct = (product) => {
    setCart(previewState => (
      previewState.filter(item => item.id !== product.id)
    ));
  };

  return (
    <CartContext.Provider value={{
        cart,
        addTocart,
        clearCart,
        removeProduct
      }} >
      {children}
    </CartContext.Provider>
  );
}

import { createContext, useState } from "react";




export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addTocart = (producto) => { 
    const isproductoexist = cart.findIndex(item=> item.id = producto.id)

    //formas diferenets de ahcer esto

    if(isproductoexist(producto) >= 0){
      const newCart = structuredClone(cart)
      newCart[isproductoexist].quantity += 1;
      setCart(newCart)
    }

    setCart(previewState =>([
      ...previewState, {
        ...producto,
        quantity: 1
      }
    ]))
  }
  const clearCart = () => {
    setCart([]);
  }
  return (
    <CartProvider value={{
        cart,
        addTocart,
        clearCart,
      }} >
      {children}
    </CartProvider>
  )
}
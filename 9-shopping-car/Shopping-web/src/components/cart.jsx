import { useId } from "react"
import '../css/cart.css'
import { useCart } from "../Hooks/UseCartContext";
import { TengoAlgoEnELCarrito } from "./productos";


function CartItems({ image, price, title, quantity, addTocart, removeProduct, clearCart }) {
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <strong>${price}</strong>
      </div>
      <footer>
        <button onClick={removeProduct}>❌</button>
        <small>cantidad: {quantity}</small>
        <button onClick={addTocart}>➕</button>
      </footer>
    </li>
    
  );
}

export function Cart(  ) {
  const cartCheckboxId = useId();
  const { addTocart, removeProduct, cart, clearCart } = useCart();
  


  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        🛒
      </label>
      <input id={cartCheckboxId} type='checkbox' className="input-cart" />

      <aside className='cart'>
        <ul className="ul-cart">
          {
            cart.map(producto => (
              <CartItems 
                key={producto.id} 
                addTocart={() => addTocart(producto)} 
                removeProduct={() => removeProduct(producto)} 
                {...producto} 
              />
            ))
          }
          
          <TengoAlgoEnELCarrito cart={ cart } clearCart={clearCart} />
          
          
        </ul>

        
      </aside>
    </>
  );
}
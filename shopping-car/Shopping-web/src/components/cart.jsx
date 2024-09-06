import { useId } from "react"
import '../css/cart.css'


export function Cart(){
const cartCheckboxId = useId();
return(
  <>
  <label className='cart-button' htmlFor={cartCheckboxId}>
  🛒
</label>
<input id={cartCheckboxId} type='checkbox' className="input-cart" />


<aside className='cart'>
  <img src='https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg' alt='iPhone' />
  <div>
    <strong>iPhone</strong> - $1499
  </div>
  <footer>
    <button>❌</button>
    <small>cantidad: 1</small>
    <button>➕</button>
  </footer>
</aside>
  </>
)

}
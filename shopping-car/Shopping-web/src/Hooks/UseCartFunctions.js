import { useReducer } from "react";
import { initialCartState, actionsCartState } from "../js/ActionsAndStateCart";
import { CartReducer } from "../js/CartReducer";


export function useCartFunctions(){

  const [state, dispatch] = useReducer(CartReducer, initialCartState);


  const addTocart = producto => dispatch({
    type: actionsCartState.ADD_TO_CART,
    payload: producto
  });

  const removeProduct = producto => dispatch({
    type: actionsCartState.REMOVE_FROM_CART,
    payload: producto
  });

  const clearCart = () => dispatch({ type:actionsCartState.CLEAR_CART})



  return { state, addTocart, removeProduct, clearCart }
}
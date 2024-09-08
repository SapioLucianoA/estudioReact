import { useContext } from "react";
import { CartContext } from "../js/useCartContext";

export const useCart= () =>{
  const context  = useContext(CartContext);

  if(context  === undefined){
    throw new console.error('tou cant use context  Cart in this component');
    
  };
  
  return context ;

}
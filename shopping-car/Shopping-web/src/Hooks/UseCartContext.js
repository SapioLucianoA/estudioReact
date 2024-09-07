import { useContext } from "react";
import { CartContext } from "../js/useCartContext";

export const useCart= () =>{
  const constext = useContext(CartContext);

  if(constext === undefined){
    throw new console.error('tou cant use constext Cart in this component');
    
  };
  
  return constext;

}
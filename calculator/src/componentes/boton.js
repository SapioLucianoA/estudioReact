import React from "react";
import "../Css/boton.css"

function Boton(props){

  const esOperador = valor => {
    return  isNaN(valor) && (valor !== ".") && (valor !== "=");
  }; 
  return(
    <div className={`button-container ${esOperador(props.children) ? "operador" : " "}`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}
   >
      {props.children}
    </div> 
  );
}

export default Boton;
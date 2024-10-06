import React from "react";
import "../Css/button.css"

function Boton({text, isButtonClick, clickFunction}){
    return(
        <button className={ isButtonClick ? "boton-click" : "boton-restart" }
            onClick={clickFunction}>
            {text}
        </button>
            
);}

export default Boton;
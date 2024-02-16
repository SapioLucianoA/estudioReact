import React from "react";
import "../Css/botonClear.css"

const BotonCLear = (props) => (
    <div className="boton-clear"
    onClick={props.manejarClear}
    >
        {props.children}
    </div>
);
export default BotonCLear;
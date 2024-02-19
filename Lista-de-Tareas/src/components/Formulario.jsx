import "../Css/Formulario.css"
import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';



function Formulario(props){

  const [input, setInput] = useState("");
  const manejarFormulario = e =>{
    setInput(e.target.value)
  }

  const maneajarEnvio = e =>{
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva)
    
  }
  return(
    <form
      onSubmit={maneajarEnvio}
      className="tarea-formulario" >
      <input onChange={manejarFormulario}
      type="text" 
      className="tarea-input"
      placeholder="Escriba su siguiente tarea"
      name="texto"
      />
      <button className="tarea-formulario-boton"> <BsFillPlusCircleFill className="icon-plus" /> </button>
    </form>
  )
}


export default Formulario;
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../Css/Tarea.css"
import { BsBackspaceReverse } from "react-icons/bs";


function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
 return(
  <div className={ completada ? 'div-tarea completada' : 'div-tarea'  }>
    <div onClick={()=> completarTarea(id) } className="div-tarea-texto">
      { texto }
    </div>
    <div className="tarea-icons-tarea">
      <BsBackspaceReverse onClick={() => eliminarTarea(id)} className="tarea-icon"/>
    </div>
  </div>
 )
}

export  default Tarea;
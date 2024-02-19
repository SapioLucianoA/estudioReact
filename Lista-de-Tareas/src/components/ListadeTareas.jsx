import { useState,  useEffect } from "react";
import Formulario from "./Formulario";
import Tarea from "./Tarea";
import "../Css/ListaDeTareas.css";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]); // Corrección aquí
  useEffect(() => {
    const storedTareas = localStorage.getItem('tareas');
    if (storedTareas) {
      setTareas(JSON.parse(storedTareas));
    }
  }, []);
  const agregarTarea = (tarea) => {
    

    if(tarea.texto.trim()){
      console.log("Tarea agregada");
      tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas]
      setTareas(tareasActualizadas)
      localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
    }
    
    

  };
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea =>  tarea.id !== id);
    setTareas(tareasActualizadas)
    localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(
      tarea => {
        if(tarea.id === id){
          return {
            ...tarea,
            completada: !tarea.completada
            
            
          };
        }
        return tarea
      }
    )
    setTareas(tareasActualizadas);
    localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
  }
  




  return (
    <>
      <Formulario 
        onSubmit={agregarTarea}
      />
      <div className="div-listas-de-tareas">  
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id} // Asegúrate de proporcionar una clave única
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
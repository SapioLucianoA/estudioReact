import { useEffect } from "react"
import { Link } from "./Links"

export default function Search( { routeParams }  ){

  useEffect( ()=>{
    document.title = `Has Buscado  ${ routeParams.query }`
  } ,[])
  return (
    <>
    <div>
      <h2>Hello from Search </h2>

        <p>ahora con el routePArams en parámetro de nuestro componente podemos interactuar con el query y hacer cosas como cambiar el titulo o colocarlo en nuestro componente</p>
          
        <p> El QUery es: { routeParams.query }  </p>


      </div>
      <Link to={'/'}>Go Home</Link>
    </>
  )
}
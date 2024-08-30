// colocandolo en ternario sin neceidad de componentes extras
import fetching from './Mokups/fetching.json'
import './App.css'

function App() {

  const movies = fetching.Search;

  const hasMovies = movies.length > 0;

  //usando DOM para obetenr el input valor
  // const handleSubmit = (event)=>{
  //   event.preventDefault();
  //   //la constante debe tener el nombre del input.name
  //   const {input} = Object.fromEntries(
  //     new window.FormData(event.target)
  //   )
  //   console.log(input)
  // }

  return (
    <>
    <header>
      <h1>Prueba tecnica movies are scaries</h1>
      <form action="" className='header-div-buscador'>
      <input type="text" placeholder='Marvel, Trinity, DCU' name='Movies'/>
        <label htmlFor="Movies">Buscar Peliculas</label>
        <button type='submit'>🔎</button>
      </form>
    </header>
    <main>
      {
        hasMovies? 
        (
          movies.map (
            movie =>(
              <li key={movie.imdbID}>
                <h2>{movie.Title}</h2>
                <h3>{movie.Type}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title + " " + movie.Type} />
              </li>
            )
          )
        )
        : (
          <p>No se encontraron peliculas</p>
        )
      }
    </main>
    </>
  )
}

export default App

import { useMovies } from "../Hooks/Movies";

export function Movies({ movies }) {
  return (
    <ul className="movies">
      {movies.map(movie => (
        <li key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={"image of " + movie.title} />
        </li>
      ))}
    </ul>
  );
}

export function NoMovies(){
  return (
    <p>No se encontraron peliculas</p>
  )
}

export const HaveMovies = ({ movies }) => {

  const hasMovies = movies != undefined;

  return (
    hasMovies ? <Movies movies={movies} /> : <NoMovies />
  );
}

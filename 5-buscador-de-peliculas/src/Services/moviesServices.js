const API_Key = `https://www.omdbapi.com/?apikey=c376c776&s=`;

export const FetchingMovies = async (input) => {
  if (!input) {
    return [];
  }

  try {
    const res = await fetch(API_Key + input);
    const data = await res.json();
    if (data.Response === "False") {
      return [];
    }
    const movies = data.Search;
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year
    }));
  } catch (error) {
    throw new Error('Hubo un error al buscar las películas, por favor inténtalo en un momento');
  }
}
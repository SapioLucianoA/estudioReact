import { FetchingMovies } from '../Services/moviesServices'
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

export function useMovies({ input, sort }) {
  const [newMovies, setNewMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const oldSerach = useRef(input);

  const getMovies = useCallback( async ({input}) => {
      if(input == oldSerach.current)return
      if(input == '')return
      try {
        console.log("render Movies")
        oldSerach.current = input
        setLoading(true)
        setError(null)
        const movies = await FetchingMovies(input);
        setNewMovies(movies);
      }
      catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
  , [])   

  const sortedMovies = useMemo(()=>{
    return sort ?[... newMovies].sort((a,b)=> a.title.localeCompare(b.tittle)) : newMovies;
  }, [sort, newMovies])
  return { movies: sortedMovies, getMovies, loading, error };
  
}

  export function useValidSearch() {
    const [input, setInput] = useState('');
    const [invalidSearch, setInvalidSearch] = useState(null);
    const isFirstSearch = useRef(true);

    useEffect(() => {
      if (isFirstSearch.current) {
        isFirstSearch.current = input === '';
        return;
      }
      if (input === '') {
        setInvalidSearch('No puedes buscar una pelicula con una busqueda vacia');
        return;
      }
      if (input.match(/^\d+$/)) {
        setInvalidSearch('No puedes buscar la pelicula con solo numeros');
        return;
      }
      if (input.length < 2) {
        setInvalidSearch('Las busquedas deben ser con al menos dos caracteres');
        return;
      }
      setInvalidSearch(null);
    }, [input]);

    return { input, setInput, invalidSearch };
  }
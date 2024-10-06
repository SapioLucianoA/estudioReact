import {  useMovies, useValidSearch } from './Hooks/Movies';
// import { Movies, NoMovies, HaveMovies } from './components/Movies';
import {  HaveMovies } from './components/Movies';
import './App.css'
import { useState, useCallback } from 'react';
import debounce from 'just-debounce-it';
// import { useEffect, useState } from 'react';




function App() {
  
  const {input, setInput, invalidSearch} = useValidSearch();
  const [sort, setSort] = useState(false)

  const {movies, getMovies, loading} = useMovies({input, sort})

  const timeOutMoviesSearch = useCallback(debounce(input =>{
    getMovies(input)
  }, 300), [getMovies]);

  const handleSubmit = (event)=>{
    event.preventDefault();
    getMovies({input})
    console.log(movies)
  }
  const handleChecked = ()=>{
    setSort(!sort)

  }
  const changeInput = (event)=>{
    const newSearch = event.target.value;
    setInput(newSearch);
    timeOutMoviesSearch({input: newSearch});
  }
  return (
    <>
    <header>
      <h1 style={{ textAlign: 'center' }}>Prueba tecnica movies are scaries</h1>
      <form action="" className='header-div-buscador' onSubmit={handleSubmit}>
      <input type="text" onChange={changeInput} value={input} placeholder='Marvel, Trinity, DCU' name='input'/>
        <label htmlFor="moviesSearchInput">Buscar Peliculas</label>
        <div style={{display: "flex", alignContent:'center' }}>
        <input type="checkbox" name="sort" id="sort" onClick={handleChecked} />
        <label htmlFor="sort">ordenar peliculas</label>
        </div>
        <button type='submit'>🔎</button>
      </form>
      {
        invalidSearch && <p style={{color: 'red',
          textAlign: 'center'
        }} >{invalidSearch}</p>
      }
    </header>
    <main>
      {
        loading ? <p>Cargando...</p> :  <HaveMovies movies={movies} ></HaveMovies>
      }
      
    </main>
    </>
  )
}

export default App

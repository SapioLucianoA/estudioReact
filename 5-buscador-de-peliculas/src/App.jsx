import {  useMovies, useValidSearch } from './Hooks/Movies';
// import { Movies, NoMovies, HaveMovies } from './components/Movies';
import {  HaveMovies } from './components/Movies';
import './App.css'
// import { useEffect, useState } from 'react';




function App() {

  const {input, setInput, invalidSearch} = useValidSearch();

  const {movies, getMovies, loading, error} = useMovies({input})

  const handleSubmit = (event)=>{
    event.preventDefault();
    getMovies()
    console.log(movies)
  }

  const changeInput = (event)=>{
    setInput(event.target.value)
  }


  return (
    <>
    <header>
      <h1 style={{ textAlign: 'center' }}>Prueba tecnica movies are scaries</h1>
      <form action="" className='header-div-buscador' onSubmit={handleSubmit}>
      <input type="text" onChange={changeInput} value={input} placeholder='Marvel, Trinity, DCU' name='input'/>
        <label htmlFor="moviesSearchInput">Buscar Peliculas</label>
        <button type='submit'>🔎</button>
      </form>
      {
        invalidSearch && <p style={{color: 'red',
          textAlign: 'center'
        }} >{error}</p>
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

import { useId } from 'react'
import { useFilterProducts } from '../Hooks/Hooks';

export function Filters() {
  const { filters, setFilters, categories } = useFilterProducts();

  const filterPriceID = useId();
  const filterCategoryID = useId();


  const handleChangeMaxPrice = (event) => {

    setFilters(previusState => ({
      ...previusState, priceMax: event.target.value
    }))
  }
  const handleChangeCategory = (event) => {
    setFilters(previusState => ({
      ...previusState, category: event.target.value
    }))
  }


  return (
    <section>

      <div>
      <label htmlFor={filterCategoryID}>Categorias</label>
      <select name={filterCategoryID} id={filterCategoryID} aria-placeholder="categorias" onChange={handleChangeCategory} >
        <option id='all' value={'all'} > Todas Las categorias </option>
        {
          categories.map((category, index)=>(
            <option key={index} value={category} >{ category }</option>
          ))
        }
        </select>
      </div>
      <div>
        <label htmlFor={filterPriceID}>Price MAX:</label>
        <input type="range" min={0} max={1000} name={filterPriceID} id={filterPriceID} aria-placeholder="Precio Maximo" value={filters.priceMax} onChange={handleChangeMaxPrice} />
        <p>${filters.priceMax}</p>
      </div>
    </section>
  )
} 
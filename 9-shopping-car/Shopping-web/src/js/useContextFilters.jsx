import { createContext,  useState } from "react";

export const FiltersContext = createContext();

export function FilterProvider({ children }) {

  const [ filters, setFilters ] = useState({
    category: 'all',
    priceMax: 5000,
  })


  return (
    <FiltersContext.Provider value={{
    filters, setFilters
    }}
    >
      {children}

    </FiltersContext.Provider>
  )

}
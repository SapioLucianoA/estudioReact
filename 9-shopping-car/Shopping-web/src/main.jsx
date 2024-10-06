import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { FilterProvider } from './js/useContextFilters.jsx'

createRoot(document.getElementById('root')).render(
  <FilterProvider>
    <App />
  </FilterProvider>
)

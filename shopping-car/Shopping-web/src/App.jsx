import { HasProduct } from './components/productos';
import { useFilterProducts } from './Hooks/Hooks';
import { Header } from './components/header';
import { Cart } from './components/cart';



function App() {
  const { arrayDeProductosFiltrados } = useFilterProducts()
  
  return (
    <>
      <Header/>
      <Cart/>
      <main>
        <h3>Productos</h3>
        <div  >
          
          <HasProduct products={ arrayDeProductosFiltrados } ></HasProduct>

        </div>
      </main>
    </>
  )
}

export default App

import { HasProduct } from './components/productos';
import { useFilterProducts } from './Hooks/Hooks';
import { Header } from './components/header';
import { Cart } from './components/cart';
import { CartProvider } from './js/useCartContext';



function App() {
  const { arrayDeProductosFiltrados } = useFilterProducts()
  
  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <main>
        <h3>Productos</h3>
        <div  >
          
          <HasProduct products={ arrayDeProductosFiltrados } ></HasProduct>

        </div>
      </main>
    </CartProvider>
  )
}

export default App

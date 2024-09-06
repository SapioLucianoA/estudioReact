import Inventory  from '../mockup/mockup';
import { useContext} from 'react';
import { FiltersContext } from '../js/useContextFilters.jsx'

export function useProducts(){
  const products = Inventory;

  const MappedProducts = products.map(products=>({
    id: products.id,
    image: products.image,
    title: products.title,
    description: products.description,
    price: products.price,
    category: products.category
  }))

  return {products: MappedProducts}
}

export function useFilterProducts(){

  const { products: MappedProducts } = useProducts();
  
  const { filters, setFilters}  = useContext(FiltersContext)
  
  const productosFiltrados = ({MappedProducts}) =>{

  return MappedProducts.filter(producto => {
    return (
      (producto.category === filters.category || filters.category === 'all') &&
      producto.price <= filters.priceMax
    );
  });
};

  const arrayDeProductosFiltrados = productosFiltrados({MappedProducts});

  return { arrayDeProductosFiltrados, setFilters, filters }
}
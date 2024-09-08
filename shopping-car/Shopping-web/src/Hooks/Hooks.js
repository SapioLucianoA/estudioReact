import { FetchingProducts, FetchingCategories } from '../services/ProductsServices.js';
import { useContext, useEffect, useState} from 'react';
import { FiltersContext } from '../js/useContextFilters.jsx'


export function useProducts(){
  const [products, setProducts] = useState([]);
  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productos = await FetchingProducts();
        setProducts(productos);
      } catch (error) {
        throw new Error(error)
      }
    };
    const fetchCategories = async () => {
      try {
        const categories = await FetchingCategories();
        setCategories(categories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const MappedProducts = products.map(products=>({
    id: products.id,
    image: products.image,
    title: products.title,
    description: products.description,
    price: products.price,
    category: products.category
  }))

  return {products: MappedProducts, categories}
}

export function useFilterProducts(){
  
  const { products: MappedProducts, categories } = useProducts();
  
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

  return { arrayDeProductosFiltrados, setFilters, filters, categories }
}
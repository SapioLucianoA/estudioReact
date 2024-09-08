const PRODUCTS_API_KEY = `https://fakestoreapi.com/products`
const PRODUCTS_CATEGORY_API_KEY = `https://fakestoreapi.com/products/categories`

export const FetchingProducts = async() =>{
  try{
    const res = await fetch(PRODUCTS_API_KEY);
    const data = await res.json();

    const productos = data;
    return productos;
  }
  catch{
    throw new Error('Fetching Error')
  }

}
export const FetchingCategories = async() =>{
  try{
    const res = await fetch(PRODUCTS_CATEGORY_API_KEY);
    const data = await res.json();
    return data;
  }
  catch{
      throw new Error('Fetching Error')
    }
}

import { useProducts } from "../Hooks/Hooks";

export function Products ({products}){
  return(
    <ul className='div-products'>
          {products.map(product =>(
            <li key={product.id} >
              <img src={product.image} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <strong>${ product.price }</strong>
                <button>🛒➕</button>
              </div>
            </li>
          ))}

        </ul>
  )
}
export function NoProducts(){
  return(
    <h3>No se Encontraron productos</h3>
  )
}

export function HasProduct({products}){
  const hasProducts = products && products.length > 0;
  return(
    
    hasProducts ? <Products products={products}  /> : <NoProducts/>
    
  )
}
import { useCart } from "../Hooks/UseCartContext";

export function Products({ products }) {
  const { addTocart, removeProduct, cart } = useCart();

  const hasProducto = (producto) => {
    return cart.findIndex(item => item.id === producto.id) >= 0;
  };

  return (
    <ul className='div-products'>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <div>
            <h3>{product.title}</h3>
            <strong>${product.price}</strong>

            {
              hasProducto(product) ? 
              <button style={{ border: 'red solid 0.01rem' }} onClick={() => removeProduct(product)}> 🛒❌ </button> : 
              <button onClick={() => addTocart(product)}> 🛒➕ </button>
            }
          </div>
        </li>
      ))}
    </ul>
  );
}

export function NoProducts() {
  return (
    <h3>No se Encontraron productos</h3>
  );
}

export function HasProduct({ products }) {
  const hasProducts = products && products.length > 0;
  return (
    hasProducts ? <Products products={products} /> : <NoProducts />
  );
}

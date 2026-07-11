// Exercise 02 — Solution

const products = [
  { id: 1, name: "Classic White Tee", price: "£29.99", description: "100% organic cotton. Fits true to size." },
  { id: 2, name: "Black Hoodie", price: "£49.99", description: "Heavyweight fleece. Oversized fit." },
  { id: 3, name: "Cargo Trousers", price: "£59.99", description: "6 pockets. Relaxed fit." },
]

function ProductCard({ name, price, description }) {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p className="price">{price}</p>
      <p className="description">{description}</p>
      <button>Add to Cart</button>
    </div>
  )
}

function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  )
}

export default ProductGrid

// Exercise 04 — Solution
import { useState, useEffect } from 'react'

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
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products?limit=3')
      const data = await res.json()
      setProducts(data)
      setLoading(false)
    }
    fetchProducts()
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          name={product.title}
          price={`$${product.price}`}
          description={product.description}
        />
      ))}
    </div>
  )
}

export default ProductGrid

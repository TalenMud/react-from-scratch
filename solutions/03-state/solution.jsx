// Exercise 03 — Solution
import { useState } from 'react'

const products = [
  { id: 1, name: "Classic White Tee", price: "£29.99", description: "100% organic cotton. Fits true to size." },
  { id: 2, name: "Black Hoodie", price: "£49.99", description: "Heavyweight fleece. Oversized fit." },
  { id: 3, name: "Cargo Trousers", price: "£59.99", description: "6 pockets. Relaxed fit." },
]

function ProductCard({ name, price, description, onQuantityChange }) {
  const [quantity, setQuantity] = useState(0)

  const increment = () => {
    const newQty = quantity + 1
    setQuantity(newQty)
    onQuantityChange(newQty - quantity) // pass the delta up
  }

  const decrement = () => {
    if (quantity === 0) return
    const newQty = quantity - 1
    setQuantity(newQty)
    onQuantityChange(newQty - quantity) // pass the delta up
  }

  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p className="price">{price}</p>
      <p className="description">{description}</p>
      <button onClick={increment}>Add to Cart ({quantity})</button>
      <button onClick={decrement}>Remove</button>
    </div>
  )
}

function ProductGrid() {
  const [total, setTotal] = useState(0)

  const handleQuantityChange = (delta) => {
    setTotal(prev => prev + delta)
  }

  return (
    <div>
      <p>Cart total: {total} items</p>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductGrid

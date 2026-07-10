// Exercise 03 — State with useState
import { useState } from 'react'

const products = [
  { id: 1, name: "Classic White Tee", price: "£29.99", description: "100% organic cotton. Fits true to size." },
  { id: 2, name: "Black Hoodie", price: "£49.99", description: "Heavyweight fleece. Oversized fit." },
  { id: 3, name: "Cargo Trousers", price: "£59.99", description: "6 pockets. Relaxed fit." },
]

// TODO: Add quantity state to ProductCard
// TODO: Make "Add to Cart" increment quantity
// TODO: Show quantity on the button
// TODO: Add a "Remove" button that decrements (min 0)
function ProductCard({ name, price, description, onQuantityChange }) {
  // TODO: add useState here

  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p className="price">{price}</p>
      <p className="description">{description}</p>
      {/* TODO: update button to show quantity and handle click */}
      <button>Add to Cart</button>
      {/* TODO: add remove button */}
    </div>
  )
}

// TODO: Add total items count at the top
function ProductGrid() {
  return (
    <div>
      {/* TODO: show total items here */}
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
    </div>
  )
}

export default ProductGrid

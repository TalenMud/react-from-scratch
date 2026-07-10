// Exercise 04 — useEffect
import { useState, useEffect } from 'react'

// TODO: remove this hardcoded data — we're fetching it from an API instead
const products = [
  { id: 1, name: "Classic White Tee", price: "£29.99", description: "100% organic cotton." },
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
  // TODO: add products state (start as empty array)
  // TODO: add loading state (start as true)

  // TODO: use useEffect to fetch from:
  // https://fakestoreapi.com/products?limit=3
  // and set your products state when the data arrives

  // TODO: show "Loading..." while loading is true

  return (
    <div className="product-grid">
      {/* TODO: map over products state instead of hardcoded array */}
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

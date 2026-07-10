// Exercise 02 — Props

const products = [
  { id: 1, name: "Classic White Tee", price: "£29.99", description: "100% organic cotton. Fits true to size." },
  { id: 2, name: "Black Hoodie", price: "£49.99", description: "Heavyweight fleece. Oversized fit." },
  { id: 3, name: "Cargo Trousers", price: "£59.99", description: "6 pockets. Relaxed fit." },
]

// TODO: Update ProductCard to accept name, price, and description as props
// instead of hardcoded values
function ProductCard() {
  return (
    <div className="product-card">
      {/* TODO: replace hardcoded values with props */}
      <h2>Classic White Tee</h2>
      <p className="price">£29.99</p>
      <p className="description">100% organic cotton.</p>
      <button>Add to Cart</button>
    </div>
  )
}

// TODO: Create a ProductGrid component that maps over the products array
// and renders a ProductCard for each one
function ProductGrid() {
  return (
    <div className="product-grid">
      {/* TODO: map over products and render ProductCard for each */}
    </div>
  )
}

export default ProductGrid

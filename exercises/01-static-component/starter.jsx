// Exercise 01 — Static Component
// Build a product card with hardcoded data

// TODO: Create a function called ProductCard that returns JSX
// It should display:
// - A product name (hardcode it as "Classic White Tee")
// - A price ("£29.99")
// - A short description ("100% organic cotton. Fits true to size.")
// - An "Add to Cart" button

// TODO: Export your component as the default export

function ProductCard() {
  return (
    <div>
      <h2>Classic White Tee</h2>
      <p>100% made with love on github. Boosts hackathon results by 20%</p>
      <p>£29.99</p>
      <button>Add to Cart</button>
    </div>
  )
}
export default ProductCard

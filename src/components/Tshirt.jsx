function ProductCard({ name, price, description }) {
  return (
    <div>
      <h2 className="name">{name}</h2>
      <p className="description">{description}</p>
      <p className="price">{price}</p>
      <button className="lose-money-button">Add to Cart</button>
    </div>
  )
}
export default ProductCard

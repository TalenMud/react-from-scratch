import ProductCard from "./Tshirt"

function ProductGrid({ products}) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
      ></ProductCard>))}
    </div>


  )
} export default ProductGrid

import ProductCard from "./components/Tshirt.jsx";
import ProductGrid from "./components/ProductGrid"
const products = [
  { id: 1, name: "Classic White Tee", price: "£29.99", description: "100% organic cotton. Fits true to size." },
  { id: 2, name: "Black Hoodie", price: "£49.99", description: "Heavyweight fleece. Oversized fit." },
  { id: 3, name: "Cargo Trousers", price: "£59.99", description: "6 pockets. Relaxed fit." },
]

function App() {
  return (
    <div className="tshirt">
      <ProductGrid products={products}></ProductGrid>
    </div>
  );


}

export default App;

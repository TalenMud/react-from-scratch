# Exercise 02 — Props

## What are props?

Right now your ProductCard only shows one product. Props let you pass data **into** a component so it can be reused for different products.

```jsx
function ProductCard({ name, price }) {
  return <h2>{name} — {price}</h2>
}

// Used like this:
<ProductCard name="Classic White Tee" price="£29.99" />
<ProductCard name="Black Hoodie" price="£49.99" />
```

Props are just the arguments to your function.

## Your task

1. Update your `ProductCard` to accept `name`, `price`, and `description` as props instead of hardcoded values
2. Render **three different products** using the same component

Use this product data:
```js
const products = [
  { id: 1, name: "Classic White Tee", price: "£29.99", description: "100% organic cotton. Fits true to size." },
  { id: 2, name: "Black Hoodie", price: "£49.99", description: "Heavyweight fleece. Oversized fit." },
  { id: 3, name: "Cargo Trousers", price: "£59.99", description: "6 pockets. Relaxed fit." },
]
```

## Things to know

- Use `{}` to embed JavaScript expressions inside JSX
- When rendering a list, each item needs a unique `key` prop: `<ProductCard key={product.id} .../>`
- Props flow **down** — parent passes to child, never the other way

## Done?

Check your solution against `solutions/02-props/solution.jsx`

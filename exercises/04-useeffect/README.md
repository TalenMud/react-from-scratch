# Exercise 04 — useEffect

## What is useEffect?

`useEffect` lets you synchronise your component with something **outside** of React — an API, a timer, an event listener.

The rule of thumb: if it isn't "take props/state and return JSX", it's a side effect.

```jsx
import { useState, useEffect } from 'react'

function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://api.example.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []) // empty array = run once on mount

  return <div>{products.map(p => <p key={p.id}>{p.name}</p>)}</div>
}
```

## Your task

Instead of hardcoding the products array, fetch them from a real public API:

**API endpoint:** `https://fakestoreapi.com/products?limit=3`

1. Remove the hardcoded `products` array
2. Add a `products` state starting as an empty array `[]`
3. Use `useEffect` to fetch from the API on mount and set your state
4. Show a "Loading..." message while the data is being fetched
5. Show the products once they've loaded

## Things to know

- The dependency array `[]` means "run once when the component mounts"
- Always handle the loading state — data doesn't arrive instantly
- `async/await` inside useEffect needs a wrapper function (you can't make the callback itself async directly)

```jsx
useEffect(() => {
  const fetchData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setProducts(data)
  }
  fetchData()
}, [])
```

## Mini challenge

Once you've got the basic fetch working, try one of these:

1. Add error handling — what if the fetch fails?
2. Add a "Refresh" button that re-fetches the products
3. Add a search input that filters products by title

## Done?

Check your solution against `solutions/04-useeffect/solution.jsx`

# Exercise 03 — State with useState

## What is state?

Props are data passed **in** to a component. State is data that lives **inside** a component and can change over time.

When state changes, React re-renders the component automatically.

```jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0) // initial value is 0

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  )
}
```

`useState` returns two things: the current value, and a function to update it.

## Your task

Add a cart to your product grid:

1. Add a `quantity` state to `ProductCard` starting at `0`
2. Make the "Add to Cart" button increment the quantity
3. Show the quantity on the button — e.g. "Add to Cart (2)"
4. Add a "Remove" button that decrements the quantity (but don't go below 0)
5. Show a cart total at the top of `ProductGrid` — count of total items added across all cards

**Hint for the total:** You'll need to lift state up to `ProductGrid` — think about where state needs to live so multiple components can share it.

## Things to know

- Never mutate state directly — always use the setter function
- `useState(0)` sets the initial value to `0`
- State updates trigger a re-render — React handles this for you
- If two components need the same state, move it to their closest common parent

## Done?

Check your solution against `solutions/03-state/solution.jsx`

# Exercise 01 — Static Component

## What is a component?

A React component is just a JavaScript function that returns JSX — a syntax that looks like HTML but lives inside your JS file.

```jsx
function MyComponent() {
  return <h1>Hello world</h1>
}
```

That's it. No magic.

## Your task

Build a static product card for a clothing item. It should show:
- Product name
- Price
- A short description
- An "Add to Cart" button (doesn't need to do anything yet)

The data is hardcoded for now — we'll make it dynamic in the next exercise.

## Things to know

- JSX uses `className` instead of `class` (class is a reserved word in JS)
- Every component must return a **single root element** — wrap siblings in a `<div>` or `<>`
- Self-closing tags need a slash: `<img />` not `<img>`

## Starter

Open `starter.jsx` and fill in the TODOs.

## Done?

Check your solution against `solutions/01-static-component/solution.jsx`

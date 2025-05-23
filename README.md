# React Props

React Props are like function arguments in JavaScript and attributes in HTML.
To send props into a component, use the same syntax as HTML attributes:

`ExampleGet your own React.js Server`
Add a "brand" attribute to the Car element:

```bash
const myElement = <Car brand="Ford" />;
```

The component receives the argument as a props object:

Example
Use the brand attribute in the component:

```bash
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}
```

---

# ⏱ React useEffect Timer Example

This project demonstrates how to use the `useEffect` hook in React to handle side effects—specifically using a timer to count renders.

## 🚀 Overview

The `useEffect` hook allows you to perform side effects in your components, such as:

- Fetching data
- Directly updating the DOM
- Using timers

This example uses `setTimeout()` to increment a counter 1 second after the initial render.

## 📦 Code Example

```jsx
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- Only run on initial render

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Timer />);
```

# Extensions i am currently using for Vs code

- Path Intellisense : Christian Kohler
- Path Autocomplete : Mihai Vilcu
- Material Icon Theme : Philipp Kief
- JS JSX Snippets : Nai You Ran
- Auto Rename Tag : Jun Han
- colorize : kamikillerto
- ES7 React/Redux/GraphQL/React-Native snippets : rodrigovallades
- Prettier - Code formatter

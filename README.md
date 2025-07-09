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


# 📘 React `useEffect()` Hook & Cleanup Function

This README explains the `useEffect` hook and the optional **cleanup function** in React.js. It's perfect for developers learning or revising React concepts related to side effects and lifecycle behavior in functional components.

---

## 🔹 What is `useEffect()`?

- `useEffect()` is a React Hook that lets you perform **side effects** in functional components.
- Side effects are operations that interact with systems outside of React:
  
  - Fetching data from APIs
  - Subscribing to services (e.g., Firebase, WebSocket)
  - Setting timers or intervals
  - Working with the DOM directly
  - Adding or removing event listeners
  

  In React, a **side effect** is any operation that affects something outside the component or React’s rendering process. For example, fetching data from an API, updating the DOM manually, setting up timers, or adding event listeners are side effects because they interact with the external world or browser APIs. For instance, calling fetch("https://api.example.com/data") inside a component to load data is a side effect, since it doesn't just compute a value—it reaches outside React and can have delayed or unpredictable results. React's useEffect hook is specifically designed to handle such operations safely within functional components.

---

## 🧠 Basic Syntax

```js
useEffect(() => {
  // Your side effect code here

  return () => {
    // Optional cleanup code
  };
}, [dependencies]);
```
## 🧹 What is the Cleanup Function?
The cleanup function is a function returned from the useEffect() hook.

- It is used to clean up or undo side effects when:

- The component is unmounted

- The effect is about to re-run (if dependencies change)

This prevents issues like memory leaks, unnecessary timers, and duplicate event listeners.

```js
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Timer running...');
  }, 1000);

  return () => {
    clearInterval(timer);
    console.log('Timer stopped.');
  };
}, []);
```

```js
useEffect(() => {
  const handleResize = () => {
    console.log('Window resized');
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

```



# ⏱ React useEffect Timer Example

This project demonstrates how to use the `useEffect` hook in React to handle side effects—specifically using a timer to count renders.

## 🚀 Overview

The `useEffect` hook allows you to perform side effects in your components, such as:

- Fetching data
- Directly updating the DOM
- Using timers

This example uses `setTimeout()` to increment a counter 1 second after the initial render.

## 📦 Code Example js


```js
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

- - - 

# 📘 React Notes: Passing Data from Parent to Child Component

In React, **data is passed from a parent component to a child component using props**. This is the most common way for components to communicate.

---

## ✅ Basic Concept

- **Props** (short for "properties") are used to send data.
- The child component receives props as a parameter.
- Props are **read-only** in the child component.

---

## 🔨 Example

### 1. Parent Component

```jsx
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const message = "Hello from Parent!";
  const user = { name: 'Alice', age: 25 };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={message} user={user} />
    </div>
  );
}

export default ParentComponent;
```
```
import React from 'react';

function ChildComponent({ message, user }) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{message}</p>
      <p>User: {user.name}, Age: {user.age}</p>
    </div>
  );
}

export default ChildComponent;

```
# 📘 JavaScript: `fetch`, `async`, and `await`

This document provides a beginner-friendly explanation of how `fetch`, `async`, and `await` work in JavaScript, including how to use them, why they're important, and the difference between them.

---

## 🔹 What is `fetch()`?

- `fetch()` is a built-in JavaScript function used to **make HTTP requests** (like GET, POST).
- It returns a **Promise** that resolves to a `Response` object.
- Commonly used to call APIs and retrieve or send data from/to a server.

### ✅ Basic Example:

```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### ✅ `async`
- The `async` keyword is used to **declare a function** that **returns a Promise**.
- It **allows the use of `await`** inside that function.

### ✅ `await`
- The `await` keyword is used **inside an `async` function**.
- It **pauses the function execution** until the awaited Promise is resolved.
- It makes asynchronous code look more like **synchronous code**, which **improves readability** and simplifies logic flow.
```js
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
```


### how to install json db server 

 npm install -g json-server
 {
  "users": []
}

 json-server --watch db.json --port 3001

 ### how to check which user.email and user.name you are currently in Github 

git config --global user.email
git config --global user.name

git config --global user.email yournew@email.com
git config --global user.name yournewgoodname



# Extensions i am currently using for Vs code

- Path Intellisense : Christian Kohler
- Path Autocomplete : Mihai Vilcu
- Material Icon Theme : Philipp Kief
- JS JSX Snippets : Nai You Ran
- Auto Rename Tag : Jun Han
- colorize : kamikillerto
- ES7 React/Redux/GraphQL/React-Native snippets : rodrigovallades
- Prettier - Code formatter




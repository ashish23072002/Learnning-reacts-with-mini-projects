## Memoization:

useMemo uses memoization, a technique where the result of a function call is cached based on 
its input. If the input (dependencies) remain the same, the cached result is
returned instead of recomputing it. 


### Use Cases:

- Expensive Calculations:
 Optimizing calculations that take a significant amount of time or resources. 

- Referential Equality Checks:
Avoiding unnecessary re-renders when comparing objects or arrays, which are checked by reference in 
JavaScript. 

- Preventing Redundant API Calls:
Memoizing API call results to avoid making the same request multiple times


## The useMemo hook 

- useMemo in React is utilized to optimize performance by memoizing (caching) the result of an expensive calculation. This prevents unnecessary re-computation of values on every render, especially when the inputs to the calculation have not changed.


## Differences Between useMemo and useCallback
Let's summarize the differences between the two hooks:

useMemo caches the return value of a function. useCallback caches the function definition itself.

useMemo is used when you have an expensive calculation you want to avoid on every render.

useCallback is used to cache a function to avoid re-creating it on every re-render.

useMemo makes sure that an expensive function should only be called for state values dependent on it.

useCallback creates stable functions that maintain the same reference between renders. This avoids unnecessary rendering of child components.

And here are a few more things to remember. Use these hooks only if you want to memoize expensive calculations or prevent unnecessary re-renders. Do not use useMemo and useCallback everywhere.

For regular functions, these hooks don't make much difference. Overusing them will make your code unreadable. Instead, you can figure out other ways to improve app performance.
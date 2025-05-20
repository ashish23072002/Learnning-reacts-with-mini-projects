# React Props
React Props are like function arguments in JavaScript and attributes in HTML.
To send props into a component, use the same syntax as HTML attributes:

```ExampleGet your own React.js Server```
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

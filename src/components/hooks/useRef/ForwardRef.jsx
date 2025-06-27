import { useId, useRef } from "react";
import "./index.css";
import { forwardRef } from "react";
export const ForwardRef = () => {
  const username = useRef(null);
  const password = useRef(null);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <BeforeReact19Input label="username" ref={username} />
        <br />
        <BeforeReact19Input label="password" ref={password} />
        <br />

        <button>submit</button>
      </form>
    </>
  );
};
// i need to create BeforeReact19Input component
const BeforeReact19Input = forwardRef((props, ref) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{props.label}</label>
      <input type="text" ref={ref} />
    </>
  );
});

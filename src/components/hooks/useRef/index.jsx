import { useRef } from "react";
import "./index.css";
export const UseRef = () => {
  // one way to use ref(Refrence we can use - like we are taking refrence of username,password here)
//   const username = document.getElementById("username");
//   const password = document.getElementById("password");

  const username = useRef(null);
  const password = useRef(null);

//   console.log(username)

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(username.value + " " + password.value);
        console.log(username.current.value , password.current.value);

  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" id="username" ref={username} />
        <br />
        <input type="text" id="password" ref={password}/>
        <br />
        <button>submit</button>
      </form>
    </>
  );
};

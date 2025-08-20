import { useRef, useState } from "react";

export const PracticesessionII = () => {
  // Refs for inputs
  const userRef = useRef(null);
  const emailRef = useRef(null);

  const [val, setVal] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();

    // Get values from refs
    const newEntry = {
      user: userRef.current.value,
      email: emailRef.current.value,
    };

    // Save data in state
    setVal([...val, newEntry]);

    userRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <input type="text" name="user" placeholder="Enter user" ref={userRef} />
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          ref={emailRef}
        />

        <button type="submit">Submit</button>
      </form>

      <div>
        {val.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              margin: "5px",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <p>
              <strong>User:</strong> {item.user}
            </p>
            <p>
              <strong>Email:</strong> {item.email}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

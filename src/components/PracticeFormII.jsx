import { useState } from "react";

export const PracticesessionII = () => {
  const [input, setInput] = useState({ user: "", email: "" });
  const [val, setVal] = useState([]);
  const formSubmit = (e) => {
    e.preventDefault();
    setVal([...val, input]);
    setInput({ user: "", email: "" });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="user"
          value={input.user}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={input.email}
          onChange={handleChange}
        />

        <button type="submit" onClick={formSubmit}>
          Submit
        </button>
      </form>
      {input.user + " " + input.email}
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

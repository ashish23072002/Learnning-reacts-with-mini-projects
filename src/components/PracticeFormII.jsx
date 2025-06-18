import { useState } from "react";

export const PracticesessionII = () => {
  const [input, setInput] = useState("");
  const [values, setValues] = useState([]); // State to store an array of values

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    if (input.trim()) {
      // Check if the input is not empty
      setValues([...values, input]); // Add the new input value to the array
      setInput(""); // Clear the input field after submission
    }
  };

  return (
    <>
      <form onClick={handleSubmit}>
        <label></label>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
      <ul>{values.map((value,index)=>(
        <li key={index}>
            {value}
        </li>
      ))}</ul>
    </>
  );
};

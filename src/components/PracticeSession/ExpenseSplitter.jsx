import { useState } from "react";

export const ExpenseSplitter = () => {
  const [formatdata, setFormatData] = useState({ name: "", amount: "" });
  const [entries, setEntries] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormatData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => { 
    if (formatdata.name === "") return;
    e.preventDefault();
    setEntries((prev) => [
      ...prev,
      { ...formatdata, amount: parseFloat(formatdata.amount) },
    ]);
    setFormatData({ name: "", amount: "" });
  };
  const total = entries.reduce((sum, e) => sum + e.amount, 0);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formatdata.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          value={formatdata.amount}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {formatdata.name} {formatdata.amount}
      <ul>
        {entries.map((values, index) => (
          <li key={index}>
            {values.name} -- RS{values.amount}
          </li>
        ))}
      </ul>
      {entries.length > 0 && (
        <div>
          <h4>Total: ₹{total.toFixed(2)}</h4>
        </div>
      )}
    </>
  );
};

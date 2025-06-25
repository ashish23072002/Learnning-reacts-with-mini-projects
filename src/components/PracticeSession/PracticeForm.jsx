import React, { useState, useEffect } from "react";

export const Pracform= () =>{
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [users, setUsers] = useState([]);

  // Fetch users from JSON server
  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.name || ! formData.email) return;
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      setUsers(prev => [...prev, data]);
      setFormData({ name: "", email: "" });
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />{" "}
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />{" "}
        <button type="submit">Submit</button>
      </form>

      <h3>User List:</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}



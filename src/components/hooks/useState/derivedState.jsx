import { useState } from "react";

// without use state
// const users = [
//   { name: "Ashish", age: 25 },
//   { name: "Bipin", age: 35 },
//   { name: "Anna", age: 22 },
//   { name: "Suraj", age: 15 },
//   { name: "Anuj", age: 5 },
// ];

export const DerivedState = () => {
  // with use state method
  const [users, setUsers] = useState([
    { name: "Ashish", age: 25 },
    { name: "Bipin", age: 35 },
    { name: "Anna", age: 22 },
    { name: "Suraj", age: 15 },
    { name: "Anuj", age: 5 },
  ]);
  return (
    <>
      <div className="container text-center">
        <hr />
        <h1>User List</h1>
        <ul>
          {users.map((curElement, index) => {
            return (
              <>
                <li key={index}>
                  {curElement.name} - {curElement.age} Years old
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

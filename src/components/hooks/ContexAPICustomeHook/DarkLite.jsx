import { createContext, useContext, useState } from "react";

export const TheamContex = createContext();

// create a provider Component
export const TheamProvider = ({ children }) => {
  const [them, setThem] = useState("dark");
  const handleToggleTheam = () => {
    return setThem((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <TheamContex.Provider value={{ them, handleToggleTheam }}>
      {children}
    </TheamContex.Provider>
  );
};

// creating a component

export const DarkLight = () => {
  const {them,handleToggleTheam}=  useContext(TheamContex)
  return (
    <div className={`p-4 d-flex flex-column align-items-center justify-content-center min-vh-100  ${them==='dark'?"bg-dark":"bg-light"}`}>
      <h1 className={`${them==='dark'?"text-white":"text-primary"}`}>Dark light mode</h1>
      <p className={`${them==='dark'?"text-white":"text-danger"}`}>Hello my react version 19 Fans</p>
      <button onClick={handleToggleTheam}>Swith to {them==="dark"?"Dark":"Light"}</button>
      {/* is you are crating function inside the componet , you have to menation that this function now have to be inside the Provider */}
    </div>
  );
};

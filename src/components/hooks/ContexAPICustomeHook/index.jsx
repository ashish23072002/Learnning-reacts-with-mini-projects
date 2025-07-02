import { createContext, use } from "react";
//step one
export const BioContex = createContext();

//step two
export const BioProvider = ({ children }) => {
  const name = "Ashish Bisht";
  const age = 30;
  return (
    <BioContex.Provider value={{ name, age }}>{children}</BioContex.Provider>
  );
};


// creating a custome Hook

export const useBioContext = ()=>{
  const context=use(BioContex);
  return context;
}

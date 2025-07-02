import { use, useContext } from "react";
import { BioContex, useBioContext } from ".";

export const Home = () => {
  // using custome hooks
  // const { name, age } = useBioContext();


  // using use hook 
  // const { name, age } = useContext(BioContex);  //previous
    const { name, age } = use(BioContex); // Latest with use hook 
  return (
    <h1>
      hello from home , My name is <span style={{ color: "red" }}>{name}</span>{" "}
      <br />
      And my Age is <span style={{ color: "red" }}>{age}</span>
    </h1>
  );
};


//The use() hook directly handles promises within components,
//  eliminating the need for useEffect and useState boilerplate 
// for managing loading states and errors in asynchronous operations like data fetching.
// It integrates seamlessly with Suspense and Error Boundaries, 
// providing a more streamlined way to handle asynchronous data and potential errors.

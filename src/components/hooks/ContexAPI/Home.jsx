import { useContext } from "react";
import { BioContex } from ".";

export const Home = () => {
  const {name,age} = useContext(BioContex);

  return (
    <h1>
      hello from home , My name is <span style={{ color: "red" }}>{name}</span> <br/>
      And my Age is <span style={{color:"red"}}>{age}</span>
    </h1>
  );
};

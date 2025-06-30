import { useContext } from "react";
import { BioContex } from ".";

export const About = () => {
  // without useiong custome Hoooks
  const { name, age } = useContext(BioContex);

  return (
    <h1>
      I am values form
      <span style={{ color: "red" }}>(About Page) </span>
      {name} & my Age is <span style={{ color: "red" }}>{age}</span>
    </h1>
  );
};

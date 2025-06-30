import { useBioContext } from ".";

export const Home = () => {
  // using custome hooks
  const { name, age } = useBioContext();

  return (
    <h1>
      hello from home , My name is <span style={{ color: "red" }}>{name}</span>{" "}
      <br />
      And my Age is <span style={{ color: "red" }}>{age}</span>
    </h1>
  );
};

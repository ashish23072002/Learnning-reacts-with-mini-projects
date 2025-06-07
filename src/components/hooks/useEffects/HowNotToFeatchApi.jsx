import { useState } from "react";

export const NotToFeatch = () => {
  // const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const [apiData, setApiData] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
        // setApiData(data)   // we can use direcly like this as wheen teh api fetach it will change the value of apiData out use state and it will rerender the component againand agin heance the feacchApi is outside heance it will continiously run it again and again 
    })
    .catch((error) => console.log(error));

  return (
    <div className="container effect-container">
      <ul>{apiData.map((curData) => {return(
        <li key={curData.id}>
            {curData.title}
        </li>
      )})}</ul>
    </div>
  );
};

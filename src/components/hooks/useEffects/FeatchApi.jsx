import { useEffect, useState } from "react";

export const FeatchApi = () => {
  // const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const [apiData, setApiData] = useState([]);


  useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
        setApiData(data)  
    })
    .catch((error) => console.log(error));
  },[])

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

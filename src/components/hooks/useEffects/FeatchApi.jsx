import { useEffect, useState } from "react";
import "./Pokemon.css"

export const FeatchApi = () => {
  const API = "https://pokeapi.co/api/v2/pokemon/squirtle";
  const [pokemon, setPokemon] = useState(null);

  const featchPokemon = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    featchPokemon();
  }, []);

  console.log(pokemon);

  if (pokemon) {
    return (
      <section className="container">
        <header>
          <h1> Lets Catch Pokémon</h1>
        </header>
        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                className="pokemon-image"
              />
            </figure>
            <h1>{pokemon.name}</h1>
            <div className="grid-three-cols">
              <p className="pokemon-info">
                Height: <span> {pokemon.height} </span>
              </p>
              <p className="pokemon-info">
                Weight: <span> {pokemon.weight}</span>
              </p>
              <p className="pokemon-info">
                speed: <span>{pokemon.stats[5].base_stat}</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
    );
  }
};

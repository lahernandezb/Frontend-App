import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../utils/fetchPokemon";

function PokemonGrid() {
  const [pokemon, setPokemon] = useState(null);
  console.log(pokemon);

  useEffect(() => {
    fetchPokemon("https://pokeapi.co/api/v2/pokemon").then(({ results }) =>
      setPokemon(results)
    );
  }, []);
  return (
    <div className="pokemonGrid">
      {/* {pokemon?.map((item) => (
        <div>{item.name}</div>
      ))} */}
    </div>
  );
}

export default PokemonGrid;

import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../utils/fetchPokemon";
import PokemonCard from "./PokemonGrid/PokemonCard";
import "./PokemonGrid/PokemonGrid.scss";

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
      {pokemon?.map(({ name, url }) => (
        <PokemonCard key={url} pokemonDetails={{ name: name, url: url }} />
      ))}
    </div>
  );
}

export default PokemonGrid;

import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../utils/fetchPokemon";
import { useLocalStorageState } from "../utils/useLocalStorageState";
import PokemonCard from "./PokemonGrid/PokemonCard";
import "./PokemonGrid/PokemonGrid.scss";

function PokemonGrid() {
  const [pokemon, setPokemon] = useState(null);

  const [favoritePokemon, setFavoritePokemon] = useLocalStorageState(
    "favoritePokemonList",
    []
  );

  const favoriteAPokemon = (pokemon) => {
    setFavoritePokemon([pokemon, ...favoritePokemon]);
  };

  const unfavoriteAPokemon = (pokemonUrl) => {
    const updatedPokemon = favoritePokemon.filter(
      (item) => item.url !== pokemonUrl
    );
    setFavoritePokemon(updatedPokemon);
  };

  useEffect(() => {
    fetchPokemon("https://pokeapi.co/api/v2/pokemon").then(({ results }) =>
      setPokemon(results)
    );
  }, []);

  return (
    <div className="pokemonGrid">
      {pokemon?.map(({ name, url }) => {
        const favorite = favoritePokemon.find((pokemon) => pokemon.url === url);

        return (
          <PokemonCard
            key={url}
            pokemonDetails={{ name: name, url: url }}
            actions={{ favoriteAPokemon, unfavoriteAPokemon }}
            favorite={favorite}
          />
        );
      })}
    </div>
  );
}

export default PokemonGrid;

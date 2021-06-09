import React from "react";
import { AiFillHeart } from "react-icons/ai";
import "./PokemonCard/PokemonCard.scss";

function PokemonCard({ pokemonDetails, actions, favorite }) {
  const { name, url } = pokemonDetails;
  const { favoriteAPokemon, unfavoriteAPokemon } = actions;

  return (
    <div className={`pokemonCard ${favorite && "pokemonCard--favorite"}`}>
      <h2 className="pokemonCard__name">
        {name} <span> {favorite && <AiFillHeart />}</span>
      </h2>
      <div className="pokemonCard__actions">
        <button onClick={() => favoriteAPokemon(pokemonDetails)}>
          Favorite
        </button>
        <button onClick={() => unfavoriteAPokemon(url)}>Unfavorite</button>
      </div>
    </div>
  );
}

export default PokemonCard;

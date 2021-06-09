import React from "react";

function PokemonCard({ pokemonDetails, actions, favorite }) {
  const { name, url } = pokemonDetails;
  const { favoriteAPokemon, unfavoriteAPokemon } = actions;

  return (
    <div className="pokemonCard">
      <h2 className="pokemonCard__name">{name}</h2>
      <p className="pokemonCard__url">{url}</p>
      <div className="pokemonCard__actions">
        <button onClick={() => favoriteAPokemon(pokemonDetails)}>
          Favorite
        </button>
        <button onClick={() => unfavoriteAPokemon(url)}>Unfavorite</button>
        {favorite && "im a favorite"}
      </div>
    </div>
  );
}

export default PokemonCard;

import React from "react";

function PokemonCard({ pokemonDetails }) {
  const { name, url } = pokemonDetails;
  return (
    <div className="pokemonCard">
      <h2 className="pokemonCard__name">{name}</h2>
      <p className="pokemonCard__url">{url}</p>
      <div className="pokemonCard__actions">
        <button>Favorite</button>
        <button>Unfavorite</button>
      </div>
    </div>
  );
}

export default PokemonCard;

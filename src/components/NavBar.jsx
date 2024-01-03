import React from "react";

export default function NavBar({ setPokemonIndex, pokemonList }) {
  //state
  //comportement
  const handleClick = (i, pokemon) => {
    if (pokemon.name.toLowerCase() === "pikachu") {
      alert("pikachuuuuu !");
    }
    setPokemonIndex(i);
  };
  //render
  return (
    <>
      {pokemonList.map((pokemon, i) => (
        <button
          key={pokemon.name}
          onClick={() => {
            handleClick(i, pokemon);
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

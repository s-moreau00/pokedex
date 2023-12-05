import { useState } from "react";

const pokemonList = [
    {
      name: "bulbasaur",
      src:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
    {
        name: "salalamèche",
        src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
  ];

  export default function PokemonCard() {
    //statement
    //copie de pokemonList dans un tableau
    const [pokemons, setPokemons] = useState([...pokemonList])
    //comportement

    //render
    return (
        pokemons[2].src ? ( <>
            <figure>
                <img src={pokemons[2].src} alt={pokemons[2].name} />
                 <figcaption>{pokemons[2].name}</figcaption>
            </figure>
            </>) : ( <>
                <p>???</p>
                <p>{pokemons[2].name}</p>
                </>) ) 
                }
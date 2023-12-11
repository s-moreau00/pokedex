import './App.css'
import PokemonCard from "./components/PokemonCard"
import React, {useState} from 'react';

const pokemonList = [
  {
      name: "bulbasaur",
      src:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      src:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      src:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      src:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  export default function App() {
  //state
const [pokemonIndex, setPokemonIndex] = useState(0);
  //comportements
const precedent = (e) => {
  if(pokemonIndex > 0)
    setPokemonIndex(pokemonIndex - 1)
}
const suivant = (e) => {
 if(pokemonIndex < pokemonList.length - 1)
  setPokemonIndex(pokemonIndex + 1)
}
  //render
  return (
     <div>
      { pokemonIndex > 0 ? (<button onClick={precedent}>précèdent</button>) : (<></>)}
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      { pokemonIndex < pokemonList.length - 1 ? (<button onClick={suivant}>suivant</button>) : (<></>)}
     </div>
  )
}
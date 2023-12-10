import './App.css'
import PokemonCard from "./components/PokemonCard"

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

function App() {
  return (
     <div>
      <PokemonCard pokemon={pokemonList[0]}/>
     </div>
  )
}

export default App;

// import { useState } from "react";

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
   
    //comportement

    //render
    return (
      <> 
     {pokemonList[1].src ? (
         <>
           <figure>
               <img src={pokemonList[1].src} alt={pokemonList[1].name} />
               <figcaption>{pokemonList[1].name}</figcaption>
           </figure>
         </>
         ) : (
           <div>
             <p>???</p>
             <p>{pokemonList[1].name}</p>
           </div> )
          }
     
       </>
               );}
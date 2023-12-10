// import { useState } from "react";


  export default function PokemonCard({pokemon}) {
    //statement
   
    //comportement
    console.log(pokemon)
    //render
    return (
      <> 
     {pokemon.src ? (
         <>
           <figure>
               <img src={pokemon.src} alt={pokemon.name} />
               <figcaption>{pokemon.name}</figcaption>
           </figure>
         </>
         ) : (
           <div>
             <p>???</p>
             <p>{pokemon.name}</p>
           </div> )
          }
     
       </>
               );}
import React from 'react'

export default function NavBar({setPokemonIndex, pokemonList}) {
    //state
    //comportement
    //render
  return (
        <>
            {
              pokemonList.map((pokemon,i)=> (
                <button key={pokemon.name} onClick={() => setPokemonIndex(i)}>{pokemon.name}</button>
              ))  
            }
        </>
    )

}

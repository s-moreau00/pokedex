import React from 'react'

export default function NavBar({pokemonIndex, suivant, precedent, pokemonList}) {
  return (
        <>
            { pokemonIndex > 0 ? (<button onClick={precedent}>précèdent</button>) : (<></>)}
            { pokemonIndex < pokemonList.length - 1 ? (<button onClick={suivant}>suivant</button>) : (<></>)}
        </>
    )

}

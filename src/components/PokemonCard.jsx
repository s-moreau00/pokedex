import PropTypes from "prop-types";


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


  PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string,
  }).isRequired,
}
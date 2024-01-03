import PropTypes from "prop-types";
import "./pokemonCard.css";
import styled from "styled-components";

export default function PokemonCard({ pokemon }) {
  //statement

  //comportement
  const Container = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height:350px;
    padding: 50px;
    color: whitesmoke;
    border: 1px solid whitesmoke;
    border-radius: 25px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    transform: translateY(0)
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    &:hover {
      transform: translateY(-20px);
      box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.3);
    }
  `;
  const Caption = styled.figcaption`
    color: #0d1a26;
    font-weight: 400;
  `;

  console.log(pokemon);
  //render
  return (
    <>
      {pokemon.src ? (
        <>
          <Container>
            <img src={pokemon.src} alt={pokemon.name} />
            <Caption>{pokemon.name}</Caption>
          </Container>
        </>
      ) : (
        <div>
          <p>???</p>
          <p>{pokemon.name}</p>
        </div>
      )}
    </>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string,
  }).isRequired,
};

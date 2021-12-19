import React from 'react';
import PokemonElement from './PokemonElement.jsx';

const PokemonList = (props) => (
  <div>
    {props.pokemons.map((pokemon) =>
    <PokemonElement pokemon={pokemon} key={pokemon._id}/>)}
  </div>
)
export default PokemonList;
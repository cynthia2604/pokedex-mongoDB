import React from 'react';

const PokemonElement = (props) => (
  <div>
    <h3>{props.pokemon.name}</h3>
    <img src={props.pokemon.img} />
  </div>
)

export default PokemonElement;
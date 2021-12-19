import React from 'react';
import PokemonList from './PokemonList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonlist: []
    }
  }
  render() {
    return (
      <div>
      <div>
        <h1>Pokemon!</h1>
        <button>Show All</button>
        <select id="type">
          <option>Sort by Type</option>
          <option>Grass</option>
          <option>Fire</option>
          <option>Water</option>
          <option>Normal</option>
          <option>Poison</option>
          <option>Electric</option>
          <option>Ground</option>
          <option>Fighting</option>
          <option>Psychic</option>
          <option>Rock</option>
          <option>Ghost</option>
          <option>Dragon</option>
        </select>
        <button>INSERT</button>
        <PokemonList />
      </div>
    </div>
    )
  }
}


export default App;
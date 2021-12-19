import React from 'react';
import PokemonList from './PokemonList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonlist: []
    }
    this.getAllPokemon = this.getAllPokemon.bind(this);
  }

  componentDidMount() {
    this.getAllPokemon();
  }

  getAllPokemon() {
    axios.get('/pokemonlist/pokemons')
      .then((response) => {
        this.setState({
          pokemonlist: response.data
        })
      })
      .catch((err) => console.error(err));
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
        <PokemonList pokemons={this.state.pokemonlist}/>
      </div>
    </div>
    )
  }
}


export default App;
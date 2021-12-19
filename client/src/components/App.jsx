import React from 'react';
import PokemonList from './PokemonList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonlist: [],
      type: ''
    }
    this.getAllPokemon = this.getAllPokemon.bind(this);
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.getType = this.getType.bind(this);
  }

  componentDidMount() {
    this.getAllPokemon();
  }

  getAllPokemon() {
    //console.log('click');
    axios.get('/pokemonlist/pokemons')
      .then((response) => {
        this.setState({
          pokemonlist: response.data
        })
      })
      .catch((err) => console.error(err));
  }

  // axios.get('/pokemonlist/type', {params: {type: this.state.type} })
  getType() {
    // axios get request to retrive specific type pokemons
    axios.get(`/pokemonlist/type/${this.state.type}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          pokemonlist: response.data
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }

  handleTypeSelect(e) {
    this.setState({
      type: e.target.value
    }, this.getType)
  }

  render() {
    return (
      <div>
      <div>
        <h1>Pokemon!</h1>
        <button onClick={this.getAllPokemon}>Show All</button>
        <select id="type" onChange={this.handleTypeSelect}>
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
        <PokemonList pokemons={this.state.pokemonlist} getAllPokemon={this.getAllPokemon}/>
      </div>
    </div>
    )
  }
}


export default App;
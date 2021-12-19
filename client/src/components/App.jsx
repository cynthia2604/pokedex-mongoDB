import React from 'react';
import PokemonList from './PokemonList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonlist: [],
      type: '',
      inserted: false,
      inputname: '',
      inputtype: '',
      inputimg: ''
    }
    this.getAllPokemon = this.getAllPokemon.bind(this);
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.getType = this.getType.bind(this);
    this.handleInsert = this.handleInsert.bind(this);
    this.addPokemon = this.addPokemon.bind(this);
    this.handleInsertChange = this.handleInsertChange.bind(this);
    this.addPokemonRequest = this.addPokemonRequest.bind(this);
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
  handleInsertChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  // if inserted is true, dislay insert form and send post request
  addPokemon() {
    if(this.state.inserted) {
      return (
        <form onSubmit={this.addPokemonRequest}>
          <label>Insert New Pokemon</label>
          <br></br>
          <label>
            Enter Name:
            <input type="text" name="inputname" onChange={this.handleInsertChange}></input>
          </label>
          <br></br>
          <label>
            Enter Type:
            <input type="text" name="inputtype" value={this.state.inputtype} onChange={this.handleInsertChange}></input>
          </label>
          <br></br>
          <label>
            Enter ImageUrl:
            <input type="text" name="inputimg" value={this.state.inputimg} onChange={this.handleInsertChange}></input>
          </label>
          <br></br>
          <button type="submit" value="Submit">Submit</button>
        </form>
      )
    }
  }
  // display or hide add pokemon form
  handleInsert() {
    console.log('click insert');
    this.setState({
      inserted : !this.state.inserted
    })
  }

  addPokemonRequest(e) {
    e.preventDefault();
    console.log(this.state.inputname, this.state.inputtype, this.state.inputimg);
    //axios post request
    axios.post('/pokemonlist/pokemons', {
      name : this.state.inputname,
      type : this.state.inputtype,
      img: this.state.inputimg
    })
      .then(() => this.getAllPokemon())
      .catch((err) => console.error(err))
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
        <button onClick={this.handleInsert}>INSERT</button>
        {this.addPokemon()}
        <PokemonList pokemons={this.state.pokemonlist} getAllPokemon={this.getAllPokemon}/>
      </div>
    </div>
    )
  }
}


export default App;
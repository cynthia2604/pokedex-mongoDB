import React from 'react';
import axios from 'axios';

// const PokemonElement = (props) => (
//   <div>
//     <h3>{props.pokemon.name}</h3>
//     <img src={props.pokemon.img} />
//   </div>
// )

class PokemonElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayEdit : false,
      inputName: ''
    }
    this.handleClickName = this.handleClickName.bind(this);
    this.editName = this.editName.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deletePokemon = this.deletePokemon.bind(this);
  }
  editName() {
    if(this.state.displayEdit) {
      return(
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Name:
            <input type="text" name="name" placeholder="Name" value={this.state.inputName} onChange={this.handleChange}></input>
          </label>
          <button onClick={this.handleClickName}>Cancel</button>
          <button type="submit" value="Submit">Submit</button>
        </form>
      )
    }
  }
  handleClickName() {
    this.setState({
      displayEdit : !this.state.displayEdit
    })
  }
  handleChange(e) {
    this.setState({
      inputName: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    axios.put(`/pokemonlist/pokemon/${this.props.pokemon._id}`, {
      id: this.props.pokemon._id,
      name: this.state.inputName
    })
    .then(() => this.props.getAllPokemon())
    .catch((err) => console.error(err))
    .then(() => this.handleClickName())
    .then(() => this.editName())
  }
  deletePokemon(e) {
    e.preventDefault();
    console.log("click delete");
    //axios delete request
    axios.delete(`/pokemonlist/pokemon/${this.props.pokemon._id}`)
      .then(() => this.props.getAllPokemon())
      .catch((err) => console.error(err))
  }
  render() {
    return (
    <div>
      <h3 onClick={this.handleClickName}>{this.props.pokemon.name}</h3>
      {this.editName()}
      <img src={this.props.pokemon.img} />
      <button onClick={this.deletePokemon}>Delete</button>
    </div>
    )
  }
}

export default PokemonElement;
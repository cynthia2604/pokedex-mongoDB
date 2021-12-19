const PokemonList = require('./pokemon.json');
const mongoose = require('mongoose');
const Pokemon = require('./Pokemon.js');

const insertPokemonData = function() {
  Pokemon.insertMany(PokemonList)
    .catch(err => console.log('Unable to insert data', err))
    .then(() => mongoose.connection.close())
};

insertPokemonData();
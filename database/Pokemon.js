const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const pokemonSchema = new mongoose.Schema({
  name: {type: String, unique: true},
  type: String,
  img: String,
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
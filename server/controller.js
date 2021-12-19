const Pokemon = require('../database/Pokemon.js');
const controller = {
  pokemons: {
    getPokemons: function (req, res) {
      Pokemon.find({})
        .then((allPokemons) => {
          res.status(200).send(allPokemons);
        })
        .catch((err) => {
          res.status(404).send(err);
        })
    }
  }
};

module.exports = controller;
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
    },
    getType: function(req, res) {
      //return console.log(req.params);
      Pokemon.find({type: req.params.type})
        .then((pokemons) => {
          res.status(200).send(pokemons)
        })
        .catch((err) => {
          res.status(404).send(err);
        })
    },
    updateName: function(req, res) {
      //return console.log(req.body);
      Pokemon.findOneAndUpdate({_id: req.body.id}, {name: req.body.name})
        .then(() => {
          res.status(201).send("success update name")
        })
        .catch((err) => {
          res.status(404).send(err);
        })
    },
    deletePokemon: function(req, res) {
      //return console.log(req.params);
      Pokemon.deleteOne({_id: req.params.id})
        .then(() => {
          res.status(202).send("success delete pokemon")
        })
        .catch((err) => {
          res.status(400).send(err);
        })
    },
    addPokemon: function(req, res) {
      //return console.log(req.body);
      Pokemon.create({
        name : req.body.name,
        type : req.body.type,
        img : req.body.img
      })
        .then(() => res.status(201).send("Success add pokemon"))
        .catch((err) => res.status(400).send(err))
    }
  }
};

module.exports = controller;
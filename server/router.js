const router = require('express').Router();
const controller = require('./controller.js');

router.route('/pokemons')
  .get(controller.pokemons.getPokemons)

module.exports = router;
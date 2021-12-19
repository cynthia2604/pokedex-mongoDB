const router = require('express').Router();
const controller = require('./controller.js');

router.route('/pokemons')
  .get(controller.pokemons.getPokemons)
  .post(controller.pokemons.addPokemon)

router.route('/pokemon/:id')
  .put(controller.pokemons.updateName)
  .delete(controller.pokemons.deletePokemon)

router.route('/type/:type')
  .get(controller.pokemons.getType)

module.exports = router;
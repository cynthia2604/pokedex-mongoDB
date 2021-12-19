const router = require('express').Router();
const controller = require('./controller.js');

router.route('/pokemons')
  .get(controller.pokemons.getPokemons)

router.route('/pokemon/:id')
  .put(controller.pokemons.updateName)
  .delete(controller.pokemons.deletePokemon)
// router.route('/type')
//   .get(controller.pokemons.getType)
// router.get('/type', (req, res) => {
//   res.json(req);
// })

module.exports = router;
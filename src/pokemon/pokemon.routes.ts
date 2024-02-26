import { Router } from 'express';
import * as PokemonController from './pokemon.controller';

const router = Router();
router
    .route('/pokemon')
    .get(PokemonController.readPokemon);

router
    .route('/pokemon')
    .post(PokemonController.createPokemon);


router
    .route('/pokemon')
    .put(PokemonController.updatePokemon);



router
    .route('/pokemon/:pokemonId')
    .delete(PokemonController.deletePokemon);


export default router;
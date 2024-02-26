import { Request, RequestHandler, Response } from 'express';
import { Pokemon } from './pokemon.model';
import * as PokemonDao from './pokemon.dao';
import { OkPacket } from 'mysql';

export const readPokemon: RequestHandler = async (req: Request, res: Response) => {
    try {
        let pokemon;
        let pokemonId = parseInt(req.query.pokemonId as string);

        console.log('pokemonId', pokemonId);
        if (Number.isNaN(pokemonId)) {
            pokemon = await PokemonDao.readPokemon();
        }
        res.status(200).json(
            pokemon
        );
    } catch (error) {
        console.error('[pokemon.controller][readPokemon][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching pokemon'
        });
    }
};

export const createPokemon: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await PokemonDao.createPokemon(req.body);

        console.log('req.body', req.body);
        console.log('pokemon', okPacket); 

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[pokemon.controller][createPokemon][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing pokemon'
        });
    }
};

export const updatePokemon: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await PokemonDao.updatePokemon(req.body);

        console.log('req.body', req.body);
        console.log('pokemon', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[pokemon.controller][updatePokemon][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing pokemons'
        });
    }
};

export const deletePokemon: RequestHandler = async (req: Request, res: Response) => {
    try {
        let pokemonId = parseInt(req.params.pokemonId as string);
        console.log('pokemonId', pokemonId);

        if (!Number.isNaN(pokemonId)) {
            const response = await PokemonDao.deletePokemon(pokemonId);
            res.status(200).json(response);

        } else {
            throw new Error("Integer expected for pokemonId");
        }

    } catch (error) {
        console.error('[pokemon.controller][deletePokemon][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting pokemons'
        });
    }
};
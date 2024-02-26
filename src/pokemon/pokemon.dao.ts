import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Pokemon } from "./pokemon.model";
import { pokemonQueries } from './pokemon.queries';


export const readPokemon = async () => {
    return execute<Pokemon[]>(pokemonQueries.readPokemon, []);
};

export const createPokemon = async (pokemon: Pokemon) => {
    return execute<OkPacket>(pokemonQueries.createPokemon,
        [pokemon.pokemonId, pokemon.name, pokemon.description, pokemon.HP]);
};

export const updatePokemon = async (pokemon: Pokemon) => {
    return execute<OkPacket>(pokemonQueries.updatePokemon,
        [pokemon.name, pokemon.description, pokemon.HP, pokemon.pokemonId]);
};

export const deletePokemon = async (pokemonId: number) => {
    return execute<OkPacket>(pokemonQueries.deletePokemon, [pokemonId]);
};

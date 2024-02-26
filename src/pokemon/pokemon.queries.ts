export const pokemonQueries = {
	readPokemon:
		`select * from pokemon`,
	createPokemon:
		`insert into pokemon(id, name, hp, description) values(?,?,?,?)`,
	updatePokemon:
		`update pokemonmile.pokemon set name=?, hp=?, description=? where id = ?`,
	deletePokemon:
		`delete from pokemonmile.pokemon where id = ?`,
}

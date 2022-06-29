import { PokemonNode } from '../types/pokemonData'

export const parseAllPokemon = (data: any) => {
    data.allPokemon.nodes.map((node: PokemonNode) => {
        const { id, name, stats, types, abilities, game_indices, sprites } =
            node

        return {
            id,
            name,
            stats: stats.map((stat) => ({
                name: stat.stat.name,
                value: stat.base_stat,
            })),
            types: types.map((type) => type.type.name),
            abilities: abilities.map((ability) => ability.ability.name),
            game_indices: game_indices.map((indice) => indice.version.name),
            sprite: sprites.front_default,
        }
    })
}

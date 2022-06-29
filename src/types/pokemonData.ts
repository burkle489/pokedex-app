export type PokemonDataQuery = {
    allPokemon: {
        nodes: PokemonNode[]
    }
}

export type PokemonData = {
    id: string
    name: string
    stats: PokemonStat[]
    types: PokemonType[]
    abilities: PokemonAbility[]
    game_indices: PokemonGameIndex[]
}
export type PokemonNode = {
    id: string
    name: string
    stats: PokemonStat[]
    types: PokemonType[]
    abilities: PokemonAbility[]
    game_indices: PokemonGameIndex[]
    sprites: PokemonSprite
}
export type PokemonStat = {
    base_stat: number
    stat: {
        name: string
    }
}
export type PokemonType = {
    slot: number
    type: {
        name: string
    }
}
export type PokemonAbility = {
    ability: {
        name: string
    }
}
export type PokemonGameIndex = {
    version: { name: string }
}
export type PokemonSprite = {
    front_default: string
}

export type PokemonDataQuery = {
    allPokemon: {
        nodes: PokemonNode[]
    }
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
    other: { official_artwork: { front_default: string } }
}

export type ParsedPokemonData = {
    id: string
    name: string
    stats: ParsedPokemonStat[]
    types: string[]
    abilities: string[]
    game_indices: string[]
    sprite: string
}

export type ParsedPokemonStat = {
    name: string
    value: number
}

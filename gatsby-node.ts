const nodeFetch = require('node-fetch')

const NODE_TYPE = 'Pokemon'

exports.sourceNodes = async ({
    actions,
    createNodeId,
    createContentDigest,
}: any) => {
    const { createNode } = actions

    const response = await nodeFetch('https://pokeapi.co/api/v2/pokemon')
    const json = await response.json()

    const { results = [] } = json

    const pokemon = await Promise.all(
        results.map(async (result: any) => {
            const { url } = result
            const specificPokemonRes = await nodeFetch(url)
            return await specificPokemonRes.json()
        })
    )

    pokemon.forEach((node, index) => {
        createNode({
            ...node,
            id: createNodeId(`${NODE_TYPE}-${node.id}`),
            parent: null,
            children: [],
            internal: {
                type: NODE_TYPE,
                content: JSON.stringify(node),
                contentDigest: createContentDigest(node),
                description: `Pokemon ${node.name}`,
            },
        })
    })
}

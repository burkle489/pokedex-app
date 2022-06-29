import * as React from 'react'
import { useEffect, useState } from 'react'
import { BodyText } from '../components/bodyText'
import { Button } from '../components/button'
import { ContentContainer } from '../components/contentContainer'
import '../styles/index.scss'
import '../styles/formFields.scss'
import PokedexText from '../svgAssets/Pokedex.svg'
import Pokeball from '../svgAssets/Pokeball.svg'
import FluidLogo from '../svgAssets/fluid-logo.svg'
import PokemonLogo from '../svgAssets/pokemon-logo.svg'
import { useStaticQuery, graphql } from 'gatsby'
import { TextInput } from '../components/formFields/textInput'
import { parseAllPokemon } from '../helpers/parseAllPokemon'
import { Form, Formik } from 'formik'
import { ParsedPokemonData, PokemonDataQuery } from '../types/pokemonData'
import { PokemonCard } from '../components/pokemonCard'
import { Divider } from '../components/divider'
import { Modal } from '../components/Modal'
import { PokemonModalInner } from '../components/pokemonModalInner'

const IndexPage = () => {
    const [searchedPokemon, setSearchedPokemon] =
        useState<ParsedPokemonData | null>(null)
    const [searchError, setSearchError] = useState<string | null>(null)

    const query = graphql`
        {
            allPokemon {
                nodes {
                    id
                    name
                    stats {
                        base_stat
                        stat {
                            name
                        }
                    }
                    types {
                        type {
                            name
                        }
                        slot
                    }
                    abilities {
                        ability {
                            name
                        }
                    }
                    game_indices {
                        version {
                            name
                        }
                    }
                    sprites {
                        other {
                            official_artwork {
                                front_default
                            }
                        }
                    }
                }
            }
        }
    `
    const data: PokemonDataQuery = useStaticQuery(query)
    const parsedData = parseAllPokemon(data)

    const handleSearch = (searchValue: string) => {
        const findSearch = parsedData.find(
            (pokemon) =>
                pokemon.name.toLowerCase() === searchValue.toLowerCase()
        )
        if (findSearch) {
            setSearchedPokemon(findSearch)
            setSearchError(null)
        } else {
            setSearchError('Pokemon not found')
        }
    }

    const handleClosePokemonModal = () => {
        setSearchedPokemon(null)
    }

    return (
        <>
            <Formik onSubmit={() => {}} initialValues={{ pokemonSearch: '' }}>
                {(formikProps: any) => (
                    <Form>
                        <main>
                            <ContentContainer className="Flex JustifyContent--SpaceBetween">
                                <div>
                                    <h1>
                                        Welcome <br />
                                        to the <br />
                                        <span className="Weight--Bold">
                                            Pokedex.
                                        </span>
                                    </h1>
                                </div>
                                <div className="">
                                    <h3 className="Margin--Top-M Weight--Light">
                                        The comprehensive database of Pokemon{' '}
                                        <br />
                                        from the original Red and Blue version.
                                    </h3>
                                    <h3 className="Margin--Bottom-M Weight--Medium">
                                        Find your favourite and check out their
                                        stats.
                                    </h3>
                                    <TextInput
                                        placeholder="Search the Pokedex"
                                        name="pokemonSearch"
                                        width="600px"
                                        innerComponent={
                                            <Button
                                                text="Search"
                                                className="InputInnerComponent"
                                                type="submit"
                                                onClick={() =>
                                                    handleSearch(
                                                        formikProps.values
                                                            .pokemonSearch
                                                    )
                                                }
                                            />
                                        }
                                    />
                                    {searchError && (
                                        <BodyText>{searchError}</BodyText>
                                    )}
                                </div>
                            </ContentContainer>
                            <ContentContainer
                                titleImage={
                                    <PokedexText className="TitleImage Red" />
                                }
                                pokeballTwo={
                                    <Pokeball className="PokeballTwo" />
                                }
                                pokeballThree={
                                    <Pokeball className="PokeballThree" />
                                }
                                className="Blue-Background PokemonCardsContainer"
                            >
                                {parsedData
                                    .filter((pokemon) =>
                                        pokemon.game_indices.includes('blue')
                                    )
                                    .map((pokemon) => (
                                        <PokemonCard
                                            name={pokemon.name}
                                            key={pokemon.id}
                                            sprite={pokemon.sprite}
                                            types={pokemon.types}
                                            abilities={pokemon.abilities}
                                            stats={pokemon.stats}
                                        />
                                    ))}
                            </ContentContainer>
                            <ContentContainer
                                titleImage={
                                    <PokedexText className="TitleImage" />
                                }
                                className="Red-Background PokemonCardsContainer"
                                pokeballOne={
                                    <Pokeball className="PokeballOne" />
                                }
                                pokeballThree={
                                    <Pokeball className="PokeballThree" />
                                }
                            >
                                {parsedData
                                    .filter((pokemon) =>
                                        pokemon.game_indices.includes('red')
                                    )
                                    .map((pokemon) => (
                                        <PokemonCard
                                            name={pokemon.name}
                                            key={pokemon.id}
                                            sprite={pokemon.sprite}
                                            types={pokemon.types}
                                            abilities={pokemon.abilities}
                                            stats={pokemon.stats}
                                        />
                                    ))}
                            </ContentContainer>
                            <ContentContainer className="Flex AlignItems--Center JustifyContent--Center Footer">
                                <PokemonLogo width={240} />
                                <Divider
                                    vertical
                                    black
                                    className="Margin--Left-XL Margin--Right-XL Width-1px Height-60px"
                                />
                                <FluidLogo width={160} />
                            </ContentContainer>
                        </main>
                    </Form>
                )}
            </Formik>
            {searchedPokemon && (
                <Modal
                    onClose={handleClosePokemonModal}
                    title={searchedPokemon.name}
                >
                    <PokemonModalInner
                        name={searchedPokemon.name}
                        key={searchedPokemon.id}
                        sprite={searchedPokemon.sprite}
                        types={searchedPokemon.types}
                        abilities={searchedPokemon.abilities}
                        stats={searchedPokemon.stats}
                    />
                </Modal>
            )}
            <div id="ModalPortal" />
        </>
    )
}

export default IndexPage

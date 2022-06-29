import * as React from 'react'
import { useEffect } from 'react'
import { BodyText } from '../components/bodyText'
import { Button } from '../components/button'
import { ContentContainer } from '../components/contentContainer'
import '../styles/index.scss'
import '../styles/formFields.scss'
import PokedexText from '../svgAssets/Pokedex.svg'
import { useStaticQuery, graphql } from 'gatsby'
import { TextInput } from '../components/formFields/textInput'
import { parseAllPokemon } from '../helpers/parseAllPokemon'
import { Form, Formik } from 'formik'
import { PokemonDataQuery } from '../types/pokemonData'

const IndexPage = () => {
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
                        front_default
                    }
                }
            }
        }
    `
    const data: PokemonDataQuery = useStaticQuery(query)
    const parsedData = parseAllPokemon(data)

    return (
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
                                    The comprehensive database of Pokemon <br />
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
                                        />
                                    }
                                />
                            </div>
                        </ContentContainer>
                        <ContentContainer
                            titleImage={
                                <PokedexText className="TitleImage Red" />
                            }
                            className="Blue-Background"
                        >
                            <PokemonCard />
                        </ContentContainer>
                        <ContentContainer
                            titleImage={<PokedexText className="TitleImage" />}
                            className="Red-Background"
                        ></ContentContainer>
                    </main>
                </Form>
            )}
        </Formik>
    )
}

export default IndexPage

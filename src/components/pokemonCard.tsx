//react functional component
import React from 'react'
import classnames from 'classnames'
import '../styles/pokemonCard.scss'
import { ParsedPokemonStat } from '../types/pokemonData'
import { BodyText } from './bodyText'
import { PokemonStat } from './pokemonStat'
import { Divider } from './divider'
import { STAT_BAR_COLORS } from '../constants/constants'
import { CSSTransition } from 'react-transition-group'

export const PokemonCard: React.FC<PokemonCardProps> = ({
    children,
    className,
    name,
    types,
    abilities,
    stats,
    sprite,
}) => {
    const classes = classnames(
        'PokemonCard',
        'BorderRadius-Bottom-20px',
        className
    )

    return (
        <div className={classes}>
            <div className="ImageSpace">
                <div className="No-Background Height-100px" />
                <div className="BorderRadius-Top-20px ImageHolder LightGreen-Background Height-170px">
                    <img className="PokemonSprite" src={sprite} />
                    <div className="PokemonShadow" />
                </div>
            </div>
            <div className="PokemonInfo BorderRadius-Bottom-20px">
                <h2>{name}</h2>
                <div className="Info Flex AlignItems--Baseline">
                    <h4 className="Weight--Bold Width-120px">Type</h4>
                    <BodyText className="Capitalise" fontSize="Small">
                        {types.map((type, index) => (
                            <>
                                {type.replace(/-/g, ' ')}
                                {index + 1 < types.length && (
                                    <span className="Margin--Left-S Margin--Right-S">
                                        |
                                    </span>
                                )}
                            </>
                        ))}
                    </BodyText>
                </div>
                <div className="Info Flex AlignItems--Baseline">
                    <h4 className="Weight--Bold Width-120px">Abilities</h4>
                    <BodyText className="Capitalise" fontSize="Small">
                        {abilities.map((ability, index) => (
                            <>
                                {ability.replace(/-/g, ' ')}
                                {index + 1 < abilities.length && (
                                    <span className="Margin--Left-S Margin--Right-S">
                                        |
                                    </span>
                                )}
                            </>
                        ))}
                    </BodyText>
                </div>
                {stats.map((stat, index) => (
                    <>
                        <PokemonStat
                            name={stat.name}
                            value={stat.value}
                            barColor={STAT_BAR_COLORS[index]}
                        />
                        {index + 1 < stats.length && (
                            <Divider
                                dashed
                                className="Margin--Bottom-XS Margin--Top-XS"
                            />
                        )}
                    </>
                ))}
            </div>
        </div>
    )
}

export type PokemonCardProps = {
    children?: React.ReactNode
    className?: string
    name: string
    types: string[]
    abilities: string[]
    stats: ParsedPokemonStat[]
    sprite: string
}

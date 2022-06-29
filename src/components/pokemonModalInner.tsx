import React from 'react'
import { STAT_BAR_COLORS } from '../constants/constants'
import { BodyText } from './bodyText'
import { Divider } from './divider'
import { PokemonCardProps } from './pokemonCard'
import { PokemonStat } from './pokemonStat'

export const PokemonModalInner: React.FC<PokemonCardProps> = ({
    children,
    className,
    name,
    types,
    abilities,
    stats,
    sprite,
}) => {
    return (
        <div className="PokemonModalInner">
            <div className="ModalImage">
                <img className="PokemonSprite" src={sprite} />
                <div className="PokemonShadow" />
            </div>
            <div className="PokemonInfo BorderRadius-Bottom-20px">
                <div className="PokemonInfoInner">
                    <div className="Flex AlignItems--Baseline">
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
                    <div className="Flex AlignItems--Baseline">
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
        </div>
    )
}

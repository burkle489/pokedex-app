import React from 'react'
import classnames from 'classnames'
import { StatBar } from './StatBar'
import { BodyText } from './bodyText'

export const PokemonStat: React.FC<PokemonStatProps> = ({
    name,
    value,
    className,
    barColor,
}) => {
    let parsedName = name
    const classes = classnames('PokemonStat', className)
    parsedName = name.charAt(0).toUpperCase() + name.slice(1)
    //if given more time id like to work out a more elegant solution to this
    if (name === 'hp') {
        parsedName = 'HP'
    }
    if (name === 'special-defense') {
        parsedName = 'Special defense'
    }
    if (name === 'special-attack') {
        parsedName = 'Special attack'
    }
    return (
        <div className={classes}>
            <BodyText className="MinWidth-120px" fontSize="Small">
                {parsedName}
            </BodyText>
            <StatBar
                percentage={value > 100 ? 100 : value}
                barColor={barColor}
            />
            <BodyText
                fontSize="Small"
                fontWeight="Bold"
                className="MinWidth-30px Flex JustifyContent--End"
            >
                {value}
            </BodyText>
        </div>
    )
}

type PokemonStatProps = {
    name: string
    value: number
    barColor: string
    className?: string
}

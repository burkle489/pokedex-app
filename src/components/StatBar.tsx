import React from 'react'
import classnames from 'classnames'
import '../styles/statBar.scss'
import '../styles/pokemonCard.scss'

export const StatBar: React.FC<StatBarProps> = ({
    className,
    percentage,
    barColor,
}) => {
    const classes = classnames('PokemonStat', className)
    return (
        <div className={classes}>
            <div className="StatBar">
                <div
                    className="ActiveStat"
                    style={{
                        width: `${percentage}%`,
                        backgroundColor: barColor,
                    }}
                ></div>
            </div>
        </div>
    )
}

type StatBarProps = {
    className?: string
    percentage: number
    barColor: string
}

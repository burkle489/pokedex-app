import React from 'react'
import classnames from 'classnames'

export const Divider: React.FC<DividerProps> = ({
    className,
    vertical = null,
    dashed = null,
    black = null,
}) => {
    const classes = classnames('Divider', className, {
        'Divider--vertical': !!vertical,
        'Divider--horizontal': !vertical,
        Dashed: !!dashed,
        Black: !!black,
    })
    return <div className={classes} />
}

type DividerProps = {
    className?: string
    vertical?: boolean
    dashed?: boolean
    black?: boolean
}

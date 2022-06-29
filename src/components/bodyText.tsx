import React from 'react'
import classnames from 'classnames'

export const BodyText: React.FC<ContentContainerProps> = ({
    children,
    className,
    fontWeight,
    fontSize = 'Regular',
    style,
}) => {
    //default font weight is regular (400)
    const classes = classnames(
        'BodyText',
        className,
        { [`Weight--${fontWeight}`]: !!fontWeight },
        { [`Size--${fontSize}`]: !!fontSize }
    )
    return (
        <p style={style} className={classes}>
            {children}
        </p>
    )
}

type ContentContainerProps = {
    children: React.ReactNode
    className?: string
    titleImage?: string
    fontWeight?: 'Light' | 'Medium' | 'Bold'
    fontSize?: 'Small' | 'Regular'
    style?: React.CSSProperties
}

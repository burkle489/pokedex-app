//react functional component called ContentContainer
import React from 'react'
import '../styles/contentContainer.scss'
import classnames from 'classnames'
import { StaticImage } from 'gatsby-plugin-image'

export const ContentContainer: React.FC<ContentContainerProps> = ({
    children,
    className,
    titleImage = null,
    pokeballOne = null,
    pokeballTwo = null,
    pokeballThree = null,
}) => {
    const classes = classnames('ContentContainer', className)
    return (
        <div className={classes}>
            {titleImage && titleImage}
            {children}
            {pokeballOne && pokeballOne}
            {pokeballTwo && pokeballTwo}
            {pokeballThree && pokeballThree}
        </div>
    )
}

type ContentContainerProps = {
    children?: React.ReactNode
    className?: string
    titleImage?: React.ReactNode
    pokeballOne?: React.ReactNode
    pokeballTwo?: React.ReactNode
    pokeballThree?: React.ReactNode
}

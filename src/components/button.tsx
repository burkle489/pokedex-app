import React from 'react'
import '../styles/button.scss'
import classnames from 'classnames'

export const Button: React.FC<ButtonProps> = ({
    text,
    className,
    type = 'button',
    onClick,
}) => {
    const classes = classnames('Button', className)

    return (
        <button type={type} className={classes} onClick={onClick}>
            {text}
        </button>
    )
}

type ButtonProps = {
    text: string
    onClick?: (e: any) => void
    className?: string
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    style?: React.CSSProperties
}

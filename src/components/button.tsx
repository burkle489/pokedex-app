import React from 'react'
import '../styles/button.scss';
import classnames from 'classnames'
import { StringifyOptions } from 'querystring';

export const Button:React.FC<ButtonProps> = ({ text, className, type = 'button' }) => {
    const classes = classnames('Button', className);

    return (
       <button type={type} className={classes}>
       {text}
       </button>
    )
}

type ButtonProps = {
    text: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    style?: React.CSSProperties;

}
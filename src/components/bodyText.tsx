import React from 'react'
import classnames from 'classnames'

export const BodyText:React.FC<ContentContainerProps> = ({ children, className, fontWeight, fontSize = 'Regular' }) => {
    //default font weight is regular (400)
   const classes = classnames('BodyText', className, {[`Weight--${fontWeight}`]: true,}, { [`Size--${fontSize}`]: true});
   return (
       <p className={classes}>
           {children}
       </p>
   )
}


type ContentContainerProps = {
    children: React.ReactNode;
    className?: string;
    titleImage?: string;
    fontWeight?: 'Light' | 'Medium' | 'Bold';
    fontSize?: 'Small' | 'Regular';
}
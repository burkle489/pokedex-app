//react functional component called ContentContainer
import React from 'react'
import '../styles/contentContainer.scss';
import classnames from 'classnames'
import { StaticImage } from "gatsby-plugin-image"

export const ContentContainer:React.FC<ContentContainerProps> = ({ children, className, titleImage ='' }) => {
   const classes = classnames('ContentContainer', className);
   return (
       <div className={classes}>
        <img className='TitleImage' src={titleImage} alt="title" />
           {children}
       </div>
   )
}


type ContentContainerProps = {
    children: React.ReactNode;
    className?: string;
    titleImage?: string;
}
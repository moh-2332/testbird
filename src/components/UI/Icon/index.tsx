import React from 'react';

import classes from './Icon.module.scss'

interface IconProps {
    children?: any;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ children, className }) => {
    return (
        <div className={`${classes.icon} ${className ? className : ''}`}>
            {children}
        </div >
    );
}

export default Icon;
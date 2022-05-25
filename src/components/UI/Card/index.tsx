import React from 'react';

import classes from "./Card.module.scss"

const Card: React.FC<{ children: any }> = ({ children }) => {
    return (
        <div className={classes.card}>
            {children}
        </div>
    );
}

export default Card;
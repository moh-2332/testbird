import React from 'react';

import "./styles.scss"

const Card: React.FC<{ children: any }> = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default Card;
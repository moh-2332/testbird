import React, { useState } from 'react';

import Tooltip from '../Tooltip';

import './styles.scss'

interface IconProps {
    children?: any;
    className?: string;
    tooltipText?: string;
    onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ children, className, tooltipText, onClick }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div
            className={`icon ${className ? className : ''}`}
            data-testid="icon"
            onClick={() => onClick && onClick()}
            onMouseOver={() => setShowTooltip(true)}
            onMouseOut={() => setShowTooltip(false)}
        >
            {children}
            {showTooltip && tooltipText && <Tooltip text={tooltipText} />}
        </div >
    );
}

export default Icon;
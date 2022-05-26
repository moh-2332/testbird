import React, { useState } from 'react';

import classes from './Icon.module.scss'
import Tooltip from '../Tooltip';

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
            className={`${classes.icon} ${className ? className : ''}`}
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
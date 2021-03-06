import React from 'react';

import "./styles.scss"

const Tooltip: React.FC<{ text: string }> = ({ text }) => {
    return <span className="tooltip" data-testid="tooltip">{text}<i></i></span>;
}

export default Tooltip;
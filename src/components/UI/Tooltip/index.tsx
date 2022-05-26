import React from 'react';

import classes from "./Tooltip.module.scss"

const Tooltip: React.FC<{ text: string }> = ({ text }) => {
    return <span className={classes.tooltip}>{text}<i></i></span>;
}

export default Tooltip;
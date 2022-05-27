import React, { useState } from 'react';

import classes from "./DropDown.module.scss"

interface DropDownProps {
    options: Array<any>,
    id: string,
    label: string,
    value: string,
    onOptionSelected: (value: any) => any,
    onClose: () => void,
}

const DropDown: React.FC<DropDownProps> = ({ options, id, label, value, onOptionSelected, onClose }) => {
    const [searchKey, setSearchKey] = useState("");

    const optionSelectedHandler = (option: any) => {
        onOptionSelected(option)
        setSearchKey("");
        onClose();
    }

    const filter = (options: Array<any>) => {
        return options.filter(option => option[label].toLowerCase().indexOf(searchKey.toLowerCase()) > -1) || [];
    }

    return (
        <div className={classes.dropdown}>
            <div className={classes.control}>
                <div className={classes["selected-value"]}>
                    <input
                        value={searchKey}
                        placeholder={value}
                        onChange={(e) => setSearchKey(e.target.value)} />
                </div>
                <div className={classes.close} onClick={onClose}><span className="material-icons md-18 remove">close</span></div>
            </div>
            <div className={classes.options}>
                {filter(options).length ? filter(options).map(option => {
                    return (
                        <div
                            key={option[id]}
                            className={`${classes.option} ${option[label] === value ? classes.selected : null}`}
                            onClick={(e) => optionSelectedHandler(option)}>
                            {option[label]}
                        </div>
                    )
                }) : <div><span>Team member not found.</span><span>Maybe she/he is not yet in your team?</span></div>}
            </div>
        </div>
    );
}

export default DropDown;
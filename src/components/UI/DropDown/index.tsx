import React, { useState } from 'react';

import "./styles.scss"
import Icon from '../Icon';

interface DropDownProps {
    options: Array<any>,
    id: string,
    label: string,
    avatar?: string,
    value: string,
    notFoundFilter?: {
        title: string,
        description: string
    }
    onOptionSelected: (value: any) => any,
    onClose: () => void,
}

const DropDown: React.FC<DropDownProps> = ({ options, id, label, avatar, value, notFoundFilter, onOptionSelected, onClose }) => {
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
        <div className="dropdown" data-testid="dropdown">
            <div className="dropdown__control">
                <div className="dropdown__control__selected-value">
                    <input
                        value={searchKey}
                        placeholder={value}
                        onChange={(e) => setSearchKey(e.target.value)} />
                </div>
                <div className="dropdown__control__close" onClick={onClose}><span className="material-icons md-12 remove">close</span></div>
            </div>
            <div className="dropdown__options">
                {filter(options).length ? filter(options).map(option => {
                    return (
                        <div
                            key={option[id]}
                            className="dropdown__options--option"
                            onClick={(e) => optionSelectedHandler(option)}>
                            {avatar && <Icon><img src={`avatars/${option[avatar]}`} /></Icon>}
                            <div className="dropdown__options--option__label">{option[label]}</div>
                        </div>
                    )
                }) : <div className="dropdown__not-found" data-testid="not-found">
                        <span className="dropdown__not-found--title">{notFoundFilter?.title}</span>
                        <span className="dropdown__not-found--description">{notFoundFilter?.description}</span>
                    </div>
                }
            </div>
        </div>
    );
}

export default DropDown;
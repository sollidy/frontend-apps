import React from 'react';

const MySelect = ({ options, defaultValue, value, onChange }) => {
    return (
        <select
            style={{padding: '5px', marginBottom: '5px'}}
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.name}
                </option>
            )}
        </select>
    );
}

export default MySelect;

import { RegisterDropdownProps, RegisterFieldProps } from '@/app/model/form';
import React from 'react';

export const RegisterField: React.FC<RegisterFieldProps> = ({ label, type,onChange }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className="flex flex-col">
            <label htmlFor="">{label}</label>
            <input type={type} onChange={handleChange} className="border rounded-3xl py-1 px-2"/>
        </div>
    );
}

export const RegisterDropdown: React.FC<RegisterDropdownProps> = ({label, options, onChange}) => {
    
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className="flex flex-col">
            <label htmlFor="">{label}</label>
            <select className="border rounded-3xl py-1 px-2" onChange={handleChange}>
                {options.map((option) => {
                    return(
                        <option value={option} key={option}>
                            {option}
                        </option>
                    )
                })}
            </select>
        </div>
    );
}
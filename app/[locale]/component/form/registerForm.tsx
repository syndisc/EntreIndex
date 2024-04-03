
import React from 'react';
import { RegisterDropdownProps, RegisterFieldProps } from '../../model/form';
import { useTranslations } from 'next-intl';

export const RegisterField: React.FC<RegisterFieldProps> = ({ label, type,onChange }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className="flex flex-col mt-2">
            <label htmlFor="">{label}</label>
            <input type={type} onChange={handleChange} className="border rounded-3xl py-1 px-2"/>
        </div>
    );
}

export const RegisterDropdown: React.FC<RegisterDropdownProps> = ({label, options, onChange}) => {
    
    const t = useTranslations('Index')

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className="flex flex-col">
            <label htmlFor="">{t('gender')}</label>
            <select className="border rounded-3xl py-1 px-2 dark:text-black" onChange={handleChange}>
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
import React from 'react';
import { City } from '../model/province';

interface Dropdown {
    city_id: number;
}

const CityDropdown: React.FC<Dropdown> = async({ city_id }) => {
    const api = process.env.GET_CITY_API ? process.env.GET_CITY_API + city_id: ''
    const res = await fetch(api)
    const city = await res.json()  

    return (
        <div>
            {city.name}
        </div>
    );
};

export default CityDropdown;
import React from 'react';
import CityDropdown from './cityDropdown';
import { City } from '../model/province';

interface Dropdown {
    province_id: number;
}

const ProvinceDropdown: React.FC<Dropdown> = async({ province_id }) => {

    const api = process.env.GET_TOWN_API ? process.env.GET_TOWN_API + province_id: ''
    const res = await fetch(api)
    const cities = await res.json()

    return (
        <div>
            {cities.map((city: City) => {
                return(
                    <div key={city.id} className='pl-6'>
                        <CityDropdown city_id={city.id} />
                    </div>
                ) 
                    
            })}
        </div>
    );
};

export default ProvinceDropdown;
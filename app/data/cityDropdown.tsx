import React from 'react';
import { City } from '../model/province';
import { Answer } from '../model/form';

interface Dropdown {
    city_id: number;
    limit : {
        highest : number,
        lowest : number
    }
}

const CityDropdown: React.FC<Dropdown> = async({ city_id, limit}) => {
    const api = process.env.GET_CITY_API ? process.env.GET_CITY_API + city_id: ''
    const res = await fetch(api)
    const city = await res.json()  

    console.log(city);
    

    const answerAPI = process.env.GET_ANSWER_BY_CITY_API || ''
    const answerRes = await fetch(answerAPI + city_id)
    const answers = await answerRes.json()

    console.log(answers);
    

    return (
        <div>
            {city.name}
            {answers.map((answer : Answer) => {
                return(
                    <div>
                        {answer.total}
                    </div>
                )
            })}
        </div>
    );
};

export default CityDropdown;
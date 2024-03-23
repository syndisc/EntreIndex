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

    const answerAPI = process.env.GET_ANSWER_BY_CITY_API || ''
    const answerRes = await fetch(answerAPI + city_id)
    const answers = await answerRes.json()

    const q2 = (limit.highest - limit.lowest) / 2 + limit.lowest
    const q1 = (q2 - limit.lowest) / 2 + limit.lowest
    const q3 = (limit.highest - q2) / 2 + q2

    return (
        <div>
            {city.name}
            <div className='p-6 bg-white rounded-3xl grid grid-cols-data gap-2'>
                {answers.map((answer : Answer) => {

                    let colorStyle: React.CSSProperties = {};

                    if (answer.total < q1) {
                        colorStyle.backgroundColor = 'red';
                    } else if (answer.total >= q1 && answer.total < q2) {
                        colorStyle.backgroundColor = 'orange';
                    } else if (answer.total >= q2 && answer.total < q3) {
                        colorStyle.backgroundColor = 'yellow';
                    } else {
                        colorStyle.backgroundColor = 'green';
                    }

                    return(
                        <div className='p-2 text-black flex justify-center content-center flex-nowrap rounded-full' style={colorStyle}  key={answer.id}>
                            {answer.total}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default CityDropdown;
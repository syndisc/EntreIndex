import React from 'react';
import { City } from '../model/province';
import { Answer } from '../model/form';
import RadarChart from '../component/radarChart';

interface Dropdown {
    city_id: number;
    limit : {
        highest : number,
        lowest : number
    }
}

interface AnswerDimension {
    dimensi_1 : number,
    dimensi_2 : number,
    dimensi_3 : number,
    dimensi_4 : number,
    dimensi_5 : number
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

    let data = {
        // dimension
        dimensi_x1 : 0,
        dimensi_x2 : 0,
        dimensi_x3 : 0,
        dimensi_x4 : 0,
        dimensi_x5 : 0,
    }
    answers.forEach((answer : AnswerDimension )=> {
        data.dimensi_x1 += answer.dimensi_1
        data.dimensi_x2 += answer.dimensi_2
        data.dimensi_x3 += answer.dimensi_3
        data.dimensi_x4 += answer.dimensi_4
        data.dimensi_x5 += answer.dimensi_5
    });

    const length = answers.length

    const arrayOfData = [data.dimensi_x1 / length, data.dimensi_x2 / length, data.dimensi_x3 / length, data.dimensi_x3/ length, data.dimensi_x4/ length, data.dimensi_x5/ length]

    return (
        <div>
            {city.name}
            {answers.length > 0 ? <RadarChart total={arrayOfData} city_name={city.name}/> : ""}
            <div className='p-6 bg-white rounded-3xl grid grid-cols-data gap-2'>
                {answers.map((answer : Answer) => {

                    let colorStyle: React.CSSProperties = {};

                    if (answer.total < q1) {
                        colorStyle.backgroundColor = 'red';
                        colorStyle.color = 'white'
                    } else if (answer.total >= q1 && answer.total < q2) {
                        colorStyle.backgroundColor = 'orange';
                    } else if (answer.total >= q2 && answer.total < q3) {
                        colorStyle.backgroundColor = 'yellow';
                    } else {
                        colorStyle.backgroundColor = 'green';
                        colorStyle.color = 'white'
                    }

                    return(
                        <div className='p-3 border-2 text-black flex justify-center content-center flex-nowrap rounded-full' style={colorStyle}  key={answer.id}>
                            {answer.total}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default CityDropdown;
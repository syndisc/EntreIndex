"use client"
import React from 'react';
import { City } from '../model/province';
import { Answer } from '../model/form';
import RadarChart from '../component/radarChart';
import PieChart from '../component/pieChat';

interface Dropdown {
    city_id: number;
}



const CityDropdown: React.FC<Dropdown> = async({city_id}) => {
    const api = process.env.GET_CITY_API ? process.env.GET_CITY_API + city_id: ''
    const res = await fetch(api)
    const city = await res.json()  

    const answerAPI = process.env.GET_CITY_PERCENTAGE || ''
    const answerRes = await fetch(answerAPI + city_id)
    const answers = await answerRes.json()

    console.log("This is city percentange of: ", city.name, "with total of" , answers)
    const data = []
    data.push(answers.q1)
    data.push(answers.q2)
    data.push(answers.q3)
    data.push(answers.q4)

    type DataType = [] | { q1: number; q2: number; q3: number; q4: number };

    function isArrayEmpty(data: DataType): boolean {
        return Array.isArray(data) && data.length === 0;
      }

    if(isArrayEmpty(answers)){
        return(
            <div></div>
        )
    }

    return (
        <div className='flex mt-2 h-full w-full'>
            <div className='p-2 bg-white rounded-3xl w-full'>
                <PieChart city_name={city.name} total={data}/>
            </div>
        </div>
    );
};

export default CityDropdown;
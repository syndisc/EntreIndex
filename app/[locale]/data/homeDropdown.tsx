import React from 'react'
import ProvinceDropdown from './provinceDropdown'
import { Province } from '../model/province'
import { ChangeSpace } from '../utility/utility'

const HomeDropdown = async() => {

    const api = process.env.GET_PROVINCE_API || ''
    const res = await fetch(api)
    const provinces = await res.json()   

    return (
        <div>
            {provinces.map((province : Province) => {
                return(
                    <div key={province.id} className='mb-2 border p-6 rounded-3xl bg-blueSecond'>
                        <div className="text-2xl font-semibold" >
                            {ChangeSpace(province.name)}
                        </div>
                        <ProvinceDropdown province_id={province.id}/>
                    </div>
                )
            })}
            
        </div>
    )
}

export default HomeDropdown

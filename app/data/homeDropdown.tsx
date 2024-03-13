import React from 'react'
import ProvinceDropdown from './provinceDropdown'
import { Province } from '../model/province'
import { ChangeSpace } from '../utility/utility'

const HomeDropdown = async() => {

    const api = process.env.GET_PROVINCE_API || ''
    const res = await fetch(api)
    const provinces = await res.json()

    const totalApi = process.env.GET_MIN_MAX_TOTAL_API || ''
    const totalRes = await fetch(totalApi)
    const total = await totalRes.json()

    const limit = {
        highest : total.highest[0].total,
        lowest : total.lowest[0].total
    }

    return (
        <div>
            {provinces.map((province : Province) => {
                return(
                    <div key={province.id} className='mb-2 border p-6 rounded-3xl bg-accentLight'>
                        <div className="text-2xl font-semibold" >
                            {ChangeSpace(province.name)}
                        </div>
                        <ProvinceDropdown province_id={province.id} limit={limit}/>
                    </div>
                )
            })}
            
        </div>
    )
}

export default HomeDropdown

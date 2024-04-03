"use client"
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { surveyJson2} from './survey'

import { City, Province } from '../model/province';
import { ChangeSpace } from '../utility/utility';
import { SendAPIRequest } from '../utility/apiController';
import { User } from '../model/user';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '../utility/loading';
import Navbar from '../component/navbar';

const FormPage = () => {

    interface Page{
        number : Number,
        name : string
    }

    const [provinces, setProvince] = useState<[Province]>()
    const [cities, setCities] = useState<[City]>()
    const [chosenProvince, setChosenProvince] = useState<String>("1")
    const [chosenCities, setChosenCities] = useState<String>("1")
    const [page, setPage] = useState<Page>({
        number : 1,
        name : "Next"
    })

    const [user, setUser] = useState<User>()

    const router = useRouter()

    const survey = new Model(surveyJson2);

    useEffect(() => {
        async function LoadData(){
            const provinceAPI = process.env.GET_PROVINCE_API || ""
            const provinceRes = await fetch(provinceAPI)
            const provinceData : [Province] = await provinceRes.json()

            const cityAPI = process.env.GET_TOWN_API || ""
            const cityRes = await fetch(cityAPI + 1)
            const cityData : [City] = await cityRes.json()

            setCities(cityData)

            setProvince(provinceData)

            const authCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('auth='));

            if (authCookie) {
                const [, cookieValue] = authCookie.split("=");
                const userAPI = process.env.DECODE_TOKEN_API ? process.env.DECODE_TOKEN_API + cookieValue : "";
                const userRes = await fetch(userAPI);
                const user = await userRes.json();
                setUser(user);
            
            }
        }
        LoadData()
    }, [])

    const alertResults = ((sender: any) => {
        const partA = (({ sector, jenis, status, pendidikan, pengalaman }) => ({ sector, jenis, status, pendidikan, pengalaman }))(sender.data);
        const partB = (({ sector, jenis, status, pendidikan, pengalaman, ...rest }) => rest)(sender.data);

        const profile = Object.values(partA).join(', ')
        const answer = Object.values(partA).join(', ')
        const total = Object.values(partB).reduce((acc: any, curr: any) => acc + curr, 0)
                
        const data = {
            user_id : user?.id,
            city_id : parseInt(chosenCities.toString()),
            answer : answer,
            profile : profile,
            total : total
        }

        const answerAPI = process.env.SUBMIT_FORM_API || ""
        SendAPIRequest(answerAPI, "POST", data)
        router.push("/en/answer")
    });
    
    survey.onComplete.add(alertResults);

    function ChangeProvince(event : ChangeEvent<HTMLSelectElement>){
        setChosenProvince(event.target.value)

        async function LoadCity(){
            const cityAPI = process.env.GET_TOWN_API || ""
            const cityRes = await fetch(cityAPI + chosenProvince)
            const cityData : [City] = await cityRes.json()

            setCities(cityData)
        }
        LoadCity()
    }
    function ChangeCity(event : ChangeEvent<HTMLSelectElement>){
        setChosenCities(event.target.value)
    }

    function ChangePage(){
        if(page.number == 1){
            setPage({
                number : 2,
                name: "Previous"
            })
        }
        else{
            setPage({
                number : 1,
                name: "Next"
            })
        }
    }

    if(!provinces){
        return(
            <div>
                <LoadingSpinner/>
            </div>
        )
    }
    
    return (
        <div className='bg-gradient-to-br  from-blueThird to-blueFourth'>
            <Navbar/>
            {page.number == 1 ? 
            <div className='flex flex-col flex-nowrap w-full h-93.2vh justify-center items-center align-middle'>
                <div className='w-1/2 flex items-start font-bold text-xl'>
                    Domisili usaha di Provinsi
                </div>
                <select name="" id="" onChange={ChangeProvince} className='w-1/2 mb-6 h-16 rounded-3xl p-2'>
                    {provinces.map((province) => {
                        return(
                            <option key={province.id} value={province.id}>{ChangeSpace(province.name)}</option>
                        )
                    })}
                </select>
                <div className='w-1/2 flex items-start font-bold text-xl'>
                    Domisili usaha di Kabupaten/Kota
                </div>
                <select name="" id="" onChange={ChangeCity} className='w-1/2  mb-6 h-16 rounded-3xl p-2'>
                    {cities?.map((city) => {
                        return(
                            <option key={city.id} value={city.id}>{ChangeSpace(city.name)}</option>
                        )
                    })}
                </select>
                <button className='rounded-3xl h-16 bg-blueThird w-1/2 ' onClick={ChangePage}>
                    {page.name}
                </button>
            </div>
            : <div className='w-full justify-center flex flex-col items-center'><Survey model={survey} />
            <button className='w-auto p-2 m-4 rounded-3xl h-10 bg-blueThird' onClick={ChangePage}>
                    {page.name}
                </button>
                </div>}
            
        </div>
    )
    
}

export default FormPage
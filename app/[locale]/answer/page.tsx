"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import { User } from '../model/user'
import CardLineChart from '../component/LineChart'
import { Answer } from '../model/form'
import RadarChart from '../component/radarChart'

const FormPage = () => {

    const [user, setUser] = useState<User>({
        id : 0,
        first_name :"",
        last_name : ""
    })
    const [cityData, setCityData] = useState<number[]>()
    const [provData, setProvData] = useState<number[]>()
    const [lastAnswerData, setLastAnswerData] = useState<number[]>()
    const [cityName, setCityName] = useState<string>()

    useEffect(() => {
        async function LoadUser(){
             const authCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('auth='));

            if (authCookie) {
                const [, cookieValue] = authCookie.split("=");
                const userAPI = process.env.DECODE_TOKEN_API ? process.env.DECODE_TOKEN_API + cookieValue : "";
                const userRes = await fetch(userAPI);
                const user = await userRes.json();
                setUser(user);
                
                const data = JSON.parse(sessionStorage.getItem("answer") || "")
                // console.log(data)

                const cityAPI = process.env.GET_CITY_API + data.city_id
                const cityRes = await fetch(cityAPI)
                const city = await cityRes.json()
                const provinceId = city.province_id
                // console.log(city)
                setCityName(city.name)

                // console.log(provinceId) 

                const avgProvAPI = process.env.GET_AVERAGE_PROVINCE_DIMENSION || ""
                const avgProvRes = await fetch(avgProvAPI + provinceId)
                const avgProv = await avgProvRes.json()

                const avgCityAPI = process.env.GET_AVERAGE_CITY_DIMENSION || ""
                const avgCityRes = await fetch(avgCityAPI + data.city_id)
                const avgCity = await avgCityRes.json()

                const lastUserAnswerAPI = process.env.GET_LAST_USER_ANSWER || ""
                const lastUserAnswerRes = await fetch(lastUserAnswerAPI + user.id)
                const lastUserAnswer = await lastUserAnswerRes.json()

                console.log(avgCity)
                console.log(avgProv)
                // console.log(lastUserAnswer)

                const cityData = [avgCity[0].dim_1, avgCity[0].dim_2, avgCity[0].dim_3, avgCity[0].dim_4, avgCity[0].dim_5]
                const provData = [avgProv[0].dim_1, avgProv[0].dim_2, avgProv[0].dim_3, avgProv[0].dim_4, avgProv[0].dim_5]
                const userData = [lastUserAnswer.dimensi_1, lastUserAnswer.dimensi_2, lastUserAnswer.dimensi_3, lastUserAnswer.dimensi_4, lastUserAnswer.dimensi_5]

                console.log(cityData)
                console.log(provData)
                console.log(userData)

                setCityData(cityData)
                setProvData(provData)
                setLastAnswerData(userData)
            }
        }
        LoadUser()
    }, [])

    return (
        <div className='h-auto w-screen bg-primaryLight dark:bg-primaryDark'>
            <Navbar/>
            <div className='h-80vh w-screen flex justify-center content-center flex-wrap bg-white'>
                <RadarChart city={cityData} prov={provData} user={lastAnswerData}/>
            </div>
        </div>
    )
}

export default FormPage

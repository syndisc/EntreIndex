"use client"
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { surveyJson2 } from './survey'

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
        const partA = (({ sector, jenis, status, kelamin, usia, pendidikan, pengalaman }) => ({ sector, jenis, status, kelamin, usia, pendidikan, pengalaman }))(sender.data);
        const partB = (({ sector, jenis, status, kelamin, usia, pendidikan, pengalaman, ...rest }) => rest)(sender.data);

        const profile = Object.values(partA).join(',')
        const answer = Object.values(partB).join(',')
        console.log(partB)
        let sum = 0;

// Iterate through each key-value pair in the dictionary
        for (const key in partB) {
            if (partB.hasOwnProperty(key)) {
                // Convert the value to a number and add it to the sum
                sum += Number(partB[key]);
            }
        }

                
        const data = {
            user_id : user?.id || 1,
            city_id : parseInt(chosenCities.toString()),
            answer : answer,
            profile : profile,
            total : sum
        }

        sessionStorage.setItem("answer", JSON.stringify(data))

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

    const selectAll = (answer: string) => {
        const data: { [key: string]: string } = {};
        // console.log(survey.getAllQuestions())
        survey.getAllQuestions().forEach((question) => {
            !isNaN(parseInt(question.name)) ? data[question.name] = answer : data[question.name] = question.value
            // console.log(data[question.name])
        });
        survey.data = data;
    };
    
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
            : <div className='w-full justify-center flex flex-col items-center'>
                <div className='w-1/2 flex justify-evenly'> 
                    <button className='border p-2 bg-white rounded-2xl' onClick={() => selectAll('1')}>Sangat Tidak Setuju</button>
                    <button className='border p-2 bg-white rounded-2xl' onClick={() => selectAll('2')}>Tidak Setuju</button>
                    <button className='border p-2 bg-white rounded-2xl' onClick={() => selectAll('3')}>Sedikit Tidak Setuju</button>
                    <button className='border p-2 bg-white rounded-2xl' onClick={() => selectAll('4')}>Sedikit Setuju</button>
                    <button className='border p-2 bg-white rounded-2xl' onClick={() => selectAll('5')}>Setuju</button>
                    <button className='border p-2 bg-white rounded-2xl' onClick={() => selectAll('6')}>Sangat Setuju</button>
                </div>
                <Survey model={survey} />
            <button className='w-auto p-2 m-4 rounded-3xl h-10 bg-blueThird' onClick={ChangePage}>
                    {page.name}
                </button>
                </div>}
            
        </div>
    )
    
}

export default FormPage
"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import { User } from '../model/user'
import CardLineChart from '../component/LineChart'
import { Answer } from '../model/form'

interface AnswerChart{
    createdAt : [string],
    total : [number]
}

const FormPage = () => {

    const [chartData, setChartData] = useState<AnswerChart>()

    const [user, setUser] = useState<User>({
        id : 0,
        first_name :"",
        last_name : ""
    })

    useEffect(() => {
        async function LoadUser(){
             const authCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('auth='));

            if (authCookie) {
                const [, cookieValue] = authCookie.split("=");
                const userAPI = process.env.DECODE_TOKEN_API ? process.env.DECODE_TOKEN_API + cookieValue : "";
                const userRes = await fetch(userAPI);
                const user = await userRes.json();
                setUser(user);
                
                const answersAPI = process.env.GET_USER_ANSWER_API ? process.env.GET_USER_ANSWER_API + user.id : ""
                const answersRes = await fetch(answersAPI)
                const answers = await answersRes.json()

                const labels = answers.map((answer : Answer) =>{
                    const date = new Date(answer.createdAt);

                    const day = date.getDate().toString().padStart(2, '0');
                    const month = (date.getMonth() + 1).toString().padStart(2, '0');
                    const year = date.getFullYear();

                    const formattedDate = `${day}:${month}:${year}`;
                    return formattedDate
                } )
                const data = answers.map((answer : Answer) => answer.total)

                setChartData({createdAt: labels, total:data})       
            }
        }
        LoadUser()
    }, [])

    return (
        <div className='h-auto w-screen bg-primaryLight dark:bg-primaryDark'>
            <Navbar/>
            <div className='h-93.2vh w-screen flex justify-center content-center flex-wrap'>
                <div className='h-85vh w-6/12 bg-secondaryLight dark:bg-secondaryDark p-6 overflow-y-auto rounded-3xl shadow-2xl'>
                    <CardLineChart label={chartData ? chartData?.createdAt : [""]} total={chartData ? chartData?.total : [0]} user_name={user? user.first_name : ''}/>
                </div>
            </div>
        </div>
    )
}

export default FormPage

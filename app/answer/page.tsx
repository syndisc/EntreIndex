"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import { Answer } from '../model/form'
import { User } from '../model/user'

const FormPage = () => {

    const [answers, setAnswers] = useState<[Answer]>([{
        id : 0,
        user_id : 0,
        city_id : 0,
        answer : "",
        profile : ""
    }])

    const [user, setUser] = useState<User>()

    useEffect(() => {
        async function LoadUser(){
            const cookie = document.cookie
            const [cookieName, cookieValue] = cookie.split("=")
            const userAPI = process.env.DECODE_TOKEN_API ? process.env.DECODE_TOKEN_API + cookieValue: ""
            const userRes = await fetch(userAPI)
            const user = await userRes.json()
            setUser(user)

            const answersAPI = process.env.GET_USER_ANSWER_API ? process.env.GET_USER_ANSWER_API + user.id : ""
            const answersRes = await fetch(answersAPI)
            const answers = await answersRes.json()
            setAnswers(answers)

        }

        LoadUser()
    }, [])

    if(!answers){
        return(
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div className='h-auto w-screen bg-primaryLight dark:bg-primaryDark'>
        <Navbar/>
            <div className='h-93.2vh w-screen flex justify-center content-center flex-wrap'>
                <div className='h-85vh w-6/12 bg-secondaryLight dark:bg-secondaryDark p-6 overflow-y-auto rounded-3xl'>
                    {answers.map((answer) => {
                        return(
                            <div key={answer.id}>
                                {answer.answer}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FormPage
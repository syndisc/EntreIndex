"use client"
import Navbar from '@/app/component/navbar'
import { UserProfile } from '@/app/model/user';
import { SendAPIRequest } from '@/app/utility/apiController';
import Image from 'next/image';
import Link from 'next/link';
import React, { ChangeEvent, useState } from 'react'

const UserProfilePage = () => {

    const [user, setUser] = useState<UserProfile>({
        id: "",
        company: "",
        email : "",
        first_name: "",
        last_name: "",
        password : "",
        gender : "",
        phone_number : ""
    })

    function BodyBuilder(){
        return{
            firstName: user?.first_name,
            lastName: user?.last_name,
            email: user?.email,
            password: user?.password,
            companyName: user?.company,
            gender: user?.gender,
            phoneNumber: user?.phone_number
        }
    }

    function handleChanges(event : ChangeEvent<HTMLInputElement>){
        setUser({
          ...user,
          [event.target.name] : event.target.value
        })
    }

    function logOut(){
        console.log("asd");
        
        document.cookie = "auth=; expires=Wed, 05 Aug 2020 23:00:00 UTC";
    }

    return (
        <div className='w-screen h-screen'>
            <Navbar/>
            <div className='w-full h-93.2vh flex flex-wrap justify-center content-center bg-primaryLight dark:bg-primaryDark'>
                <div className='bg-secondaryLight dark:bg-secondaryDark w-2/5 h-3/4 p-6 rounded-3xl'>
                    <div className='font-bold text-3xl font-mono mb-6'>
                        Profile Page
                    </div>
                    {/* content */}
                    <div className='flex justify-between'>
                        {/* left part */}
                        <div className='w-1/4'>
                            <Image width={100} height={100} className='w-full aspect-square object-contain rounded-full border' src="/images/logo.png" alt="hello" />
                        </div>
                        {/* right part */}
                        <div className='w-2/3'>
                            {/* name */}
                            <div className='flex justify-between mb-2'>
                                <div className='w-5/12'>
                                    <div className='text-xl font-bold font-mono'>
                                        First Name
                                    </div>
                                    <input type="text" name='first_name' className='border rounded p-2 w-full' onChange={(e) => {
                                        handleChanges(e)
                                    }}/>
                                </div>
                                <div className='w-5/12'>
                                    <div className='text-xl font-bold font-mono'>
                                        Last Name
                                    </div>
                                    <input type="text" name='last_name' className='border rounded p-2 w-full' onChange={(e) => {
                                        handleChanges(e)
                                    }}/>
                                </div>
                            </div>
                            <div className='w-full mb-2'>
                                <div className='text-xl font-bold font-mono'>
                                    Email
                                </div>
                                <div>
                                    <input type="email" name="email" id="email" className='border rounded p-2 w-full' onChange={(e) => {
                                        handleChanges(e)
                                    }}/>
                                </div>
                            </div>
                            <div className='w-full mb-2'>
                                <div className='text-xl font-bold font-mono'>
                                    Password
                                </div>
                                <div>
                                    <input type="password" name="password" id="" className='border rounded p-2 w-full' onChange={(e) => {
                                        handleChanges(e)
                                    }}/>
                                </div>
                            </div>
                            <div className='w-full mb-2'>
                                <div className='text-xl font-bold font-mono'>
                                    Company Name
                                </div>
                                <div>
                                    <input type="text" name="company" id="" className='border rounded p-2 w-full' onChange={(e) => {
                                        handleChanges(e)
                                    }}/>
                                </div>
                            </div>
                            <div className='w-full mb-2'>
                                <div className='text-xl font-bold font-mono'>
                                    Gender
                                </div>
                                <div>
                                    <input type="text" name="gender" id="" className='border rounded p-2 w-full' onChange={(e) => {
                                        handleChanges(e)
                                    }}/>
                                </div>
                            </div>
                            <div className='w-full mb-2'>
                                <div className='text-xl font-bold font-mono'>
                                    Phone Number
                                </div>
                                <div>
                                    <input type="text" name="phone_number" id="" className='border rounded p-2 w-full' onChange={(e) => {
                                        handleChanges(e)
                                    }}/>
                                </div>
                            </div>
                            <div className='w-full mb-2 mt-6 flex justify-between'>
                                <Link href="/user/login" className='border rounded-xl w-5/12 bg-red-500 text-white font-semibold font-mono'>
                                    <button className='w-full h-full p-2' onClick={logOut}>
                                        Log Out
                                    </button>
                                </Link>
                                <button className='border rounded-xl w-5/12 p-2' onClick={() => {
                                    SendAPIRequest("aa", "POST", BodyBuilder())
                                }}>
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfilePage
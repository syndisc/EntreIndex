"use client"
import Navbar from '@/app/component/navbar'
import { SendAPIRequest } from '@/app/utility/apiController';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const UserProfile = () => {

    const [firstName, setFirstName] = React.useState<String>("");
    const [lastName, setLastName] = React.useState<String>("");
    const [email, setEmail] = React.useState<String>("");
    const [password, setPassword] = React.useState<String>("");
    const [companyName, setCompanyName] = React.useState<String>("");
    const [gender, setGender] = React.useState<String>("");
    const [phoneNumber, setPhoneNumber] = React.useState<String>("");

    function BodyBuilder(){
        return{
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            companyName: companyName,
            gender: gender,
            phoneNumber: phoneNumber
        }
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
                                    <input type="text" className='border rounded p-2 w-full' onChange={(e) => {
                                        setFirstName(e.target.value)
                                    }}/>
                                </div>
                                <div className='w-5/12'>
                                    <div className='text-xl font-bold font-mono'>
                                        Last Name
                                    </div>
                                    <input type="text" className='border rounded p-2 w-full' onChange={(e) => {
                                        setLastName(e.target.value)
                                    }}/>
                                </div>
                            </div>
                            <div className='w-full mb-2'>
                                <div className='text-xl font-bold font-mono'>
                                    Email
                                </div>
                                <div>
                                    <input type="email" name="" id="" className='border rounded p-2 w-full' onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}/>
                                </div>
                            </div>
                            <div className='w-full mb-2'>
                                <div className='text-xl font-bold font-mono'>
                                    Password
                                </div>
                                <div>
                                    <input type="password" name="" id="" className='border rounded p-2 w-full' onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}/>
                                </div>
                            </div>
                            <div className='w-full mb-2'>
                                <div className='text-xl font-bold font-mono'>
                                    Company Name
                                </div>
                                <div>
                                    <input type="text" name="" id="" className='border rounded p-2 w-full' onChange={(e) => {
                                        setCompanyName(e.target.value)
                                    }}/>
                                </div>
                            </div>
                            <div className='w-full mb-2'>
                                <div className='text-xl font-bold font-mono'>
                                    Gender
                                </div>
                                <div>
                                    <input type="text" name="" id="" className='border rounded p-2 w-full' onChange={(e) => {
                                        setGender(e.target.value)
                                    }}/>
                                </div>
                            </div>
                            <div className='w-full mb-2'>
                                <div className='text-xl font-bold font-mono'>
                                    Phone Number
                                </div>
                                <div>
                                    <input type="text" name="" id="" className='border rounded p-2 w-full' onChange={(e) => {
                                        setPhoneNumber(e.target.value)
                                    }}/>
                                </div>
                            </div>
                            <div className='w-full mb-2 mt-6 flex justify-between'>
                                <Link href="/user/login" className='border rounded-xl w-5/12 bg-red-500 text-white font-semibold font-mono'>
                                    <button className='w-full h-full p-2'>
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

export default UserProfile
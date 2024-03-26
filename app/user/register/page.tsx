"use client"
import React, { useState } from 'react';
import {RegisterField, RegisterDropdown } from "@/app/component/form/registerForm";
import Link from "next/link";
import { Register } from '@/app/model/user';
import { SendAPIRequest, SendAuthRequest } from '@/app/utility/apiController';
import { RegisterFieldProps } from '@/app/model/form';
import { gender } from '@/app/utility/data';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const RegisterPage = () => {

  const [registerData, setRegisterData] = useState<Register>({
    first_name : "",
    last_name : "",
    phone_number : "",
    gender : "Male",
    company : "",
    email : "",
    password : "",
    dob : ""
  })

  const handleFieldChange = (fieldName: string, value: string) => {

    setRegisterData(prevData => ({
      ...prevData, [fieldName] : value
    }))
    
  };

  const router = useRouter()

  const handleRegister = () => { 
    const api = process.env.REGISTER_API ? process.env.REGISTER_API : ""
    SendAuthRequest(api, registerData, router)
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-cyan-600 to-blue-900  p-2 flex justify-center content-center flex-wrap">
      <div className="w-3/5 flex h-2/3">
        <div className="w-full lg:w-1/2 h-full bg-white p-2 rounded-l-3xl rounded-r-3xl lg:rounded-r-none flex justify-center content-center flex-wrap flex-col">
          <div className="text-textLight dark:text-textDark h-auto w-2/3">
            <div className="text-5xl font-bold">Register Page</div>

            {/* Name */}
            <div className='flex mt-2 justify-between'>
              <div className="flex flex-col w-47.5/100">
                <label htmlFor="">{"First Name"}</label>
                <input type="text" onChange={(e) => {
                  handleFieldChange("first_name", e.target.value)
                }} className="border rounded-3xl py-1 px-2 dark:text-black"/>
              </div>
              <div className="flex flex-col w-47.5/100">
                <label htmlFor="">{"Last Name"}</label>
                <input type="text" onChange={(e) => {
                  handleFieldChange("last_name", e.target.value)
                }} className="border rounded-3xl py-1 px-2 dark:text-black"/>
              </div>
            </div>

            {/* Phone number */}
            <div className="flex flex-col w-full">
              <label htmlFor="">{"Phone Number"}</label>
              <input type="text" onChange={(e) => {
                handleFieldChange("phone_number", e.target.value)
              }} className="border rounded-3xl py-1 px-2 dark:text-black"/>
            </div>

            <RegisterDropdown label='Gender' options={gender} onChange={(value: string) => handleFieldChange('gender', value)}/>

            {/* Company */}
            <div className="flex flex-col w-full">
              <label htmlFor="">{"Company"}</label>
              <input type="text" onChange={(e) => {
                handleFieldChange("company", e.target.value)
              }} className="border rounded-3xl py-1 px-2 dark:text-black"/>
            </div>

            {/* Email */}
            <div className="flex flex-col w-full">
              <label htmlFor="">{"Email"}</label>
              <input type="email" onChange={(e) => {
                handleFieldChange("email", e.target.value)
              }} className="border rounded-3xl py-1 px-2 dark:text-black"/>
            </div>

            {/* Password */}
            <div className="flex flex-col w-full">
              <label htmlFor="">{"Password"}</label>
              <input type="password" onChange={(e) => {
                handleFieldChange("password", e.target.value)
              }} className="border rounded-3xl py-1 px-2 dark:text-black"/>
            </div>

            {/* DoB */}
            <div className="flex flex-col w-full">
              <label htmlFor="">{"Date of Birth"}</label>
              <input type="date" onChange={(e) => {
                handleFieldChange("dob", e.target.value)
              }} className="border rounded-3xl py-1 px-2 w-full dark:text-black"/>
            </div>

            <label htmlFor="" className="flex mt-2">
              <div>Already have an account?</div>
              <Link href={"login"} className='pl-2 text-blue-400 font-bold'>Login</Link>
            </label>
            <div className='w-full mt-2'>
              <button className='w-full border rounded-3xl p-2 bg-green-400' onClick={handleRegister}>Register</button>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full hidden lg:flex justify-center content-center flex-wrap p-2 bg-cyan-600 rounded-r-3xl">
          <Image height={1000} width={1000} src="/images/regis.png" alt="Not found" className="h-full w-4/5" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

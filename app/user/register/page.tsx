"use client"
import React, { useState } from 'react';
import {RegisterField, RegisterDropdown } from "@/app/component/form/registerForm";
import Link from "next/link";
import { Register } from '@/app/model/user';
import { SendAPIRequest } from '@/app/utility/apiController';
import { RegisterFieldProps } from '@/app/model/form';
import { gender } from '@/app/utility/data';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {

  const [registerData, setRegisterData] = useState<Register>({
    first_name : "",
    last_name : "",
    phone_number : "",
    gender : "Male",
    company : "",
    email : "",
    password : ""
  })

  const handleFieldChange = (fieldName: string, value: string) => {

    setRegisterData(prevData => ({
      ...prevData, [fieldName] : value
    }))
    
  };

  const registerFields: RegisterFieldProps[] = [
    { label: "First Name", type: "text", onChange: (value: string) => handleFieldChange("first_name", value) },
    { label: "Last Name", type: "text", onChange: (value: string) => handleFieldChange("last_name", value) },
    { label: "Email", type: "email",  onChange: (value: string) => handleFieldChange("email", value) },
    { label: "Password", type: "password",  onChange: (value: string) => handleFieldChange("password", value) },
    { label: "Company", type: "text", onChange: (value: string) => handleFieldChange("company", value) },
    { label: "Phone Number", type: "text", onChange: (value: string) => handleFieldChange("phone_number", value) },
  ];

  const router = useRouter()

  const handleRegister = () => { 
    const api = process.env.REGISTER_API ? process.env.REGISTER_API : ""
    SendAPIRequest(api, "POST", registerData, true, router)
  };

  return (
    <div className="w-screen h-screen bg-primaryLight dark:bg-primaryDark p-2 flex justify-center content-center flex-wrap">
      <div className="w-3/5 flex h-2/3">
        <div className="w-1/2 h-full bg-secondaryLight dark:bg-secondaryDark p-2 rounded-l-3xl flex justify-center content-center flex-wrap flex-col">
          <div className="text-textLight dark:text-textDark h-auto w-2/3">
            <div className="text-6xl font-bold">Register Page</div>
            {registerFields.map((field, index) => (
              <RegisterField key={index} {...field} />
            ))}
              <RegisterDropdown label='Gender' options={gender} onChange={(value: string) => handleFieldChange('gender', value)}/>
            <label htmlFor="" className="flex">
              <div>Already have an account?</div>
              <Link href={"login"} className='pl-2'>Login</Link>
            </label>
            <div className='w-full'>
              <button className='w-full border rounded-3xl p-2' onClick={handleRegister}>Register</button>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center content-center flex-wrap p-2 bg-accentLight dark:bg-accentDark rounded-r-3xl">
          <img src="/images/login.webp" alt="Not found" className="h-4/5 w-4/5" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

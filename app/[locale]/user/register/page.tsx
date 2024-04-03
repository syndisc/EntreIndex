"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { Register } from '@/app/[locale]/model/user';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { SendRegisterRequest } from '../../utility/apiController';
import { gender } from '../../utility/data';
import { RegisterDropdown } from '../../component/form/registerForm';
import { useTranslations } from 'next-intl';

const RegisterPage = () => {

  const t = useTranslations('Index')

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
    SendRegisterRequest(api, registerData, router)
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br  from-blueThird to-blueFourth  p-2 flex justify-center content-center flex-wrap">
      <div className="w-3/5 flex h-2/3">
        <div className="w-full lg:w-1/2 h-full bg-white p-2 rounded-l-3xl rounded-r-3xl lg:rounded-r-none flex justify-center content-center flex-wrap flex-col">
          <div className="text-textLight dark:text-textDark h-auto w-2/3">
            <div className="text-5xl font-bold">{t('register_page')}</div>

            {/* Name */}
            <div className='flex mt-2 justify-between'>
              <div className="flex flex-col w-47.5/100">
                <label htmlFor="">{t('first_name')}</label>
                <input type="text" onChange={(e) => {
                  handleFieldChange("first_name", e.target.value)
                }} className="border rounded-3xl py-1 px-2 dark:text-textLight"/>
              </div>
              <div className="flex flex-col w-47.5/100">
                <label htmlFor="">{t('last_name')}</label>
                <input type="text" onChange={(e) => {
                  handleFieldChange("last_name", e.target.value)
                }} className="border rounded-3xl py-1 px-2 dark:text-textLight"/>
              </div>
            </div>

            {/* Phone number */}
            <div className="flex flex-col w-full">
              <label htmlFor="">{t('phone_number')}</label>
              <input type="text" onChange={(e) => {
                handleFieldChange("phone_number", e.target.value)
              }} className="border rounded-3xl py-1 px-2 dark:text-textLight"/>
            </div>

            <RegisterDropdown label='Gender' options={gender} onChange={(value: string) => handleFieldChange('gender', value)}/>

            {/* Company */}
            <div className="flex flex-col w-full">
              <label htmlFor="">{t('company')}</label>
              <input type="text" onChange={(e) => {
                handleFieldChange("company", e.target.value)
              }} className="border rounded-3xl py-1 px-2 dark:text-textLight"/>
            </div>

            {/* Email */}
            <div className="flex flex-col w-full">
              <label htmlFor="">{"Email"}</label>
              <input type="email" onChange={(e) => {
                handleFieldChange("email", e.target.value)
              }} className="border rounded-3xl py-1 px-2 dark:text-textLight"/>
            </div>

            {/* Password */}
            <div className="flex flex-col w-full">
              <label htmlFor="">{t('password')}</label>
              <input type="password" onChange={(e) => {
                handleFieldChange("password", e.target.value)
              }} className="border rounded-3xl py-1 px-2 dark:text-textLight"/>
            </div>

            {/* DoB */}
            <div className="flex flex-col w-full">
              <label htmlFor="">{t('date_of_birth')}</label>
              <input type="date" onChange={(e) => {
                handleFieldChange("dob", e.target.value)
              }} className="border rounded-3xl py-1 px-2 w-full dark:text-textLight"/>
            </div>

            <label htmlFor="" className="flex mt-2">
              <div>{t('auth_question_register')}</div>
              <Link href={"login"} className='pl-2 text-blue-400 font-bold'>{t('click_here')}</Link>
            </label>
            <div className='w-full mt-2'>
              <button className='w-full border rounded-3xl p-2  bg-blueThird hover:bg-blueSecond' onClick={handleRegister}>{t('register')}</button>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full hidden lg:flex justify-center content-center flex-wrap p-2 bg-blueSecond rounded-r-3xl">
          <Image height={1000} width={1000} src="/images/regis.png" alt="Not found" className="h-full w-4/5" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

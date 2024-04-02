'use client'
import { Login } from '@/app/[locale]/model/user';
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, HTMLInputTypeAttribute } from 'react'
import { SendAuthRequest } from '../../utility/apiController';
import { useTranslations } from 'next-intl';

const LoginPage = () => {

  const t = useTranslations('Index')

  const [loginData, setLoginData] = React.useState<Login>({
    email: "",
    password: ""
  })

  const [fieldType, setFieldType] = React.useState<HTMLInputTypeAttribute>("Password")

  function handleChanges(event : ChangeEvent<HTMLInputElement>){
    setLoginData({
      ...loginData,
      [event.target.name] : event.target.value
    })
  }

  const router = useRouter()

  function login(){
    const api = process.env.LOGIN_API ? process.env.LOGIN_API : ""
    
    SendAuthRequest(api, loginData, router)
  }

  return (
    <div className='w-screen h-screen  p-2 flex justify-center content-center flex-wrap bg-gradient-to-br from-blueThird to-blueFourth'>
      <div className='w-3/5 flex h-auto shadow-2xl rounded-3xl'>
        <div className='w-1/2 h-full hidden lg:flex justify-center content-center flex-wrap p-6 bg-blueSecond rounded-l-3xl '>
          <Image width={1000} height={1000} src="/images/login.png" alt="Not found" className='h-full w-4/5'/>
        </div>
        <div className='w-full lg:w-1/2 h-full bg-secondaryLight p-2 rounded-l-3xl rounded-r-3xl lg:rounded-l-none flex justify-center content-center flex-wrap flex-col'>
          <div className='text-6xl md:text-3xl font-bold text-textLight h-auto w-2/3'>
            Login Page
          </div>
          <div className='flex flex-col h-auto'>

            <div className='flex flex-col h-auto mt-2 '>
              <label htmlFor="" className='text-sm ps-2'>Email</label>
              <input type="email" className='h-12 rounded-3xl p-2 border dark:text-black' name='email' onChange={(e) => {
                handleChanges(e)
              }}/>
            </div>

            <div className='flex flex-col h-auto mt-2'>
              <label htmlFor="" className='text-sm ps-2'>Password</label>
              <div className='h-12'>
                <input type={fieldType} className='w-11/12 h-full rounded-l-3xl p-2 border dark:text-black' name='password' onChange={(e) => {
                  handleChanges(e)
                }}/>
                <button className='w-1/12 h-full bg-accentLight rounded-r-3xl p-2' onMouseDown={() => {
                  setFieldType("text")
                }} onMouseUp={() => {
                  setFieldType("password")
                }}>i</button>
              </div>
            </div>

            <button className='h-12 bg-blueThird hover:bg-blueSecond p-2border font-bold mt-3 dark:bg-primaryDark 
            flex content-center justify-center flex-wrap rounded-3xl' onClick={login}>Login</button>
            
            <div className='mt-3'>
              Does not have an account?
              <Link href={"register"} className='pl-2 text-blueThird font-bold'>  
                Click here!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
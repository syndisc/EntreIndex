'use client'
import { Login } from '@/app/model/user';
import { SendAPIRequest } from '@/app/utility/apiController';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, HTMLInputTypeAttribute } from 'react'

const LoginPage = () => {

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
    
    SendAPIRequest(api, "POST", loginData, true, router)
  }

  return (
    <div className='w-screen h-screen bg-primaryLight dark:bg-primaryDark p-2 flex justify-center content-center flex-wrap'>
        <div className='w-3/5 flex h-2/3'>
          <div className='w-1/2 h-full flex justify-center content-center flex-wrap p-2 bg-accentLight dark:bg-accentDark rounded-l-3xl'>
            <img src="/images/login.webp" alt="Not found" className='h-4/5 w-4/5'/>
          </div>
          <div className='w-1/2 h-full bg-secondaryLight dark:bg-secondaryDark p-2 rounded-r-3xl flex justify-center content-center flex-wrap flex-col'>
            <div className='text-6xl font-bold text-textLight dark:text-textDark h-auto w-2/3'>
              Login Page
            </div>
            <div className='flex flex-col h-2/5'>
              <div className='flex flex-col h-1/3 mt-2'>
                <label htmlFor="" className='text-sm ps-2'>Email</label>
                <input type="email" className='h-4/5 rounded-3xl p-2 border' name='email' onChange={(e) => {
                  handleChanges(e)
                }}/>
              </div>
              <div className='flex flex-col h-1/3 mt-2'>
                <label htmlFor="" className='text-sm ps-2'>Password</label>
                <div className='h-4/5'>
                  <input type={fieldType} className='w-11/12 rounded-l-3xl p-2 border' name='password' onChange={(e) => {
                    handleChanges(e)
                  }}/>
                  <button className='w-1/12 bg-accentLight rounded-r-3xl p-2' onMouseDown={() => {
                    setFieldType("text")
                  }} onMouseUp={() => {
                    setFieldType("password")
                  }}>i</button>
                </div>
              </div>
                <button className='h-1/3 bg-primaryLight dark:bg-primaryDark mt-2 flex content-center justify-center flex-wrap rounded-3xl' onClick={login}>Login</button>
              <div>
                Does not have an account?
                <Link href={"register"} className='pl-2'>  
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
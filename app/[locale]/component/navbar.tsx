"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { User } from '../model/user'
import Image from 'next/image'

const Navbar = () => {

  const [user, setUser] = useState<User>()

  useEffect(() => {
    
    async function LoadUser(){
      
      const authCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('auth='));

      if (authCookie) {
          const [, cookieValue] = authCookie.split("=");
          const userAPI = process.env.DECODE_TOKEN_API ? process.env.DECODE_TOKEN_API + cookieValue : "";
          const userRes = await fetch(userAPI);
          const user = await userRes.json();
          setUser(user);
      }
    }
    LoadUser()
  }, [])

  return (
    <div className='w-screen h-auto flex justify-between bg-blueSecond4 px-6 sticky top-0 shadow-2xl'>
        <Link href={"/en/home"} className='flex '>
            <Image width={100} height={100} src="/images/logo2.png" alt="Asset not found" className='w-24 h-20'/>
            <div className='flex flex-col content-center justify-center flex-wrap  text-textLight dark:text-textDark'>
              <div className='font-bold text-3xl'>
              Indonesia Entrepeneurship Index
              </div>
              <div className='font-bold'>
                Welcome, {user?.first_name}
              </div>
            </div>
        </Link>
        <div className='w-auto gap-6 flex justify-around content-center flex-wrap font-bold text-lg text-textLight dark:text-textDark pr-4'>
            {/* <Link href={"/en/answer"}>My Answer</Link> */}
            <Link href={"/en/data"}>Data</Link>
            {/* <Link href={"/en/data"}>Data</Link> */}
            {/* <Link href={"/en/user/profile"}>Profile</Link> */}
        </div>
    </div>
  )
}

export default Navbar
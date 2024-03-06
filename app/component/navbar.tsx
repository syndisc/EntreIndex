"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { User } from '../model/user'
import Image from 'next/image'

const Navbar = () => {

  const [user, setUser] = useState<User>()

  useEffect(() => {
    async function LoadUser(){
      const cookie = document.cookie
      const [cookieName, cookieValue] = cookie.split("=")
      const api = process.env.DECODE_TOKEN_API ? process.env.DECODE_TOKEN_API + cookieValue: ""
      const res = await fetch(api)
      const user = await res.json()
      setUser(user)
    }

    LoadUser()
  }, [])

  return (
    <div className='w-screen h-auto flex justify-between bg-secondaryLight dark:bg-secondaryDark sticky top-0'>
        <Link href={"/home"} className='flex '>
            <Image width={100} height={100} src="/images/logo.png" alt="Asset not found" className='w-20 h-16'/>
            <div className='flex flex-col content-center justify-center flex-wrap  text-textLight dark:text-textDark'>
              <div className='font-bold text-3xl'>
              Indonesia Entrepeneurship Index
              </div>
              <div>
                Welcome, {user?.first_name}
              </div>
            </div>
        </Link>
        <div className='w-auto gap-2 flex justify-around content-center flex-wrap font-bold text-lg text-textLight dark:text-textDark pr-4'>
            <Link href={"/form"}>Form</Link>
            <Link href={"/answer"}>My Answer</Link>
            <Link href={"/data"}>Data</Link>
            <Link href={"user/profile"}>Profile</Link>
        </div>
    </div>
  )
}

export default Navbar
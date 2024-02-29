import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-screen h-auto flex justify-between bg-secondaryLight dark:bg-secondaryDark font-mono sticky top-0'>
        <Link href={"/home"} className='flex '>
            <img src="/images/logo.png" alt="Asset not found" className='w-20 h-16'/>
            <div className='flex content-center justify-center flex-wrap font-bold text-3xl text-textLight dark:text-textDark'>
            Indonesia Entrepeneurship Index
            </div>
        </Link>
        <div className='w-1/5 flex justify-around content-center flex-wrap font-bold text-2xl text-textLight dark:text-textDark pr-4'>
            <Link href={"/form"}>Form</Link>
            <Link href={"user/profile"}>Profile</Link>
        </div>
    </div>
  )
}

export default Navbar
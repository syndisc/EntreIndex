import React from 'react'
import Navbar from '../component/navbar'
import CardLineChart from '../component/LineChart'

const page = () => {
  
  return (
    <div className='h-auto w-screen bg-primaryLight dark:bg-primaryDark'>
      <Navbar/>
      <div className='h-93.2vh w-screen flex justify-center content-center flex-wrap'>
        <div className='h-85vh w-11/12 bg-secondaryLight dark:bg-secondaryDark p-6'>
          <div>
            <CardLineChart/>
          </div>
          <div>
            Right Part
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
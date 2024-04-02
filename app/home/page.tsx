import React from 'react'
import Navbar from '../component/navbar'
import CardLineChart from '../component/LineChart'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  
  return (
    <div className='h-auto w-screen bg-gradient-to-br from-cyan-200 to-blue-900'>
      <Navbar/>
      <div className='h-93.2vh w-screen flex justify-center content-center flex-wrap'>
        <div className='h-85vh w-11/12 bg-secondaryLight dark:bg-secondaryDark p-6 rounded-3xl shadow-2xl'>
          <div className='h-full y-full'>
            {/* top part */}
            <div className=' h-1/2 p-2  w-full '>
              <div className='bg-cyan-600 rounded-3xl flex w-full h-full p-6 shadow-2xl'>
                {/* top left */}
                <div className='w-2/3'>
                  <div className='text-5xl font-bold'>
                    FILL A QUESTIONNAIRE
                  </div>
                  <div className='text-lg font-semibold text-justify'>
                  Join us on an exhilarating adventure! Your insights matter in shaping the future of entrepreneurship. By participating in our comprehensive questionnaire on entrepreneurship, you're not just contributing your thoughts but also igniting the flame of innovation and creativity. Let's pave the way for a brighter future, where every aspiring entrepreneur can thrive. Together, let's make entrepreneurship an irresistible journey towards success and impact!
                  </div>
                  <Link href="/form">
                      <button className='p-2 bg-white text-cyan-600 font-bold rounded-3xl hover:bg-yellow-500 hover:text-white'>
                          Fill a questionnaire
                      </button>
                  </Link>
                </div>
                {/* top right */}
                <div className='w-1/3'>
                  <Image width={600} height={800} src="/images/map2.png" alt='not found'/>
                </div>
              </div>
            </div>
            {/* bot part */}
            <div className=' flex w-full h-1/2 p-2 justify-between'>
              <div className='w-47.5/100 bg-green-500 p-6 rounded-3xl shadow-2xl'>
                BOT LEFT
              </div>
              <div className='w-47.5/100 bg-blue-600 p-6 rounded-3xl shadow-2xl'>
                BOT RIGHT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
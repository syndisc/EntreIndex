import React from 'react'
import Navbar from '../component/navbar'

import Image from 'next/image'
import Link from 'next/link'
import { AverageCity, AverageProvince } from '../model/province'
import { ChangeSpace } from '../utility/utility'

const page = async() => {

  const provinceHighestAPI = process.env.GET_HIGHEST_AVG_PROVICE || ""
  const cityHighestAPI = process.env.GET_HIGHEST_AVG_CITY || ""

  const provincesRes = await fetch(provinceHighestAPI)
  const provinces : [AverageProvince] =  await provincesRes.json()

  const citiesRes = await fetch(cityHighestAPI)
  const cities : [AverageCity] = await citiesRes.json()
  
  return (
    <div className='h-auto w-screen bg-gradient-to-br from-blueThird to-blueFourth'>
      <Navbar/>
      <div className='h-93.2vh w-screen flex justify-center content-center flex-wrap'>
        <div className='h-85vh w-11/12 bg-secondaryLight dark:bg-secondaryDark p-6 rounded-3xl shadow-2xl'>
          <div className='h-full y-full'>
            {/* top part */}
            <div className=' h-1/2 p-2  w-full '>
              <div className='bg-blueSecond rounded-3xl flex w-full h-full p-6 shadow-2xl'>
                {/* top left */}
                <div className='w-2/3'>
                  <div className='text-5xl font-bold'>
                    FILL A QUESTIONNAIRE
                  </div>
                  <div className='text-lg font-semibold text-justify'>
                  Join us on an exhilarating adventure! Your insights matter in shaping the future of entrepreneurship. By participating in our comprehensive questionnaire on entrepreneurship, you are not just contributing your thoughts but also igniting the flame of innovation and creativity. Lets pave the way for a brighter future, where every aspiring entrepreneur can thrive. Together, lets make entrepreneurship an irresistible journey towards success and impact!
                  </div>
                  <Link href="/en/form">
                      <button className='p-2 font-bold rounded-3xl bg-blueFourth hover:bg-blueThird border'>
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
              <div className='w-47.5/100 bg-blueSecond p-6 rounded-3xl shadow-2xl'>
                {provinces.map((province) => {
                  return(
                    <div key={province.name} className='flex justify-between h-1/6 p-3 m-2 rounded-3xl bg-secondaryLight shadow-2xl items-center flex-wrap '>
                        <div>
                        {ChangeSpace(province.name)}
                        </div>
                        <div>
                        {province.avg}
                        </div>
                    </div>
                  )
                })}
              </div>
              <div className='w-47.5/100 bg-blueSecond p-6 rounded-3xl shadow-2xl'>
              {cities.map((city) => {
                  return(
                    <div key={city.city_name} className='flex justify-between h-1/6 p-3 m-2 rounded-3xl bg-secondaryLight shadow-2xl items-center flex-wrap '>
                        <div>
                        {ChangeSpace(city.city_name)}
                        </div>
                        <div>
                        {city.avg}
                        </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
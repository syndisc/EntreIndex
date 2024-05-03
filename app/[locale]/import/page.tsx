"use client"
import React, { SyntheticEvent } from 'react'
import Navbar from '../component/navbar'
import readXlsxFile from 'read-excel-file'
import { SendAPIRequest } from '../utility/apiController'

const ImportUploadPage = () => {

    const attachFile = (e: SyntheticEvent) => {
        const input = e.target as HTMLInputElement
        const file = input.files ? input.files[0] : null

        if(file){

            readXlsxFile(file).then((data : any) => {                

                data.forEach((datum:any) => {
                    const questionaire = datum.slice(0,50)
                    const province = datum.slice(50,51)[0]
                    const city = datum.slice(51, 52)[0]
                    const profile = datum.slice(52,58).join(',')

                    let sum = 0;

                    for (let i = 0; i < questionaire.length; i++) {
                        sum += parseInt(questionaire[i].toString());
                    }
                    const answer = {
                        user_id : 1,
                        city_id : city,
                        answer : questionaire.join(','),
                        profile : profile,
                        total : sum
                    }
                    const api = process.env.POST_ANSWER_API || ""
                    SendAPIRequest(api,"POST", answer)
                });
            })  
            
        }
        if(input){
            input.value = ''
        }
    }

    return (
        <div className='h-auto w-screen bg-gradient-to-br from-blueThird to-blueFourth'>
        <Navbar/> 
            <input type="file" accept='.xlsx' className="p-2 border border-black rounded-md w-full focus:outline-none focus:border-black" onChange={attachFile}/>
        </div>
    )
}

export default ImportUploadPage

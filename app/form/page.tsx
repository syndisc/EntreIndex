"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import { FormAnswer, FormProfile } from '../model/form'
import { options, questions } from '../utility/data'
import { City, Province } from '../model/province'
import { ChangeSpace } from '../utility/utility';
import { SendAPIRequest } from '../utility/apiController'
import { User } from '../model/user'

const FormPage = () => {

    const [answer, setAnswer] = useState<FormAnswer>({})
    const [provinces, setProvinces] = useState<[Province]>()
    const [cities, setCities] = useState<[City]>()
    const [chosenCity, setChosenCity] = useState<number>()
    const [profile,setProfile] = useState<FormProfile>({
        sector : 1,
        type  : 1,
        activity  : 1,
        education  : 1,
        experience : 1,
    })

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

    async function loadProvince(){
        const api = process.env.GET_PROVINCE_API ? process.env.GET_PROVINCE_API : ""

        await fetch(api).then(response => response.json()).then(data => {
            setProvinces(data)
            handleNewCity(data[0].country_id)
        })
    }

    useEffect(() => {
        loadProvince()
    }, [])

    function handleChanges(questionId : number, value:number){
        setAnswer({
            ...answer, [questionId] : value
        })
    }

    function handleProfile(field : string, value : number){
        setProfile({
            ...profile, [field] : value
        })
    }

    async function handleNewCity(province : string){
        const api = process.env.GET_TOWN_API ? process.env.GET_TOWN_API : ""
        
        await fetch(api + province).then(response => response.json()).then(data => {
            setCities(data)
            setChosenCity(data[0].id)
        })
    }

    function sendForm(){

        let finalAnswer = ""
        let finalProfile = ""

        for(const [key, value] of Object.entries(answer)){
            finalAnswer += value + ","
        }
        
        for(const [key, value] of Object.entries(profile)){
            finalProfile += value + ","
        }
        
        finalAnswer = finalAnswer.slice(0,-1)
        finalProfile = finalProfile.slice(0,-1)


        const body = {
            user_id : user?.id,
            city_id : chosenCity,
            answer : finalAnswer,
            profile : finalProfile
        }

        const api = process.env.POST_ANSWER_API ? process.env.POST_ANSWER_API : ""

        SendAPIRequest(api, "POST", body)       
    }

    return (
        <div className='h-auto w-screen bg-primaryLight dark:bg-primaryDark'>
        <Navbar/>
            <div className='h-93.2vh w-screen flex justify-center content-center flex-wrap'>
                <div className='h-85vh w-6/12 bg-secondaryLight dark:bg-secondaryDark p-6 overflow-y-auto rounded-3xl'>
                    {/* Domisili Provinsi dan Kabupaten/Kota*/}
                    <div className='flex justify-between mb-2'>
                        <div className='w-5/12 mb-2'>
                            <div className='text-xl font-bold '>
                                Provinsi Domisili Usaha
                            </div>
                            <div>
                                <select className='w-full p-2' onChange={(event) => {
                                    handleNewCity(event.target.value)
                                }}>
                                    {provinces?.map((province) => {
                                        return(
                                            <option value={province.id} key={province.id}>{ChangeSpace(province.name)}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className='w-5/12 mb-2'>
                            <div className='text-xl font-bold '>
                                Provinsi Kabupaten/Kota Usaha
                            </div>
                            <div>
                                <select className='w-full p-2' onChange={(event) => {
                                    handleChanges(parseInt(event.target.name), parseInt(event.target.value))
                                }}>
                                    {cities?.map((city) => {
                                        return(
                                            <option value={city.id} key={city.id}>{city.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* Sektor Usaha */}
                    <div className='w-full mb-2'>
                        <div className='text-xl font-bold '>
                            Sektor Usaha
                        </div>
                        <div>
                            <select name="sector" id="" className='w-full p-2' onChange={(event) => {
                                    handleProfile(event.target.name, parseInt(event.target.value))
                                }}>
                                <option value="1">Mikro (Aset s/d Rp. 50 jt & omzet penjualan tahunan s/d Rp. 300 jt)</option>
                                <option value="2">Kecil (Aset Rp. 50 jt - Rp. 500 jt & omzet penjualan tahunan s/d Rp. 300 jt - Rp. 2,5 Miliar)</option>
                                <option value="3">Menengah (Aset Rp. 500 jt - Rp. 10 Miliar & omzet penjualan tahunan s/d Rp. 2,5 Miliar - Rp. 50 Miliar)</option>
                                <option value="4">Besar (Aset &gt; Rp. 10 Miliar & omzet penjualan tahunan &gt; Rp. 50 Miliar)</option>
                            </select>
                        </div>
                    </div>
                    {/* Jenis Usaha */}
                    <div className='w-full mb-2'>
                        <div className='text-xl font-bold '>
                            Jenis Usaha
                        </div>
                        <div>
                            <select name="type" id="" className='w-full p-2' onChange={(event) => {
                                    handleProfile(event.target.name, parseInt(event.target.value))
                                }}>
                                <option value="1">Usaha Pertanian (Agriculture): pertaniaan, kehutanan, perikanan, perkebunan, dll.</option>
                                <option value="2">Usaha Pertambangan (Mining): galian pasir, galian tanah, batu, bata, dll.</option>
                                <option value="3">Usaha Pabrikasi (Manufacturing): industri, assembly, sintesis, dll.</option>
                                <option value="4">Usaha Kontruksi (Contruction): kontruksi bangunan, jembatan, pengairan, jalan raya, dll.</option>
                                <option value="5">Usaha Perdagangan (Trade): perdagangan kecil (retailer), grosir, agen, ekspor-impor, dll.</option>
                                <option value="6">Usaha Jasa Keuangan (Financial Service): perbankkan, asuransi, koperasi, dll.</option>
                                <option value="7">Usaha Jasa Perorangan (Personal Service): potongan rambut, salon, loundry, catering, dll.</option>
                                <option value="8">Bidang Jasa-jasa Umum (Public Service): pengangkutan, pergudangan, wartel, distribusi, dll.</option>
                                <option value="9">Bidang Jasa Wisata (Tourism): biro perjalanan wisata, agen perjalanan wisata, pramuwista, konveksi perjalanan intensive dan pameran, impresariat, konsultan pariwisata, informasi pariwisata, dll.</option>
                                <option value="10">Usaha mikro (kuliner, fashion, pendidikan, otomotif, agrobisnis, teknologi internet, kerajinan tangan, elektronik/gadget)</option>
                                <option value="11">Lainnya</option>
                            </select>
                        </div>
                    </div>
                    {/* Kategori Status Usaha */}
                    <div className='w-full mb-2'>
                        <div className='text-xl font-bold '>
                            Kegiatan Status Usaha
                        </div>
                        <div>
                            <select name="activity" id="" className='w-full p-2' onChange={(event) => {
                                    handleProfile(event.target.name, parseInt(event.target.value))
                                }}>
                                <option value="1">Sedang memulai usaha</option>
                                <option value="2">Usahanya telah berjalan</option>
                                <option value="3">Usahanya telah berjalan dan sedang merintis hal baru/pengembangan usaha</option>
                            </select>
                        </div>
                    </div>
                    {/* Pendidikan Terakhir */}
                    <div className='w-full mb-2'>
                        <div className='text-xl font-bold '>
                            Pendidikan Terakhir
                        </div>
                        <div>
                            <select name="54" id="" className='w-full p-2' onChange={(event) => {
                                handleChanges(parseInt(event.target.name), parseInt(event.target.value))
                            }}>
                                <option value="1">SD</option>
                                <option value="2">SMP</option>
                                <option value="3">SMA</option>
                                <option value="4">SMK</option>
                                <option value="5">S1</option>
                                <option value="6">S2</option>
                                <option value="7">S3</option>
                            </select>
                        </div>
                    </div>
                    {/* Pengalaman Menjadi wirausahawan/wati */}
                    <div className='w-full mb-2'>
                        <div className='text-xl font-bold '>
                            Pengalaman menjadi wirausahawan/wati 
                        </div>
                        <div>
                            <select name="experience" id="" className='w-full p-2' onChange={(event) => {
                                    handleProfile(event.target.name, parseInt(event.target.value))
                                }}>
                                <option value="1">&lt; 4 Tahun</option>
                                <option value="2">4 - 10 Tahun</option>
                                <option value="3">11 - 15 Tahun</option>
                                <option value="4">&gt; 15 Tahun</option>
                                
                            </select>
                        </div>
                    </div>
                    {/* Question */}
                    {questions.map((question) => {
                        return(
                            <div className='w-full mb-2' key={question.id}>
                                <div className='text-xl font-bold '>
                                    {question.question}
                                </div>
                                <div className='w-full justify-between flex'>
                                    {options.map((option) => {
                                        return(
                                            <label key={option.value}>
                                                <input type="radio" value={option.value} checked={answer[question.id] === option.value} 
                                                onChange={() => {
                                                handleChanges(question.id, option.value)
                                                }}/>

                                                <span className='pl-4'>
                                                {option.text}
                                                </span>
                                            </label>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                    <div>
                        <button className='border w-full rounded-3xl' onClick={sendForm}>Selesai</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default FormPage
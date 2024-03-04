"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import { FormAnswer } from '../model/form'
import { options, questions } from '../utility/data'
import { City, Province } from '../model/province'
import { ChangeSpace } from '../utility/utility';

const FormPage = () => {

    const [answer, setAnswer] = useState<FormAnswer>({})
    
    const [provinces, setProvinces] = useState<[Province]>()
    const [cities, setCities] = useState<[City]>()

    async function loadProvince(){
        const api = process.env.GET_PROVINCE_API ? process.env.GET_PROVINCE_API : ""
        const result = await fetch(api).then(response => response.json()).then(data => {
            setProvinces(data)
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

    async function handleNewCity(province : string){
        const api = process.env.GET_TOWN_API ? process.env.GET_TOWN_API : ""
        console.log(province);
        
        const result = await fetch(api + province).then(response => response.json()).then(data => {
            setCities(data)
            console.log(data)
        })
    }

    function sendForm(){
        
        // console.log(answer);

        // for (const [key, value] of Object.entries(answer)){
        //     console.log(key, value);
            
        // }
        
        // console.log("send");
        
    }

    return (
        <div className='h-auto w-screen bg-primaryLight dark:bg-primaryDark'>
        <Navbar/>
            <div className='h-93.2vh w-screen flex justify-center content-center flex-wrap'>
                <div className='h-85vh w-6/12 bg-secondaryLight dark:bg-secondaryDark p-6 overflow-y-auto rounded-3xl'>
                    {/* Domisili Provinsi dan Kabupaten/Kota*/}
                    <div className='flex justify-between mb-2'>
                        <div className='w-5/12 mb-2'>
                            <div className='text-xl font-bold font-mono'>
                                Provinsi Domisili Usaha
                            </div>
                            <div>
                                <select name="" id="" className='w-full p-2' onChange={(value) => {
                                    handleNewCity(value.target.value)
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
                            <div className='text-xl font-bold font-mono'>
                                Provinsi Kabupaten/Kota Usaha
                            </div>
                            <div>
                                <select name="" id="" className='w-full p-2'>
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
                        <div className='text-xl font-bold font-mono'>
                            Sektor Usaha
                        </div>
                        <div>
                            <select name="" id="" className='w-full p-2'>
                                <option value="">Mikro (Aset s/d Rp. 50 jt & omzet penjualan tahunan s/d Rp. 300 jt)</option>
                                <option value="">Kecil (Aset Rp. 50 jt - Rp. 500 jt & omzet penjualan tahunan s/d Rp. 300 jt - Rp. 2,5 Miliar)</option>
                                <option value="">Menengah (Aset Rp. 500 jt - Rp. 10 Miliar & omzet penjualan tahunan s/d Rp. 2,5 Miliar - Rp. 50 Miliar)</option>
                                <option value="">Besar (Aset &gt; Rp. 10 Miliar & omzet penjualan tahunan &gt; Rp. 50 Miliar)</option>
                            </select>
                        </div>
                    </div>
                    {/* Jenis Usaha */}
                    <div className='w-full mb-2'>
                        <div className='text-xl font-bold font-mono'>
                            Jenis Usaha
                        </div>
                        <div>
                            <select name="" id="" className='w-full p-2'>
                                <option value="">Usaha Pertanian (Agriculture): pertaniaan, kehutanan, perikanan, perkebunan, dll.</option>
                                <option value="">Usaha Pertambangan (Mining): galian pasir, galian tanah, batu, bata, dll.</option>
                                <option value="">Usaha Pabrikasi (Manufacturing): industri, assembly, sintesis, dll.</option>
                                <option value="">Usaha Kontruksi (Contruction): kontruksi bangunan, jembatan, pengairan, jalan raya, dll.</option>
                                <option value="">Usaha Perdagangan (Trade): perdagangan kecil (retailer), grosir, agen, ekspor-impor, dll.</option>
                                <option value="">Usaha Jasa Keuangan (Financial Service): perbankkan, asuransi, koperasi, dll.</option>
                                <option value="">Usaha Jasa Perorangan (Personal Service): potongan rambut, salon, loundry, catering, dll.</option>
                                <option value="">Bidang Jasa-jasa Umum (Public Service): pengangkutan, pergudangan, wartel, distribusi, dll.</option>
                                <option value="">Bidang Jasa Wisata (Tourism): biro perjalanan wisata, agen perjalanan wisata, pramuwista, konveksi perjalanan intensive dan pameran, impresariat, konsultan pariwisata, informasi pariwisata, dll.</option>
                                <option value="">Usaha mikro (kuliner, fashion, pendidikan, otomotif, agrobisnis, teknologi internet, kerajinan tangan, elektronik/gadget)</option>
                                <option value="">Lainnya</option>
                            </select>
                        </div>
                    </div>
                    {/* Kategori Status Usaha */}
                    <div className='w-full mb-2'>
                        <div className='text-xl font-bold font-mono'>
                            Kegiatan Status Usaha
                        </div>
                        <div>
                            <select name="" id="" className='w-full p-2'>
                                <option value="">Sedang memulai usaha</option>
                                <option value="">Usahanya telah berjalan</option>
                                <option value="">Usahanya telah berjalan dan sedang merintis hal baru/pengembangan usaha</option>
                            </select>
                        </div>
                    </div>
                    {/* Jenis Kelamin, Usia, dan Pendidikan Terakhir */}
                    <div className='flex justify-between mb-2'>
                        <div className='w-1/4 mb-2'>
                            <div className='text-xl font-bold font-mono'>
                                Jenis Kelamin
                            </div>
                            <div>
                                <select name="" id="" className='w-full p-2'>
                                    <option value="">Pria</option>
                                    <option value="">Wanita</option>
                                </select>
                            </div>
                        </div>
                        <div className='w-1/4 mb-2'>
                            <div className='text-xl font-bold font-mono'>
                                Usia
                            </div>
                            <div>
                                <select name="" id="" className='w-full p-2'>
                                    <option value="">&lt; 25 Tahun</option>
                                    <option value="">25 - 40 Tahun</option>
                                    <option value="">41 - 55 Tahun</option>
                                    <option value="">&gt; 55 Tahun</option>
                                </select>
                            </div>
                        </div>
                        <div className='w-1/4 mb-2'>
                            <div className='text-xl font-bold font-mono'>
                                Pendidikan Terakhir
                            </div>
                            <div>
                                <select name="" id="" className='w-full p-2'>
                                    <option value="">SD</option>
                                    <option value="">SMP</option>
                                    <option value="">SMA</option>
                                    <option value="">SMK</option>
                                    <option value="">S1</option>
                                    <option value="">S2</option>
                                    <option value="">S3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* Pengalaman Menjadi wirausahawan/wati */}
                    <div className='w-full mb-2'>
                        <div className='text-xl font-bold font-mono'>
                            Pengalaman menjadi wirausahawan/wati 
                        </div>
                        <div>
                            <select name="" id="" className='w-full p-2'>
                                <option value="">&lt; 4 Tahun</option>
                                <option value="">4 - 10 Tahun</option>
                                <option value="">11 - 15 Tahun</option>
                                <option value="">&gt; 15 Tahun</option>
                                
                            </select>
                        </div>
                    </div>
                    {/* Question */}
                    {questions.map((question) => {
                        return(
                            <div className='w-full mb-2' key={question.id}>
                                <div className='text-xl font-bold font-mono'>
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
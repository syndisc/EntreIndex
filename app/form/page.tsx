"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import { FormAnswer, FormProfile } from '../model/form'
import { options, questions } from '../utility/data'
import { City, Province } from '../model/province'
import { ChangeSpace } from '../utility/utility';
import { SendAPIRequest } from '../utility/apiController'
import { User } from '../model/user'
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useCallback } from 'react';
import 'survey-core/defaultV2.min.css';




const FormPage = () => {

    const [answer, setAnswer] = useState<FormAnswer>({})
    const [provinces, setProvinces] = useState<[Province]>()
    const [cities, setCities] = useState<[City]>()
    const [chosenCity, setChosenCity] = useState<number>()
    const [user, setUser] = useState<User>()
    const [profile,setProfile] = useState<FormProfile>({
        sector : 1,
        type  : 1,
        activity  : 1,
        education  : 1,
        experience : 1,
    })

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

    async function handleNewCity(province : string){
        const api = process.env.GET_TOWN_API ? process.env.GET_TOWN_API : ""
        
        await fetch(api + province).then(response => response.json()).then(data => {
            setCities(data)
            setChosenCity(data[0].id)
        })
    }

    const surveyJson = {
        pages: [
            {
                elements: [
                    {
                        name: "province.id",
                        title: "Provinsi Domisili Usaha",
                        type: "radiogroup",
                        choices: provinces ? provinces.map(province => ({
                            value: province.id,
                            text: province.name
                        })) : [],
                        isRequired: true
                    }
                ]
            },
            {
                elements: [
                    {
                        name: "city_id",
                        title: "Kota Domisili Usaha",
                        type: "radiogroup",
                        choices: provinces ? provinces.map(province => ({
                            value: province.id,
                            text: province.name
                        })) : [],
                        isRequired: true
                    }
                ]
            },
            {
                elements: [
                    {
                        name: "sector",
                        title: "Sektor Usaha",
                        type: "radiogroup",
                        choices: [
                            { value: 1, text: "Mikro (Aset s/d Rp. 50 jt & omzet penjualan tahunan s/d Rp. 300 jt)" },
                            { value: 2, text: "Kecil (Aset Rp. 50 jt - Rp. 500 jt & omzet penjualan tahunan s/d Rp. 300 jt - Rp. 2,5 Miliar)" },
                            { value: 3, text: "Menengah (Aset Rp. 500 jt - Rp. 10 Miliar & omzet penjualan tahunan s/d Rp. 2,5 Miliar - Rp. 50 Miliar)" },
                            { value: 4, text: "Besar (Aset > Rp. 10 Miliar & omzet penjualan tahunan > Rp. 50 Miliar)" }
                        ],
                        isRequired: true
                    }
                ]
            },
            {
                elements: [
                    {
                        name: "jenis",
                        title: "Jenis Usaha",
                        type: "radiogroup",
                        choices: [
                            { value: 1, text: "Usaha Pertanian (Agriculture)" },
                            { value: 2, text: "Usaha Pertambangan (Mining)" },
                            { value: 3, text: "Usaha Pabrikasi (Manufacturing)" },
                            { value: 4, text: "Usaha Konstruksi (Construction)" },
                            { value: 5, text: "Usaha Perdagangan (Trade)" },
                            { value: 6, text: "Usaha Jasa Keuangan (Financial Service)" },
                            { value: 7, text: "Usaha Jasa Perorangan (Personal Service)" },
                            { value: 8, text: "Bidang Jasa-jasa Umum (Public Service)" },
                            { value: 9, text: "Bidang Jasa Wisata (Tourism)" },
                            { value: 10, text: "Usaha Mikro" },
                            { value: 11, text: "Lainnya" }
                        ],
                        isRequired: true
                    }
                ]
            },
            {
                elements: [
                    {
                        name: "status",
                        title: "Kegiatan Status Usaha",
                        type: "radiogroup",
                        choices: [
                            { value: 1, text: "Sedang memulai usaha" },
                            { value: 2, text: "Usahanya telah berjalan" },
                            { value: 3, text: "Usahanya telah berjalan dan sedang merintis hal baru/pengembangan usaha" }
                        ],
                        isRequired: true
                    }
                ]
            },
            {
                elements: [
                    {
                        name: "pendidikan",
                        title: "Pendidikan Terakhir",
                        type: "radiogroup",
                        choices: [
                            { value: 1, text: "SD" },
                            { value: 2, text: "SMP" },
                            { value: 3, text: "SMA" },
                            { value: 4, text: "SMK" },
                            { value: 5, text: "S1" },
                            { value: 6, text: "S2" },
                            { value: 7, text: "S3" }
                        ],
                        isRequired: true
                    }
                ]
            },
            {
                elements: [
                    {
                        name: "pengalaman",
                        title: "Pengalaman menjadi wirausahawan/wati",
                        type: "radiogroup",
                        choices: [
                            { value: 1, text: "< 4 Tahun" },
                            { value: 2, text: "4 - 10 Tahun" },
                            { value: 3, text: "11 - 15 Tahun" },
                            { value: 4, text: "> 15 Tahun" }
                        ],
                        isRequired: true
                    }
                ]
            }
        ]
    };
    

    const survey = new Model(surveyJson);
    const alertResults = useCallback((sender: any) => {
        const results = JSON.stringify(sender.data);
        alert(results);
    }, []);
    
    survey.onComplete.add(alertResults);
    
    return <Survey model={survey} />;
}

export default FormPage
"use client"

import { usePathname, useRouter } from "next/navigation"

export default function ChangeLanguage(){

    const router = useRouter()
    
    const pathName = usePathname()

    function onSelectChange(){
        const nextLocale = pathName.substring(1,3) == "en" ? "id" : "en"
        router.replace(`/${nextLocale}/${pathName.substring(3)}`)
    }

    return(
        <div className="absolute bottom-5 right-5">
            <button className="bg-blueFirst rounded-full w-10 h-10 font-bold" onClick={onSelectChange}>{pathName.substring(1,3) == "en" ? "ID" : "EN"}</button>
        </div>
    )

}
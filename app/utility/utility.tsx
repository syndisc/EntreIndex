import { cookies } from "next/headers"

export function ChangeSpace(text : string){
    return text.replaceAll('_', ' ')
}
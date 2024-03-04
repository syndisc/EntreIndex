import { toast } from "react-toastify";

function notify(msg : string){
    toast(msg)
}

export async function SendAPIRequest(url: string, method: string, data: any) {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    console.log(response);
    
    return response
}

export async function SendAuthRequest(url : string, data : any, router : any){
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    notify("aaa")
}
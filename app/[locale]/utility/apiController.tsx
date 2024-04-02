import { toast } from "react-toastify";

function SuccessNotification(msg : string){
    toast.success(msg)
}

function FailedNotification(msg : string){
    toast.error(msg)
}

export async function SendAPIRequest(url: string, method: string, data: any) {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const responseData = await response.json()

    if(response.ok){
        SuccessNotification(responseData.message)
    }
    else{
        FailedNotification(responseData.message[0]);
    }
}

export async function SendAuthRequest(url : string, data : any, router : any){
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    const responseData = await response.json()

    if(response.ok){
        SuccessNotification(responseData.message)

        const date = new Date()
        date.setTime(date.getTime() + (86400000))
        const expires = "; expires=" + date.toUTCString()
        document.cookie = "auth=" + responseData.token + expires + "; path=/" 

        router.push("/en/home")
    }
    else{
        FailedNotification(responseData.message[0]);
    }
}
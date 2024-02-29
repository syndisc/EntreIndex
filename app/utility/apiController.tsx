export async function SendAPIRequest(url: string, method: string, data: any, auth: boolean, router : any) {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Failed to send data");
        } else {
            console.log("hehe");

            if (auth) {
                router.push("/home")
            }
        }

    } catch (error) {
        console.error('Error : ', error);
    }
}
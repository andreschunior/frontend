import { ILoginProps } from "@/types/types";

const apiURL = process.env.NEXT_PUBLIC_API_URL;


export function apiImage() {
return process.env.NEXT_PUBLIC_API_URL_IMAGE;
}

export async function loginSesion(data: ILoginProps) {

    try { 
        const res = await fetch(`${apiURL}/users/loginSesion`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(data),
            });

        const user = await res.json()
        if (res.status === 200) return user;
        else throw new Error (user?.message);
                
    }
    catch (error: any){
        throw new Error (error)
    }
}

export async function loginUser(data: string) {
    const JsonData = { username : data}
console.log(JsonData);
    try { 
        const res = await fetch(`${apiURL}/users/loginUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(JsonData),
            });

        const user = await res.json()
        if (res.status === 200) return user;
        else throw new Error (user?.message);
                
    }
    catch (error: any){
        throw new Error (error)
    }
}






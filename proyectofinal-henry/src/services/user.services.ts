import { ILoginProps } from "@/types/login.types";

const apiURL = process.env.NEXT_PUBLIC_API_URL;


export async function loginSesion(data: ILoginProps) {
    try { 
        console.log("formData", JSON.stringify(data));	
        const res = await fetch(`${apiURL}/auths/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
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

export async function loginUser(id: string, token: string) {
    try { 
        const res = await fetch(`${apiURL}/users/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
            });
        const user = await res.json()
        if (res.status === 200) return user;
        else throw new Error (user?.message);    
    }
    catch (error: any){
        throw new Error (error)
    }
}






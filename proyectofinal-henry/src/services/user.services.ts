import { useAuth } from "@/context/AuthContext";
import { ILoginProps } from "@/types/login.types";
import axios from "axios";

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







export const getUserById = async (userId: string, token: string) => {
  try {
    const response = await axios.get(`http://localhost:3000/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error en la solicitud Axios:", error.message);
      throw new Error(error.response?.data?.message || "Error al obtener los datos del usuario");
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido al obtener los datos del usuario");
    }
  }
};






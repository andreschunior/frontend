import axios from "axios";

export const fetchServicios = async () => {
  try {
    const response = await axios.get("http://localhost:3000/servicios?page=1&limit=10");
    return response.data; 
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error en la solicitud Axios:', error.message);
    } else {
      console.error('Error desconocido:', error);
    }
    throw error; 
  }
};

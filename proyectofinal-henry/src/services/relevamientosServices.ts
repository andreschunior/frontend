import axios from 'axios';

interface Localidad {
    id: string;
    nombre: string;
  }
  
  interface Provincia {
    id: string;
    nombre: string;
    localidades: Localidad[];
  }
  
export async function fetchProvincias(): Promise<Provincia[]> {
  try {
    const response = await axios.get<Provincia[]>('http://localhost:3001/provincias');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las provincias:', error);
    if (axios.isAxiosError(error)) {
      console.error('Error al obtener las provincias:', error.message);
    } else {
      console.error('Error inesperado:', error);
    }
    return [];
  }
}

  
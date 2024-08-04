import equiposMock from "@/Components/Dashboard/Main/Equipos/equiposMock";
import Equipos from "@/types/Equipos.types";
import axios from "axios";


export const fetchEquipos = async (): Promise<Equipos[]> => {
  try {
    const response = await axios.get("http://localhost:3000/equipos?page=1&limit=5");
    return response.data;
  } catch (error) {
    // Simulamos la carga de datos desde una API
    console.error("Error al obtener los datos:", error);
    return equiposMock;
  }
};

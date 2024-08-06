import Factura from "@/types/factura.types";
import axios from "axios";


export const fetchFacturasId = async (token: string, id: string): Promise<Factura[]> => {
  try {
    const response = await axios.get(
      //`http://localhost:3000/users/3cca6e85-d456-4a39-8f6a-18235cd76abf`,
      `http://localhost:3000/users/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener las facturas:", error);
    return []; 
  }
};



export const DescargarFactura = async (token: string, id: string): Promise<Blob> => {
    try {
      const response = await axios.get(`http://localhost:3000/pdf/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: 'blob',  
      });
      return response.data;
    } catch (error) {
      console.error("Error al descargar la factura:", error);
      throw error;
    }
  };




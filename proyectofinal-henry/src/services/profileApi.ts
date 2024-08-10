import axios from 'axios';

export const sendAssistanceRequest = async (
  token: string,
  userId: string,
  data: {
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
    documento: string; 
    codigoPostal: string;
    domicilioInstal: string;
    localidadInstal: string;
    telefonoInstal: string; 
    emailInstal: string;
    observaciones: string;
    senalConexion: string;
  }
) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/asistencias", 
      {
        userId,
        ...data,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al enviar la solicitud de asistencia:", error);
    throw error;
  }
};

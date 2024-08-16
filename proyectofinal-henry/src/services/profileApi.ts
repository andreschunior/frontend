import axios from 'axios';

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const sendProfileChangeRequest = async (
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
      `${apiURL}/asistencias`,  // Aquí usamos el endpoint de asistencias
      {
        userId,
        tipo: 'cambio_perfil', // Puedes agregar un campo para identificar el tipo de asistencia
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
    console.error("Error al enviar la solicitud de cambio de perfil:", error);
    throw error;
  }
};

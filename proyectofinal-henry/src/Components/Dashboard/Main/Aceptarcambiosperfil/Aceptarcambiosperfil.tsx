"use client"
import React, { useEffect, useState } from 'react';
import { getProfileChangeRequests, updateUserProfile } from "@/services/CambiosPerfil";
import { useAuth } from '@/context/AuthContext';

const AceptarCambiosPerfil: React.FC = () => {
  const { userData } = useAuth();
  const [requests, setRequests] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchRequests = async () => {
      if (!userData?.tokenData?.token || !userData?.userData?.id) {
        return;
      }

      setLoading(true);
      try {
        const token = userData.tokenData.token;
        const userId = userData.userData.id;
        const data = await getProfileChangeRequests(token, userId);
        setRequests(data);
      } catch (error) {
        setError("Error al obtener las solicitudes de cambio de perfil.");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [userData]);

  const handleAccept = async (requestId: string) => {
    if (!userData?.tokenData?.token) {
      setError("Token de autenticación no disponible.");
      return;
    }

    try {
      const token = userData.tokenData.token;
      const request = requests.find(req => req.id === requestId);

      if (request) {
        await updateUserProfile(request.userId, request, token);
        setRequests(prevRequests => prevRequests.filter(req => req.id !== requestId));
      }
    } catch (error) {
      setError("Error al aceptar la solicitud.");
    }
  };

  const handleReject = async (requestId: string) => {
    if (!userData?.tokenData?.token) {
      setError("Token de autenticación no disponible.");
      return;
    }

    try {
      const token = userData.tokenData.token;
      // Implementa la lógica para rechazar la solicitud si es necesario
      // Por ejemplo, podrías enviar una solicitud al backend para eliminar la solicitud

      setRequests(prevRequests => prevRequests.filter(req => req.id !== requestId));
    } catch (error) {
      setError("Error al rechazar la solicitud.");
    }
  };

  if (loading) {
    return <p>Cargando solicitudes...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex justify-center items-start mt-10 md:mt-20 px-4">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Solicitudes de Cambio de Perfil</h1>
        {requests.length > 0 ? (
          requests.map((request) => (
            <div key={request.id} className="border-b py-4">
              <p><strong>Nombre:</strong> {request.nombre}</p>
              <p><strong>Email:</strong> {request.email}</p>
              <p><strong>Teléfono:</strong> {request.telefono}</p>
              <p><strong>Dirección:</strong> {request.direccion}</p>
              <p><strong>Documento:</strong> {request.documento}</p>
              <p><strong>Código Postal:</strong> {request.codigoPostal}</p>
              <p><strong>Domicilio de Instalación:</strong> {request.domicilioInstal}</p>
              <p><strong>Localidad de Instalación:</strong> {request.localidadInstal}</p>
              <p><strong>Teléfono de Instalación:</strong> {request.telefonoInstal}</p>
              <p><strong>Email de Instalación:</strong> {request.emailInstal}</p>
              <p><strong>Observaciones:</strong> {request.observaciones}</p>
              <p><strong>Señal de Conexión:</strong> {request.senalConexion}</p>
              <div className="flex gap-4 mt-4">
                <button 
                  onClick={() => handleAccept(request.id)} 
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  Aceptar
                </button>
                <button 
                  onClick={() => handleReject(request.id)} 
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Rechazar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay solicitudes de cambio de perfil.</p>
        )}
      </div>
    </div>
  );
};

export default AceptarCambiosPerfil;

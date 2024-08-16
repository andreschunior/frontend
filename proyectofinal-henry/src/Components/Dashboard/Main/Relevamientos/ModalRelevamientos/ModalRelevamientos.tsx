"use client";
import React, { useState, useContext } from "react";
import { MapaRelevamiento } from "./MapaRelevamiento"; // Asegúrate de que la ruta sea la correcta

import { useAuth } from "@/context/AuthContext";
import { crearUsuario } from "@/services/user.services";

interface Localidad {
  id: string;
  nombre: string;
}

interface Provincia {
  id: string;
  nombre: string;
}

interface Relevamiento {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
  provincia: Provincia;
  localidad: Localidad;
  razon: string;
  latitud: number;
  longitud: number;
}

interface ModalRelevamientosProps {
  relevamiento: Relevamiento;
  closeModal: () => void;
}

const ModalRelevamientos: React.FC<ModalRelevamientosProps> = ({
  relevamiento,
  closeModal,
}) => {
  const [isEditing, setIsEditing] = useState<{ [key: string]: boolean }>({
    nombre: false,
    telefono: false,
    direccion: false,
    latitud: false,
    longitud: false,
    tipoDocum: false,
    documento: false,
    email: false,
    password: false,
    provinciaId: false,
    localidadId: false,
    codigoPostal: false,
  });

  const [location, setLocation] = useState<{ lat: number; lng: number }>({
    lat: relevamiento.latitud,
    lng: relevamiento.longitud,
  });

  const [formData, setFormData] = useState({
    nombre: relevamiento.nombre,
    codArea: relevamiento.telefono.substring(0, 4), // Ejemplo para extraer código de área
    telefono: relevamiento.telefono,
    direccion: relevamiento.direccion,
    latitud: relevamiento.latitud,
    longitud: relevamiento.longitud,
    tipoDocum: "", // Ajusta según los datos disponibles
    documento: "", // Ajusta según los datos disponibles
    email: relevamiento.email,
    password: "", // Asegúrate de manejar contraseñas de manera segura
    provinciaId: relevamiento.provincia.id,
    localidadId: relevamiento.localidad.id,
    codigoPostal: "", // Ajusta según los datos disponibles
    imgUrl: "https://exmple-image.webp", // Valor por defecto para imgUrl
    // domicilioInstalacion: "",
    // localidadInstalacion: "",
    // telefonoInstalacion: "",
    // emailInstalacion: "",
  });
  const { userData } = useAuth();
  const token = userData?.tokenData?.token;

  if (!token) {
    console.error("Token no disponible");
    return null; // Asegúrate de que no continúes con la lógica si el token no está disponible
  }
  const handleLocationChange = (newCoords: { lat: number; lng: number }) => {
    setLocation(newCoords);
    // Si necesitas actualizar las coordenadas en el relevamiento, puedes hacerlo aquí.
  };

  const handleEditClick = (field: string) => {
    setIsEditing((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (token) {
        await crearUsuario(formData, token); // Pasa el formData y el token como argumentos
        closeModal();
      } else {
        console.error("Token no disponible");
      }
    } catch (error) {
      console.error("Error al crear el usuario:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg max-w-full sm:max-w-lg md:max-w-xl lg:max-w-7xl w-full h-5/6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Detalles del Relevamiento</h1>
        <div className="space-y-4 mb-8">
          {Object.keys(formData).map((key) => (
            <div className="flex items-center" key={key}>
              <span className="font-semibold w-1/3 capitalize">{key}:</span>
              <input
                type={key === "password" ? "password" : "text"}
                name={key}
                value={(formData as any)[key]}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 h-auto ">
          <div className="flex items-center justify-center ">
            <MapaRelevamiento
              coordinates={location}
              onLocationChange={handleLocationChange}
            />
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-2/3 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-center mt-4">
          <button
            className="w-full sm:w-2/3 bg-gray-500 text-white px-4 py-2 rounded"
            onClick={closeModal}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalRelevamientos;

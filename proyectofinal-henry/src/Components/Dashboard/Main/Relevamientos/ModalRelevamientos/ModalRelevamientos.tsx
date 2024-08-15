"use client";
import React, { useState } from "react";
import { MapaRelevamiento } from "./MapaRelevamiento"; // Asegúrate de que la ruta sea correcta

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
    email: false,
    telefono: false,
    direccion: false,
    provincia: false,
    localidad: false,
    razon: false,
    latitud: false,
    longitud: false,
  });

  const [location, setLocation] = useState<{ lat: number; lng: number }>({
    lat: relevamiento.latitud,
    lng: relevamiento.longitud,
  });

  const handleEditClick = (field: string) => {
    setIsEditing((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const details = {
    nombre: relevamiento.nombre,
    email: relevamiento.email,
    telefono: relevamiento.telefono,
    direccion: relevamiento.direccion,
    provincia: relevamiento.provincia.nombre,
    localidad: relevamiento.localidad.nombre,
    razon: relevamiento.razon,
    latitud: relevamiento.latitud,
    longitud: relevamiento.longitud,
  };

  const handleLocationChange = (newCoords: { lat: number; lng: number }) => {
    setLocation(newCoords);
    // Si necesitas actualizar las coordenadas en el relevamiento, puedes hacerlo aquí.
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg max-w-7xl w-full h-5/6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Detalles del Relevamiento</h1>
        <div className="space-y-4 mb-8">
          {Object.keys(details).map((key) => (
            <div className="flex items-center" key={key}>
              <span className="font-semibold w-1/3 capitalize">{key}:</span>
              {isEditing[key] ? (
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  defaultValue={(details as any)[key]}
                />
              ) : (
                <span className="text-blue-700">{(details as any)[key]}</span>
              )}
              <button
                className="ml-4 bg-blue-500 text-white px-2 py-1 rounded"
                onClick={() => handleEditClick(key)}
              >
                {isEditing[key] ? "Guardar" : "Editar"}
              </button>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">
          Completar Información del Relevamiento
        </h2>
        <div className="grid grid-cols-2 gap-4 h-auto">
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Día del Cliente
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Horarios
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Domicilio de Instalación
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Localidad de Instalación
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email de Instalación
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Observaciones
                </label>
                <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
              </div>
              <div className="mt-4 text-right">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  type="submit"
                >
                  Guardar
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
                  onClick={closeModal}
                  type="button"
                >
                  Cerrar
                </button>
              </div>
            </form>
          </div>
          <div className="h-full">
            <MapaRelevamiento
              coordinates={location}
              onLocationChange={handleLocationChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRelevamientos;

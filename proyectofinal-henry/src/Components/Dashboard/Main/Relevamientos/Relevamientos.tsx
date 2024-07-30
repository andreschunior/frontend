"use client";
import React from "react";
import axios from "axios";
import { RelevamientoData } from "@/types/relevamiento.types";
import { fetchRelevamientos } from "@/services/relevamientos.services";

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
}

const Relevamientos: React.FC = () => {
  const [relevamientos, setRelevamientos] = React.useState<Relevamiento[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const dataFromAPI = await fetchRelevamientos(1, 10);
        console.log(dataFromAPI); //verifico los datos que recibo
        setRelevamientos(dataFromAPI);
      } catch (error) {
        console.error('Error al obtener los datos del endpoint', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="p-8 max-w-7xl mx-auto mt-24">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-3 sm:ml-4 md:ml-4 lg:ml-12">
          {relevamientos.map((relevamiento) => (
            <div
              key={relevamiento.id}
              className="bg-white shadow-lg rounded-lg p-6 mb-6"
            >
              <h1 className="text-2xl font-bold mb-4 text-center">
                Solicitud de Servicios de {relevamiento.nombre}
              </h1>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="font-semibold w-1/3">Nombre:</span>
                  <span className="text-blue-700">{relevamiento.nombre}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-1/3">Correo:</span>
                  <span className="text-blue-700">{relevamiento.email}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-1/3">Teléfono:</span>
                  <span className="text-blue-700">{relevamiento.telefono}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-1/3">Dirección:</span>
                  <span className="text-blue-700">
                    {relevamiento.direccion}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-1/3">Provincia:</span>
                  <span className="text-blue-700">
                    {relevamiento.provincia.nombre}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-1/3">Localidad:</span>
                  <span className="text-blue-700">
                    {relevamiento.localidad.nombre}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-1/3">Mensaje:</span>
                  <span className="text-blue-700">{relevamiento.razon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Relevamientos;

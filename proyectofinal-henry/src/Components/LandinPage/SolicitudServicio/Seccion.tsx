"use client";
import React, { useState } from "react";
import { FormServicio } from "./FormServicio";
import { Mapa } from "./Mapa";

export const Seccion: React.FC = () => {
  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasCoordinates, setHasCoordinates] = useState(false); // Nueva variable de estado

  const handleLocationChange = () => {
    if (hasCoordinates) return; // Evita la obtención de coordenadas si ya se han obtenido

    setIsLocating(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoordinates({ lat: latitude, lng: longitude });
        setHasCoordinates(true); // Marca que se han obtenido coordenadas
        console.log("Coordenadas obtenidas:", {
          lat: latitude,
          lng: longitude,
        });
        setIsLocating(false);
      },
      (error) => {
        console.error("Error obteniendo la geolocalización:", error.message);
        setError("No se pudo obtener tu ubicación. Intenta de nuevo.");
        setIsLocating(false);
      }
    );
  };

  const handleMapLocationChange = (newCoords: { lat: number; lng: number }) => {
    setCoordinates(newCoords);
    console.log("Coordenadas actualizadas:", newCoords);
  };

  return (
    <div
      id="contacto"
      className="w-full min-h-screen bg-gradient-to-r from-[#0279F0] to-[#00478F] flex flex-col lg:flex-row items-center justify-center p-4"
    >
      <div className="lg:w-1/3 flex flex-col items-center text-center lg:text-left">
        <h1 className="text-white text-4xl mt-10 lg:mt-0">
          ¿Necesitas más ayuda?
        </h1>
        <p className="text-white text-2xl mt-5 lg:mr-5">
          Con gusto un ejecutivo te ayudará a contratar nuestros servicios
        </p>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mt-5"
        >
          Contáctanos
        </button>

        <h1 className="text-white text-4xl mt-10 lg:mt-0">
          Busca tus coordenadas
        </h1>
        <br />

        {coordinates && (
          <Mapa
            coordinates={coordinates}
            onLocationChange={handleMapLocationChange}
          />
        )}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button
          type="button"
          className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mt-5 ${
            isLocating || hasCoordinates ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleLocationChange}
          disabled={isLocating || hasCoordinates} // Deshabilita el botón si ya se han obtenido coordenadas
        >
          {isLocating ? "Obteniendo coordenadas..." : "Coordenadas"}
        </button>
      </div>

      <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
        <FormServicio initialCoordinates={coordinates} />
      </div>
    </div>
  );
};

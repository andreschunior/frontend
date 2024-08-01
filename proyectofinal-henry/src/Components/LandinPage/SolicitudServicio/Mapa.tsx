"use client";
import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

export const Mapa: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({
          lat: latitude,
          lng: longitude,
        });
      },
      () => {
        console.error("Error obteniendo la geolocalización");
      }
    );
  }, []);

  return (
    <>
      <LoadScript googleMapsApiKey="Api Key Google Aqui">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={currentPosition || center}
        >
          {currentPosition && <Marker position={currentPosition} />}
        </GoogleMap>
      </LoadScript>
    </>
  );
};

"use client";
import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { IUserSession } from "@/types/login.types";
import { loginUser } from "@/services/user.services";
import { useAuth } from "@/context/AuthContext";

const mapContainerStyle = {
  width: "100%",
  height: "320px",
};

const defaultCenter = {
    lat: -34.397,
    lng: 150.644,
  };

interface MapsProps {
    lat?: number;
    lng?: number;
  }

export const Maps = ({ userId } : { userId: string | undefined }) => {
    const {userData } = useAuth();
    const token = userData?.tokenData.token;
  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  }>({ lat: defaultCenter.lat, lng: defaultCenter.lng });

const [lat, setLat ] = useState<number>();
const [lng, setLng ] = useState<number>();


  useEffect(() => {
    const dataUserId = async () => {
      if (token && userId) {
        try{
            const data: IUserSession = await loginUser(userId, token);
            setLat(data.latitud);
            setLng(data.longitud);

            console.log("lat: ", data.latitud);
            console.log("lng: ", data.longitud );
      } catch(err) {
        console.error(err);
      }
     }
   }
    dataUserId();
  }, [token, userId]);




  useEffect(() => {
    if (lat !== undefined && lng !== undefined) {
      setCurrentPosition({ lat, lng });
    } else {
      // Si no se pasan lat y lng, intenta usar la geolocalización del navegador
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
    }
  }, [lat, lng]);

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyAbPohYAyY-xlQhba0_Ivyft4RfPFIJxs8">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={currentPosition }
        >
          {currentPosition && <Marker position={currentPosition} />}
        </GoogleMap>
      </LoadScript>
    </>
  );
};

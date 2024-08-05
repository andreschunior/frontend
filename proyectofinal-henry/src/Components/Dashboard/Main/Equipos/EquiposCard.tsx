"use client";
import React, { useEffect, useState } from "react";
import Equipo from "../../../../../pics/equipoImagen.png";
import Equipos from "@/types/Equipos.types";
import EquiposModal from "./ModalDetalleEquipos";
import { useAuth } from "@/context/AuthContext";
import { fetchEquipos } from "@/services/Equipos.services";

export const EquiposCard: React.FC = () => {
  const { userData } = useAuth();
  const [equipos, setEquipos] = useState<Equipos[]>([]);
  const [selectedEquipo, setSelectedEquipo] = useState<Equipos | null>(null);

  useEffect(() => {
    const getEquipos = async () => {
      console.log("UserData:", userData);
      if (!userData || !userData.tokenData || !userData.tokenData.token) {
        console.error("Token no disponible");
        return;
      }

      const token = userData.tokenData.token;
      console.log("Token:", token);
      try {
        const equiposData = await fetchEquipos(token);
        setEquipos(equiposData);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    getEquipos();
  }, [userData]);

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {equipos.map((equipo) => (
            <div
              key={equipo.id}
              className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-xl mt-5"
                  src={Equipo.src}
                  alt={`${equipo.nombre} image`}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {equipo.nombre}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {equipo.agente}
                </span>
                <div className="flex mt-4 md:mt-6">
                  <button
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => setSelectedEquipo(equipo)}
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedEquipo && (
        <EquiposModal
          equipo={selectedEquipo}
          onClose={() => setSelectedEquipo(null)}
        />
      )}
    </>
  );
};

export default EquiposCard;

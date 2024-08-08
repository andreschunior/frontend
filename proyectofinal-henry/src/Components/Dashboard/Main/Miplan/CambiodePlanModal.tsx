"use client";
import { fetchServicios } from "@/services/Planes.services";
import React, { useEffect, useState } from "react";

interface Plan {
  id: string;
  agente: string;
  velocidadBajada: string;
  velocidadSubida: string;
  costoConexion: string;
  abono: string;
  nombre: string;
}

interface ChangePlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChangePlanModal: React.FC<ChangePlanModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [planes, setPlanes] = useState<Plan[]>([]);

  useEffect(() => {
    if (isOpen) {
      const loadPlans = async () => {
        try {
          const data = await fetchServicios();
          setPlanes(data);
        } catch (error) {
          console.error("Error al cargar los planes:", error);
        }
      };

      loadPlans();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-4/5 md:w-1/3 max-h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Solicitar Cambio de Plan</h2>
        <ul className="space-y-4">
          {planes.map((plan) => (
            <li
              key={plan.id}
              className="p-4 border border-gray-300 rounded cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
              onClick={() => {
                console.log("Plan seleccionado:", plan);
                onClose();
              }}
            >
              <h3 className="text-lg font-semibold">{plan.nombre}</h3>

              <p>
                <strong>Velocidad de Bajada:</strong> {plan.velocidadBajada}
              </p>
              <p>
                <strong>Velocidad de Subida:</strong> {plan.velocidadSubida}
              </p>
              <p>
                <strong>Costo de Conexión:</strong> {plan.costoConexion}
              </p>
              <p>
                <strong>Abono:</strong> {plan.abono}
              </p>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500 mt-4"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

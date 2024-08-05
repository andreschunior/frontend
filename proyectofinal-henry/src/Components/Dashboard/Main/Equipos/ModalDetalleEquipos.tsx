"use client";
import React, { useState } from "react";
import Equipos from "@/types/Equipos.types";
import EquiposEditModal from "./EditarEquiposModa";

interface EquiposModalProps {
  equipo: Equipos | null;
  onClose: () => void;
}

const EquiposModal: React.FC<EquiposModalProps> = ({ equipo, onClose }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEdit = (updatedEquipo: Equipos) => {
    // Aquí puedes manejar la lógica después de editar el equipo, como actualizar el estado global
    console.log("Equipo actualizado:", updatedEquipo);
    setIsEditModalOpen(false);
  };

  if (!equipo) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-bold mb-4">{equipo.nombre}</h2>
          <p>
            <strong>Agente:</strong> {equipo.agente}
          </p>
          <p>
            <strong>IP PC:</strong> {equipo.ipPc}
          </p>
          <p>
            <strong>IP AP:</strong> {equipo.ipAp}
          </p>
          <p>
            <strong>Mascara SubRed:</strong> {equipo.mascaraSubRed}
          </p>
          <p>
            <strong>Puerta Enlace:</strong> {equipo.puertaEnlace}
          </p>
          <p>
            <strong>DNS1:</strong> {equipo.dns1}
          </p>
          <p>
            <strong>DNS2:</strong> {equipo.dns2}
          </p>
          <p>
            <strong>Nodo:</strong> {equipo.nodo}
          </p>
          <p>
            <strong>Equipo:</strong> {equipo.equipo}
          </p>
          <p>
            <strong>Cable Mts:</strong> {equipo.cableMts}
          </p>
          <p>
            <strong>MAC Equipo:</strong> {equipo.macEquipo}
          </p>
          <p>
            <strong>Antena:</strong> {equipo.antena}
          </p>
          <p>
            <strong>Usuario:</strong> nombre del usuario
          </p>
          <div className="mt-4">
            <button
              onClick={onClose}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Cerrar
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => setIsEditModalOpen(true)}
            >
              Editar
            </button>
          </div>
        </div>
      </div>

      {isEditModalOpen && (
        <EquiposEditModal
          equipo={equipo}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleEdit}
        />
      )}
    </>
  );
};

export default EquiposModal;

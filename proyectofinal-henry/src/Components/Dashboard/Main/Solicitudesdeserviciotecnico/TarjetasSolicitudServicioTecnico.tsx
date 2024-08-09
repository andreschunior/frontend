"use client";
import React, { useEffect, useState } from "react";

import { fetchAsistencias } from "@/services/Soporte.services";
import AsistenciaModal from "./modalDetallesSolicitudesServicios";

interface Asistencia {
  id: string;
  createdAt: string;
  agente: string;
  userId: string;
  diaCliente: string;
  horarios: string;
  problema: string;
  observaciones: string;
}

export const AsistenciasList: React.FC = () => {
  const [asistencias, setAsistencias] = useState<Asistencia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [
    selectedAsistencia,
    setSelectedAsistencia,
  ] = useState<Asistencia | null>(null);

  const loadAsistencias = async () => {
    try {
      const data = await fetchAsistencias();
      setAsistencias(data);
    } catch (error) {
      setError("Error al cargar las asistencias");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = () => {
    loadAsistencias(); // Recarga la lista de asistencias después de eliminar
    setSelectedAsistencia(null); // Cierra el modal
  };

  useEffect(() => {
    loadAsistencias();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Asistencias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {asistencias.map((asistencia) => (
          <div
            key={asistencia.id}
            className="p-4 border border-gray-300 rounded-lg shadow-lg"
            onClick={() => setSelectedAsistencia(asistencia)}
          >
            <h3 className="text-lg font-semibold">{asistencia.problema}</h3>
            <p>
              <strong>Agente:</strong> {asistencia.agente}
            </p>
            <p>
              <strong>Fecha:</strong>{" "}
              {new Date(asistencia.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
      {selectedAsistencia && (
        <AsistenciaModal
          asistencia={selectedAsistencia}
          onClose={() => setSelectedAsistencia(null)}
          onDelete={handleDelete} // Pasa la función para manejar la eliminación
        />
      )}
    </div>
  );
};

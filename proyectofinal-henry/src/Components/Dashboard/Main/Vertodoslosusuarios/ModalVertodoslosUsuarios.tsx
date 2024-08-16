"use client";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { deleteUserById } from "@/services/user.services";
import ConfirmationModal from "./ConfirmacionDarDeBajaModal";

interface UserDetailModalProps {
  user: any;
  onClose: () => void;
  onDelete: () => void;
}

const UserDetailModal: React.FC<UserDetailModalProps> = ({
  user,
  onClose,
  onDelete,
}) => {
  const { userData } = useAuth();
  const token = userData?.tokenData?.token;
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = async () => {
    if (user && token) {
      try {
        await deleteUserById(user.id, token);
        onDelete();
        onClose();
      } catch (error) {
        console.error("Error al eliminar el usuario:", error);
      }
    }
  };

  const handleConfirmDelete = () => {
    handleDelete();
    setShowConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  if (!user) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-4 rounded-lg shadow-lg w-4/5 md:w-1/3 max-h-screen overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Detalles del Usuario</h2>
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Nombre:</strong> {user.nombre}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Teléfono:</strong> {user.telefono}
          </p>
          <p>
            <strong>Dirección:</strong> {user.direccion}
          </p>
          <p>
            <strong>Razón Social:</strong> {user.razonSocial}
          </p>
          <p>
            <strong>Documento:</strong> {user.documento}
          </p>
          <p>
            <strong>Observaciones:</strong> {user.observaciones}
          </p>
          <p>
            <strong>Señal de Conexión:</strong> {user.senalConexion}
          </p>
          <p>
            <strong>Creado el:</strong>{" "}
            {new Date(user.createdAt).toLocaleDateString()}
          </p>
          <p>
            <strong>Es Administrador:</strong> {user.isAdmin ? "Sí" : "No"}
          </p>
          {/* <p>
            <strong>Domicilio de Instalación:</strong> {user.domicilioInstal}
          </p>
          <p>
            <strong>Localidad de Instalación:</strong> {user.localidadInstal}
          </p>
          <p>
            <strong>Teléfono de Instalación:</strong> {user.telefonoInstal}
          </p>
          <p>
            <strong>Email de Instalación:</strong> {user.emailInstal}
          </p> */}
          <div className="mt-4 flex justify-end space-x-2">
            <button
              onClick={onClose}
              className="bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500"
            >
              Cerrar
            </button>
            <button
              onClick={() => setShowConfirmation(true)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Dar de baja
            </button>
          </div>
        </div>
      </div>
      {showConfirmation && (
        <ConfirmationModal
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </>
  );
};

export default UserDetailModal;

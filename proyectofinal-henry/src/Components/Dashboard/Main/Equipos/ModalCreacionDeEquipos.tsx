import React from "react";
import Equipos from "@/types/Equipos.types";

interface EquiposModalProps {
  equipo: Equipos | null;
  onClose: () => void;
}

export const CreacionEquiposModal: React.FC<EquiposModalProps> = ({
  equipo,
  onClose,
}) => {
  if (!equipo) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="mt-4">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto lg:ml-auto lg:w-1/3">
            <h1 className="text-2xl font-bold text-black text-center mb-6">
              Elige el pan que quieres solicitar
            </h1>
            <p className="text-black text-center mb-4">
              Por favor ingrese sus datos
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="correo" className="block text-gray-700">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="direccion" className="block text-gray-700">
                  Dirección
                </label>
                <input
                  type="text"
                  id="direccion"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="razon" className="block text-gray-700">
                  Comentarios
                </label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="shadow-md px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Cerrar
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => console.log(`Editando equipo ${equipo.id}`)} // Aquí puedes agregar la lógica para editar
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreacionEquiposModal;

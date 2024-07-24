import React from "react";

export const FormServicio: React.FC = () => {
  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto lg:ml-auto lg:w-1/3">
        <h1 className="text-2xl font-bold text-center mb-6">
          Elige el pan que quieres solicitar
        </h1>
        <p className="text-center mb-4">Por favor ingrese sus datos</p>
        <form className="space-y-4 max-h-screen">
          <div>
            <label htmlFor="nombre" className="block text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
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
              required
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
              required
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-gray-700">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              className="w-full p-2 border border-gray-300 rounded-md h-32"
              required
            ></textarea>
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
    </>
  );
};

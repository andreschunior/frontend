"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { provincias, localidades } from "./ProvinciasYLocalidadesData";

export const FormServicio: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [selectedProvincia, setSelectedProvincia] = useState<string>("");
  const localidadesDisponibles = localidades[selectedProvincia] || [];

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post("URL_DEL_ENDPOINT", {
        nombre: data.nombre,
        email: data.correo,
        telefono: data.telefono,
        razon: data.mensaje,
        direccion: data.direccion,
        provincia: data.provincia,
        localidad: data.localidad,
      });
      console.log("Datos enviados con éxito:", response.data);
      alert("Datos enviados con éxito:");
    } catch (error) {
      console.error("Error enviando los datos:", error);
    }
  };
  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto lg:ml-auto lg:w-1/3">
        <h1 className="text-2xl font-bold text-black text-center mb-6">
          Elige el pan que quieres solicitar
        </h1>
        <p className="text-black text-center mb-4">
          Por favor ingrese sus datos
        </p>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="nombre" className="block text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              className="w-full p-2 border border-gray-300 rounded-md"
              {...register("nombre", { required: true, maxLength: 50 })}
            />
            {errors.nombre && (
              <p className="text-red-500">
                Nombre es requerido y debe tener menos de 50 caracteres
              </p>
            )}
          </div>
          <div>
            <label htmlFor="correo" className="block text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              id="correo"
              className="w-full p-2 border border-gray-300 rounded-md"
              {...register("correo", {
                required: true,
                maxLength: 100,
                pattern: /^\S+@\S+$/i,
              })}
            />
            {errors.correo && (
              <p className="text-red-500">
                Correo electrónico es requerido y debe ser válido
              </p>
            )}
          </div>
          <div>
            <label htmlFor="telefono" className="block text-gray-700">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              className="w-full p-2 border border-gray-300 rounded-md"
              {...register("telefono", {
                required: true,
                maxLength: 15,
                pattern: /^[0-9]+$/,
              })}
            />
            {errors.telefono && (
              <p className="text-red-500">
                Teléfono es requerido y debe ser un número válido
              </p>
            )}
          </div>
          <div>
            <label htmlFor="direccion" className="block text-gray-700">
              Dirección
            </label>
            <input
              type="text"
              id="direccion"
              className="w-full p-2 border border-gray-300 rounded-md"
              {...register("direccion", { required: true, maxLength: 100 })}
            />
            {errors.direccion && (
              <p className="text-red-500">
                Dirección es requerida y debe tener menos de 100 caracteres
              </p>
            )}
          </div>
          <div>
            <label htmlFor="provincia" className="block text-gray-700">
              Provincia
            </label>
            <select
              id="provincia"
              className="w-full p-2 border border-gray-300 rounded-md"
              {...register("provincia", { required: true })}
              onChange={(e) => setSelectedProvincia(e.target.value)}
            >
              <option value="">Seleccione una provincia</option>
              {provincias.map((provincia) => (
                <option key={provincia} value={provincia}>
                  {provincia}
                </option>
              ))}
            </select>
            {errors.provincia && (
              <p className="text-red-500">Provincia es requerida</p>
            )}
          </div>
          <div>
            <label htmlFor="localidad" className="block text-gray-700">
              Localidad
            </label>
            <select
              id="localidad"
              className="w-full p-2 border border-gray-300 rounded-md"
              {...register("localidad", { required: true })}
            >
              <option value="">Seleccione una localidad</option>
              {localidadesDisponibles.map((localidad: string) => (
                <option key={localidad} value={localidad}>
                  {localidad}
                </option>
              ))}
            </select>
            {errors.localidad && (
              <p className="text-red-500">Localidad es requerida</p>
            )}
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-gray-700">
              Comentarios
            </label>
            <textarea
              id="mensaje"
              className="w-full p-2 border border-gray-300 rounded-md h-32 resize-none"
              {...register("mensaje", { required: true, maxLength: 500 })}
            ></textarea>
            {errors.mensaje && (
              <p className="text-red-500">
                Comentarios es requerido y debe tener menos de 500 caracteres
              </p>
            )}
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

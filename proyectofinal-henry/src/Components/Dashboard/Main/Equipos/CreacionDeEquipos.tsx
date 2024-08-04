"use client";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Equipos from "@/types/Equipos.types";

const CrearEquipoFormulario: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Equipos>();

  const onSubmit = async (data: Equipos) => {
    try {
      await axios.post("http://localhost:3000/equipos", data);
      // Aquí podrías agregar lógica para mostrar un mensaje de éxito o redirigir al usuario
      alert("Equipo creado exitosamente");
    } catch (error) {
      console.error("Error al crear el equipo:", error);
      // Aquí podrías agregar lógica para mostrar un mensaje de error
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-black text-center mb-6">
        Agregar nuevo equipo
      </h1>
      <p className="text-black text-center mb-4">
        Por favor ingrese los datos del equipo
      </p>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-span-1">
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
        <div className="col-span-1">
          <label htmlFor="agente" className="block text-gray-700">
            Agente
          </label>
          <input
            type="text"
            id="agente"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("agente", { required: true, maxLength: 50 })}
          />
          {errors.agente && (
            <p className="text-red-500">
              Agente es requerido y debe tener menos de 50 caracteres
            </p>
          )}
        </div>
        <div className="col-span-1">
          <label htmlFor="ipPc" className="block text-gray-700">
            IP del PC
          </label>
          <input
            type="text"
            id="ipPc"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("ipPc", {
              required: true,
              pattern: /^\d{1,3}(\.\d{1,3}){3}$/,
            })}
          />
          {errors.ipPc && (
            <p className="text-red-500">
              IP del PC es requerida y debe ser una IP válida
            </p>
          )}
        </div>
        <div className="col-span-1">
          <label htmlFor="ipAp" className="block text-gray-700">
            IP del AP
          </label>
          <input
            type="text"
            id="ipAp"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("ipAp", {
              required: true,
              pattern: /^\d{1,3}(\.\d{1,3}){3}$/,
            })}
          />
          {errors.ipAp && (
            <p className="text-red-500">
              IP del AP es requerida y debe ser una IP válida
            </p>
          )}
        </div>
        <div className="col-span-1">
          <label htmlFor="mascaraSubRed" className="block text-gray-700">
            Máscara de Subred
          </label>
          <input
            type="text"
            id="mascaraSubRed"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("mascaraSubRed", { required: true })}
          />
          {errors.mascaraSubRed && (
            <p className="text-red-500">Máscara de Subred es requerida</p>
          )}
        </div>
        <div className="col-span-1">
          <label htmlFor="puertaEnlace" className="block text-gray-700">
            Puerta de Enlace
          </label>
          <input
            type="text"
            id="puertaEnlace"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("puertaEnlace", { required: true })}
          />
          {errors.puertaEnlace && (
            <p className="text-red-500">Puerta de Enlace es requerida</p>
          )}
        </div>
        <div className="col-span-1">
          <label htmlFor="dns1" className="block text-gray-700">
            DNS 1
          </label>
          <input
            type="text"
            id="dns1"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("dns1", { required: true })}
          />
          {errors.dns1 && <p className="text-red-500">DNS 1 es requerido</p>}
        </div>
        <div className="col-span-1">
          <label htmlFor="dns2" className="block text-gray-700">
            DNS 2
          </label>
          <input
            type="text"
            id="dns2"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("dns2", { required: true })}
          />
          {errors.dns2 && <p className="text-red-500">DNS 2 es requerido</p>}
        </div>
        <div className="col-span-1">
          <label htmlFor="nodo" className="block text-gray-700">
            Nodo
          </label>
          <input
            type="text"
            id="nodo"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("nodo", { required: true })}
          />
          {errors.nodo && <p className="text-red-500">Nodo es requerido</p>}
        </div>
        <div className="col-span-1">
          <label htmlFor="equipo" className="block text-gray-700">
            Equipo
          </label>
          <input
            type="text"
            id="equipo"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("equipo", { required: true })}
          />
          {errors.equipo && <p className="text-red-500">Equipo es requerido</p>}
        </div>
        <div className="col-span-1">
          <label htmlFor="cableMts" className="block text-gray-700">
            Cable (mts)
          </label>
          <input
            type="text"
            id="cableMts"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("cableMts", { required: true })}
          />
          {errors.cableMts && (
            <p className="text-red-500">Cable es requerido</p>
          )}
        </div>
        <div className="col-span-1">
          <label htmlFor="macEquipo" className="block text-gray-700">
            MAC del Equipo
          </label>
          <input
            type="text"
            id="macEquipo"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("macEquipo", { required: true })}
          />
          {errors.macEquipo && (
            <p className="text-red-500">MAC del Equipo es requerida</p>
          )}
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="antena" className="block text-gray-700">
            Antena
          </label>
          <input
            type="text"
            id="antena"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("antena", { required: true })}
          />
          {errors.antena && <p className="text-red-500">Antena es requerida</p>}
        </div>
        <div className="col-span-2 text-center">
          <button
            type="submit"
            className="shadow-md px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearEquipoFormulario;

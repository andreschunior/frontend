"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { fetchProvincias } from "@/services/provincias.services";
import { RelevamientoData } from "@/types/relevamiento.types";
import Swal from "sweetalert2";
import { enviarRelevamiento } from "@/services/relevamientos.services";

interface Localidad {
  id: string;
  nombre: string;
}

interface Provincia {
  id: string;
  nombre: string;
  localidades: Localidad[];
}

export const FormServicio: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const [provincias, setProvincias] = useState<Provincia[]>([]);
  const [selectedProvincia, setSelectedProvincia] = useState<string>("");
  const [selectedLocalidad, setSelectedLocalidad] = useState<string>("");
  const [localidadesDisponibles, setLocalidadesDisponibles] = useState<
    Localidad[]
  >([]);

  const nombre = watch("nombre");
  const correo = watch("correo");
  const telefono = watch("telefono");
  const direccion = watch("direccion");
  const razon = watch("razon");

  useEffect(() => {
    async function loadProvincias() {
      const data = await fetchProvincias();
      setProvincias(data);
    }
    loadProvincias();
  }, []);

  useEffect(() => {
    const provincia = provincias.find((p) => p.id === selectedProvincia);
    if (provincia) {
      setLocalidadesDisponibles(provincia.localidades);
    } else {
      setLocalidadesDisponibles([]);
    }
  }, [selectedProvincia, provincias]);

  useEffect(() => {
    trigger("nombre");
  }, [nombre, trigger]);

  useEffect(() => {
    trigger("correo");
  }, [correo, trigger]);

  useEffect(() => {
    trigger("telefono");
  }, [telefono, trigger]);

  useEffect(() => {
    trigger("direccion");
  }, [direccion, trigger]);

  useEffect(() => {
    trigger("razon");
  }, [razon, trigger]);

  const onSubmit = async (data: any) => {
    try {
      const provincia = provincias.find((p) => p.id === selectedProvincia);
      const localidad = localidadesDisponibles.find(
        (l) => l.id === selectedLocalidad
      );
      console.log(data);

      const relevamientoData: RelevamientoData = {
        nombre: data.nombre,
        email: data.correo,
        telefono: data.telefono,
        razon: data.razon,
        direccion: data.direccion,
        provincia: provincia ? provincia.nombre : "",
        localidad: localidad ? localidad.nombre : "",
      };

      const response = await enviarRelevamiento(relevamientoData);

      Swal.fire({
        title: "¡Datos enviados con éxito!",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Ok",
      });

      reset();
      setSelectedProvincia("");
      setSelectedLocalidad("");
    } catch (error) {
      console.error("Error enviando los datos:", error);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto lg:ml-auto lg:w-1/3">
      <h1 className="text-2xl font-bold text-black text-center mb-6">
        Elige el pan que quieres solicitar
      </h1>
      <p className="text-black text-center mb-4">Por favor ingrese sus datos</p>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="nombre" className="block text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("nombre", {
              required: true,
              maxLength: 50,
              pattern: /^[a-zA-Z\s]*$/,
            })}
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
              maxLength: 50,
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
              minLength: 7,
              pattern: /^[0-9]+$/,
            })}
          />
          {errors.telefono && (
            <p className="text-red-500">
              Teléfono es requerido, debe ser un número válido y tener al menos
              7 digitos
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
            onChange={(e) => {
              const selectedId = e.target.value;
              setSelectedProvincia(selectedId);
              setSelectedLocalidad(""); // Resetea la localidad al cambiar la provincia
            }}
          >
            <option value="">Seleccione una provincia</option>
            {provincias.map((provincia) => (
              <option key={provincia.id} value={provincia.id}>
                {provincia.nombre}
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
            onChange={(e) => setSelectedLocalidad(e.target.value)}
          >
            <option value="">Seleccione una localidad</option>
            {localidadesDisponibles.length > 0 ? (
              localidadesDisponibles.map((localidad) => (
                <option key={localidad.id} value={localidad.id}>
                  {localidad.nombre}
                </option>
              ))
            ) : (
              <option value="" disabled>
                No hay localidades disponibles
              </option>
            )}
          </select>
          {errors.localidad && (
            <p className="text-red-500">Localidad es requerida</p>
          )}
        </div>
        <div>
          <label htmlFor="razon" className="block text-gray-700">
            Comentarios
          </label>
          <textarea
            id="razon"
            className="w-full p-2 border border-gray-300 rounded-md h-32 resize-none"
            {...register("razon", { required: true, maxLength: 500 })}
          ></textarea>
          {errors.razon && (
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
  );
};

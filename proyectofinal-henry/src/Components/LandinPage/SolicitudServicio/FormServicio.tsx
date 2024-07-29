"use client";
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
=======
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { fetchProvincias } from "@/services/relevamientosServices";
>>>>>>> develop

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
<<<<<<< HEAD
  const router = useRouter();

  // Lista de provincias de Argentina
  const provincias: Provincia[] = [
    "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "CABA",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán",
  ];

  // Lista de localidades por provincia
  const localidades: Localidades = {
    "Buenos Aires": [
      "La Plata",
      "Mar del Plata",
      "Bahía Blanca",
      "Lomas de Zamora",
      "Tigre",
    ],
    CABA: ["Buenos Aires"],
    Córdoba: [
      "Córdoba",
      "Villa María",
      "Río Cuarto",
      "San Francisco",
      "Alta Gracia",
    ],
    Catamarca: [
      "San Fernando del Valle de Catamarca",
      "Belén",
      "Fiambalá",
      "Chilecito",
    ],
    Chaco: ["Resistencia", "Charata", "Saenz Peña", "Pcia. Roque Sáenz Peña"],
    Chubut: ["Rawson", "Comodoro Rivadavia", "Trelew", "Puerto Madryn"],
    Corrientes: ["Corrientes", "Goya", "Mercedes", "Paso de los Libres"],
    "Entre Ríos": ["Paraná", "Concordia", "Gualeguaychú", "Colón"],
    Formosa: ["Formosa", "Clorinda", "El Colorado", "Pirané"],
    Jujuy: [
      "San Salvador de Jujuy",
      "Palpalá",
      "Libertador General San Martín",
    ],
    "La Pampa": ["Santa Rosa", "General Pico", "Realicó"],
    "La Rioja": ["La Rioja", "Chamical", "Chilecito"],
    Mendoza: ["Mendoza", "San Rafael", "Malargüe", "Godoy Cruz"],
    Misiones: ["Posadas", "Eldorado", "Oberá"],
    Neuquén: [
      "Neuquén",
      "San Martín de los Andes",
      "Caviahue",
      "Villa La Angostura",
    ],
    "Río Negro": ["Viedma", "San Carlos de Bariloche", "General Roca"],
    Salta: ["Salta", "Orán", "Tartagal"],
    "San Juan": ["San Juan", "Jáchal", "Albardón"],
    "San Luis": ["San Luis", "Villa Mercedes", "El Trapiche"],
    "Santa Cruz": ["Río Gallegos", "El Calafate", "Caleta Olivia"],
    "Santa Fe": ["Santa Fe", "Rosario", "Rafaela", "Venado Tuerto"],
    "Santiago del Estero": [
      "Santiago del Estero",
      "La Banda",
      "Termas de Río Hondo",
    ],
    "Tierra del Fuego": ["Ushuaia", "Río Grande", "Tolhuin"],
    Tucumán: ["San Miguel de Tucumán", "Concepción", "Tafí Viejo"],
  };

  const [selectedProvincia, setSelectedProvincia] = useState<Provincia | "">("");
  const [localidadesDisponibles, setLocalidadesDisponibles] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    direccion: '',
    provincia: '',
    localidad: '',
    mensaje: '',
  });
=======
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [provincias, setProvincias] = useState<Provincia[]>([]);
  const [selectedProvincia, setSelectedProvincia] = useState<string>("");
  const [selectedLocalidad, setSelectedLocalidad] = useState<string>("");
  const [localidadesDisponibles, setLocalidadesDisponibles] = useState<
    Localidad[]
  >([]);
>>>>>>> develop

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

  const onSubmit = async (data: any) => {
    try {
      const provincia = provincias.find((p) => p.id === selectedProvincia);
      const localidad = localidadesDisponibles.find(
        (l) => l.id === selectedLocalidad
      );
      console.log(data); //este console log

      const response = await axios.post("http://localhost:3001/relevamientos", {
        nombre: data.nombre,
        email: data.correo,
        telefono: data.telefono,
        razon: data.razon,
        direccion: data.direccion,
        provincia: provincia ? provincia.nombre : "",
        localidad: localidad ? localidad.nombre : "",
      });
      console.log("Datos enviados con éxito:", response.data);
      alert("Datos enviados con éxito");
    } catch (error) {
      console.error("Error enviando los datos:", error);
      console.log(data); // Aquí puedes ver los datos que están siendo enviados.
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Convierte el objeto formData en una cadena de consulta
    const queryString = new URLSearchParams(formData as any).toString();

    // Redirige al usuario a la página de request con los parámetros de consulta
    router.push(`/request?${queryString}`);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto lg:ml-auto lg:w-1/3">
      <h1 className="text-2xl font-bold text-black text-center mb-6">
        Elige el pan que quieres solicitar
      </h1>
      <p className="text-black text-center mb-4">Por favor ingrese sus datos</p>
<<<<<<< HEAD
      <form className="space-y-4 max-h-screen" onSubmit={handleSubmit}>
=======
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
>>>>>>> develop
        <div>
          <label htmlFor="nombre" className="block text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="w-full p-2 border border-gray-300 rounded-md"
<<<<<<< HEAD
            required
            value={formData.nombre}
            onChange={handleChange}
=======
            {...register("nombre", { required: true, maxLength: 50 })}
>>>>>>> develop
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
            name="correo"
            className="w-full p-2 border border-gray-300 rounded-md"
<<<<<<< HEAD
            required
            value={formData.correo}
            onChange={handleChange}
=======
            {...register("correo", {
              required: true,
              maxLength: 100,
              pattern: /^\S+@\S+$/i,
            })}
>>>>>>> develop
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
            name="telefono"
            className="w-full p-2 border border-gray-300 rounded-md"
<<<<<<< HEAD
            required
            value={formData.telefono}
            onChange={handleChange}
=======
            {...register("telefono", {
              required: true,
              maxLength: 15,
              pattern: /^[0-9]+$/,
            })}
>>>>>>> develop
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
            name="direccion"
            className="w-full p-2 border border-gray-300 rounded-md"
<<<<<<< HEAD
            required
            value={formData.direccion}
            onChange={handleChange}
=======
            {...register("direccion", { required: true, maxLength: 100 })}
>>>>>>> develop
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
            name="provincia"
            className="w-full p-2 border border-gray-300 rounded-md"
<<<<<<< HEAD
            onChange={(e) => setSelectedProvincia(e.target.value as Provincia)}
            required
            value={formData.provincia}
=======
            {...register("provincia", { required: true })}
            onChange={(e) => {
              const selectedId = e.target.value;
              setSelectedProvincia(selectedId);
              setSelectedLocalidad(""); // Resetea la localidad al cambiar la provincia
            }}
>>>>>>> develop
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
            name="localidad"
            className="w-full p-2 border border-gray-300 rounded-md"
<<<<<<< HEAD
            required
            value={formData.localidad}
            onChange={handleChange}
=======
            {...register("localidad", { required: true })}
            onChange={(e) => setSelectedLocalidad(e.target.value)}
>>>>>>> develop
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
<<<<<<< HEAD
            id="mensaje"
            name="mensaje"
            className="w-full p-2 border border-gray-300 rounded-md h-32"
            required
            value={formData.mensaje}
            onChange={handleChange}
=======
            id="razon"
            className="w-full p-2 border border-gray-300 rounded-md h-32 resize-none"
            {...register("razon", { required: true, maxLength: 500 })}
>>>>>>> develop
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

"use client";
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext'; // Asegúrate de actualizar la ruta al archivo correcto
import { useSidebarContext } from '@/context/SidebarContext';
import ModalImagen from './ModalImagen/ModalImagen';
import Link from 'next/link';

const UserProfile: React.FC = () => {
  const { userData } = useAuth();
  const { btnFixed } = useSidebarContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCloseModal = () => {
    closeModal();
  };

  if (!userData) {
    return <div className="text-center text-gray-500">Cargando...</div>;
  }

  const firstLetterName = (name: string | undefined): string => {
    if (name && name.trim() !== "") return name.trim().charAt(0).toUpperCase();
    else return `<i className="lni lni-user"></i>`;
  };

  const letterColors: { [key: string]: string } = {
    A: 'bg-red-500', B: 'bg-blue-500', C: 'bg-green-500', D: 'bg-yellow-500',
    E: 'bg-purple-500', F: 'bg-pink-500', G: 'bg-indigo-500', H: 'bg-teal-500',
    I: 'bg-orange-500', J: 'bg-cyan-500', K: 'bg-lime-500', L: 'bg-amber-500',
    M: 'bg-emerald-500', N: 'bg-violet-500', O: 'bg-fuchsia-500', P: 'bg-rose-500',
    Q: 'bg-sky-500', R: 'bg-blue-600', S: 'bg-red-600', T: 'bg-green-600',
    U: 'bg-yellow-600', V: 'bg-purple-600', W: 'bg-pink-600', X: 'bg-indigo-600',
    Y: 'bg-teal-600', Z: 'bg-orange-600'
};


const getColorByFirstLetter = (name: string) => {
    const firstLetter = firstLetterName(name);
    return letterColors[firstLetter] || 'bg-gray-500'; // color por defecto si no coincide
};

  return (
    <div
      className={`p-3 mt-20 transition-all duration-1000  ${
        btnFixed ? "ml-[270px]" : "ml-24"
      }`}
    >
    <div className="max-w-2xl mx-auto mt-6 bg-white shadow-md rounded-lg p-6">
      <div className="flex gap-4 items-center mb-6">

      <a onClick={openModal}>
         {userData.userData.imgUrl !== "https://exmple-image.webp" ?

                <img
                    src={userData.userData.imgUrl}
                    alt={userData.userData.nombre}
                    className="w-16 h-16 rounded-full"
                />
                :
                <button
                className={`rounded-full w-16 h-16 flex items-center justify-center text-center font-[530] ${getColorByFirstLetter(userData.userData.nombre)} text-white`}
                >
                <p className="text-[45px] pr-[1px]">{firstLetterName(userData.userData.nombre)}</p>
                </button>
                }
      </a>

        <h1 className="text-xl font-bold">{userData.userData.nombre}</h1>
      </div>
      <div className="text-lg text-gray-700">
        <p><strong className='text-blue-900'>Email:</strong> {userData.userData.email}</p>
        <p><strong className='text-blue-900'>Teléfono:</strong> {userData.userData.telefono}</p>
        <p><strong className='text-blue-900'>Dirección:</strong> {userData.userData.direccion}</p>
        <p><strong className='text-blue-900'>Documento:</strong> {userData.userData.documento}</p>
        <p><strong className='text-blue-900'>Razón Social:</strong> {userData.userData.razonSocial}</p>
        <p><strong className='text-blue-900'>Código Postal:</strong> {userData.userData.codigoPostal}</p>
        <p><strong className='text-blue-900'>Domicilio de Instalación:</strong> {userData.userData.domicilioInstal}</p>
        <p><strong className='text-blue-900'>Localidad de Instalación:</strong> {userData.userData.localidadInstal}</p>
        <p><strong className='text-blue-900'>Teléfono de Instalación:</strong> {userData.userData.telefonoInstal}</p>
        <p><strong className='text-blue-900'>Email de Instalación:</strong> {userData.userData.emailInstal}</p>
        <p><strong className='text-blue-900'>Observaciones:</strong> {userData.userData.observaciones}</p>
        <p><strong className='text-blue-900'>Señal de Conexión:</strong> {userData.userData.senalConexion}</p>
      </div>

      <br/>

      <Link href="./ActualizarDatosPerfil" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
        
          Actualizar Datos
    
      </Link>


    </div>


    {isModalOpen && <ModalImagen userId={userData.userData.id} token={userData.tokenData.token} handleCloseModal={handleCloseModal} closeModal={closeModal} />}


    </div>
  );
};

export default UserProfile;
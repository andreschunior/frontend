"use client";
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext'; // Asegúrate de actualizar la ruta al archivo correcto
import ModalImagen from '@/Components/Dashboard/UserProfile/ModalImagen/ModalImagen';

const UserProfile: React.FC = () => {
  const { userData } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const updateProfileImage = (newImageUrl: string) => {
    setProfileImage(newImageUrl);
    closeModal();
  };

  if (!userData) {
    return <div className="text-center text-gray-500">Cargando...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-32 bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center mb-6">
        <img
          src={profileImage}
          alt="User Icon"
          className="w-16 h-16 rounded-full mr-4 cursor-pointer"
          onClick={openModal}
        />
        <h1 className="text-2xl font-bold">{userData.userData.nombre}</h1>
      </div>
      <div className="text-gray-700">
        <p><strong className='text-blue-700'>Email:</strong> {userData.userData.email}</p>
        <p><strong className='text-blue-700'>Teléfono:</strong> {userData.userData.telefono}</p>
        <p><strong className='text-blue-700'>Dirección:</strong> {userData.userData.direccion}</p>
        <p><strong className='text-blue-700'>Documento:</strong> {userData.userData.documento}</p>
        <p><strong className='text-blue-700'>Razón Social:</strong> {userData.userData.razonSocial}</p>
        <p><strong className='text-blue-700'>Código Postal:</strong> {userData.userData.codigoPostal}</p>
        <p><strong className='text-blue-700'>Domicilio de Instalación:</strong> {userData.userData.domicilioInstal}</p>
        <p><strong className='text-blue-700'>Localidad de Instalación:</strong> {userData.userData.localidadInstal}</p>
        <p><strong className='text-blue-700'>Teléfono de Instalación:</strong> {userData.userData.telefonoInstal}</p>
        <p><strong className='text-blue-700'>Email de Instalación:</strong> {userData.userData.emailInstal}</p>
        <p><strong className='text-blue-700'>Observaciones:</strong> {userData.userData.observaciones}</p>
        <p><strong className='text-blue-700'>Señal de Conexión:</strong> {userData.userData.senalConexion}</p>
      </div>

      {isModalOpen && <ModalImagen userId={userData.userData.id} token={userData.tokenData.token} updateProfileImage={updateProfileImage} closeModal={closeModal} />}
    </div>
  );
};

export default UserProfile;

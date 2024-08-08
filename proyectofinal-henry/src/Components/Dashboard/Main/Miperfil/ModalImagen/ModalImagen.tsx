"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';
import { fetchImageUpload } from '@/services/uploadImage.services';
import Swal from 'sweetalert2';
import { IUserData } from '@/types/login.types';

interface ModalImagenProps {
  userId: string;
  token: string;
  handleCloseModal: () => void;
  closeModal: () => void;
}

const ModalImagen: React.FC<ModalImagenProps> = ({ userId, token, handleCloseModal, closeModal }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { userData, setUserData } = useAuth();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;   
    try {
      const response = await fetchImageUpload(userId, token, selectedFile)
      if (response && userData) {
        const newUserData = {...userData.userData, imgUrl: response}
        const user: IUserData | null = {tokenData: userData.tokenData, userData: newUserData}
        setUserData(user);
        handleCloseModal();
      } else {
        console.error(response)
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al cargar la imagen",
        });
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-end">
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-800">
            &times;
          </button>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Cambiar Imagen de Perfil</h2>
          <input type="file" onChange={handleFileChange} className="mb-4" />
          <button onClick={handleUpload} className="bg-blue-500 text-white py-2 px-4 rounded-lg">Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalImagen;

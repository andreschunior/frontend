"use client"
import React, { useState } from 'react';
import axios from 'axios';

interface ModalImagenProps {
  userId: string;
  token: string;
  updateProfileImage: (newImageUrl: string) => void;
  closeModal: () => void;
}

const ModalImagen: React.FC<ModalImagenProps> = ({ userId, token, updateProfileImage, closeModal }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post(`/user/uploadImage/${userId}`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        updateProfileImage(response.data.imgUrl); // Asumiendo que la URL de la nueva imagen está en `response.data.imageUrl`
      } else {
        console.error('Error uploading image:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
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

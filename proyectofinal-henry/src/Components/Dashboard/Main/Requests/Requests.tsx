"use client";
import React from 'react';

const RequestPage: React.FC = () => {
  const [formData, setFormData] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    // Simular la URL de búsqueda con datos mockeados
    const mockSearchParams = new URLSearchParams({
      nombre: 'Juan Pérez',
      correo: 'juan.perez@example.com',
      telefono: '123456789',
      direccion: 'Calle Falsa 123',
      provincia: 'Buenos Aires',
      localidad: 'La Plata',
      mensaje: 'Solicito más información sobre el producto.',
    });

    const data: Record<string, string> = {};
    mockSearchParams.forEach((value, key) => {
      data[key] = value;
    });
    setFormData(data);
  }, []);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Datos de {formData.nombre}</h1>
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="font-semibold w-1/3">Nombre:</span>
            <span className='text-blue-700'>{formData.nombre}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-1/3">Correo:</span>
            <span className='text-blue-700'>{formData.correo}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-1/3">Teléfono:</span>
            <span className='text-blue-700'>{formData.telefono}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-1/3">Dirección:</span>
            <span className='text-blue-700'>{formData.direccion}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-1/3">Provincia:</span>
            <span className='text-blue-700'>{formData.provincia}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-1/3">Localidad:</span>
            <span className='text-blue-700'>{formData.localidad}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-1/3">Mensaje:</span>
            <span className='text-blue-700'>{formData.mensaje}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPage;

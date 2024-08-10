"use client"
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { sendAssistanceRequest } from '@/services/profileApi'; // Asegúrate de importar la función correcta

const ActualizarDatosPerfil: React.FC = () => {
  const { userData } = useAuth();

  const [formData, setFormData] = useState({
    nombre: userData?.userData.nombre || '',
    email: userData?.userData.email || '',
    telefono: userData?.userData.telefono || '',
    direccion: userData?.userData.direccion || '',
    documento: userData?.userData.documento || '',
    codigoPostal: userData?.userData.codigoPostal || '',
    domicilioInstal: userData?.userData.domicilioInstal || '',
    localidadInstal: userData?.userData.localidadInstal || '',
    telefonoInstal: userData?.userData.telefonoInstal || '',
    emailInstal: userData?.userData.emailInstal || '',
    observaciones: userData?.userData.observaciones || '',
    senalConexion: userData?.userData.senalConexion || '',
  });

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    const newErrors: any = {};

    // Validación de datos del formulario
    if (!formData.nombre) newErrors.nombre = 'El nombre es obligatorio.';
    if (!formData.email) newErrors.email = 'El email es obligatorio.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'El email no es válido.';
    if (!formData.telefono) newErrors.telefono = 'El teléfono es obligatorio.';
    if (!formData.direccion) newErrors.direccion = 'La dirección es obligatoria.';
    if (!formData.documento) newErrors.documento = 'El documento es obligatorio.';
    if (!formData.codigoPostal) newErrors.codigoPostal = 'El código postal es obligatorio.';
    if (!formData.domicilioInstal) newErrors.domicilioInstal = 'El domicilio de instalación es obligatorio.';
    if (!formData.localidadInstal) newErrors.localidadInstal = 'La localidad de instalación es obligatoria.';
    if (!formData.telefonoInstal) newErrors.telefonoInstal = 'El teléfono de instalación es obligatorio.';
    if (!formData.emailInstal) newErrors.emailInstal = 'El email de instalación es obligatorio.';
    else if (!/\S+@\S+\.\S+/.test(formData.emailInstal)) newErrors.emailInstal = 'El email de instalación no es válido.';
    if (!formData.senalConexion) newErrors.senalConexion = 'La señal de conexión es obligatoria.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        const token = userData?.tokenData.token || ''; 
        const userId = userData?.userData.id || ''; 
        
        // Convierte `documento` y `telefonoInstal` a string si son números
        const adjustedFormData = {
          ...formData,
          documento: String(formData.documento),
          telefonoInstal: String(formData.telefonoInstal),
        };

        const response = await sendAssistanceRequest(token, userId, adjustedFormData); 
        console.log("Perfil actualizado:", response);
      } catch (error) {
        console.error("Error al enviar los datos:", error);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-24 bg-white shadow-md rounded-lg p-4">
      <h1 className="text-xl font-bold mb-4 text-center">Actualizar Perfil</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 mb-6">
          <div>
            <input 
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombre"
              className="border p-2 rounded w-full"
            />
            {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
          </div>
          <div>
            <input 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border p-2 rounded w-full"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <input 
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Teléfono"
              className="border p-2 rounded w-full"
            />
            {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}
          </div>
          <div>
            <input 
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              placeholder="Dirección"
              className="border p-2 rounded w-full"
            />
            {errors.direccion && <p className="text-red-500 text-sm">{errors.direccion}</p>}
          </div>
          <div>
            <input 
              name="documento"
              value={formData.documento}
              onChange={handleChange}
              placeholder="Documento"
              className="border p-2 rounded w-full"
            />
            {errors.documento && <p className="text-red-500 text-sm">{errors.documento}</p>}
          </div>
          <div>
            <input 
              name="codigoPostal"
              value={formData.codigoPostal}
              onChange={handleChange}
              placeholder="Código Postal"
              className="border p-2 rounded w-full"
            />
            {errors.codigoPostal && <p className="text-red-500 text-sm">{errors.codigoPostal}</p>}
          </div>
          <div>
            <input 
              name="domicilioInstal"
              value={formData.domicilioInstal}
              onChange={handleChange}
              placeholder="Domicilio de Instalación"
              className="border p-2 rounded w-full"
            />
            {errors.domicilioInstal && <p className="text-red-500 text-sm">{errors.domicilioInstal}</p>}
          </div>
          <div>
            <input 
              name="localidadInstal"
              value={formData.localidadInstal}
              onChange={handleChange}
              placeholder="Localidad de Instalación"
              className="border p-2 rounded w-full"
            />
            {errors.localidadInstal && <p className="text-red-500 text-sm">{errors.localidadInstal}</p>}
          </div>
          <div>
            <input 
              name="telefonoInstal"
              value={formData.telefonoInstal}
              onChange={handleChange}
              placeholder="Teléfono de Instalación"
              className="border p-2 rounded w-full"
            />
            {errors.telefonoInstal && <p className="text-red-500 text-sm">{errors.telefonoInstal}</p>}
          </div>
          <div>
            <input 
              name="emailInstal"
              value={formData.emailInstal}
              onChange={handleChange}
              placeholder="Email de Instalación"
              className="border p-2 rounded w-full"
            />
            {errors.emailInstal && <p className="text-red-500 text-sm">{errors.emailInstal}</p>}
          </div>
          <div>
            <textarea 
              name="observaciones"
              value={formData.observaciones}
              onChange={handleChange}
              placeholder="Observaciones"
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <input 
              name="senalConexion"
              value={formData.senalConexion}
              onChange={handleChange}
              placeholder="Señal de Conexión"
              className="border p-2 rounded w-full"
            />
            {errors.senalConexion && <p className="text-red-500 text-sm">{errors.senalConexion}</p>}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 w-full"
        >
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default ActualizarDatosPerfil;

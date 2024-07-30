"use client";
import React from "react";
import axios from "axios";

interface Localidad {
  id: string;
  nombre: string;
}

interface Provincia {
  id: string;
  nombre: string;
}

interface Relevamiento {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
  provincia: Provincia;
  localidad: Localidad;
  razon: string;
}

const RequestPage: React.FC = () => {
  const [relevamientos, setRelevamientos] = React.useState<Relevamiento[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/relevamientos?page=1&limit=10"
        );
        console.log(response.data); //verifico los datos que recibo
        const dataFromAPI: Relevamiento[] = response.data.relevamientos;
        setRelevamientos(dataFromAPI);
      } catch (error) {
        console.error("Error al obtener los datos del endpoint", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="p-8 max-w-7xl mx-auto mt-24">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-3 sm:ml-4 md:ml-4 lg:ml-12">
          {relevamientos.map((relevamiento) => (
            <div
              key={relevamiento.id}
              className="bg-white shadow-lg rounded-lg p-6 mb-6"
            >
              <h1 className="text-2xl font-bold mb-4 text-center">
                Solicitud de Servicios de {relevamiento.nombre}
              </h1>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="font-semibold w-1/3">Nombre:</span>
                  <span className="text-blue-700">{relevamiento.nombre}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-1/3">Correo:</span>
                  <span className="text-blue-700">{relevamiento.email}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-1/3">Teléfono:</span>
                  <span className="text-blue-700">{relevamiento.telefono}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-1/3">Dirección:</span>
                  <span className="text-blue-700">
                    {relevamiento.direccion}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-1/3">Provincia:</span>
                  <span className="text-blue-700">
                    {relevamiento.provincia.nombre}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-1/3">Localidad:</span>
                  <span className="text-blue-700">
                    {relevamiento.localidad.nombre}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-1/3">Mensaje:</span>
                  <span className="text-blue-700">{relevamiento.razon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RequestPage;

//codigo antiguo de joaquin con datos mock

// "use client";
// import React from "react";

// const RequestPage: React.FC = () => {
//   const [formData, setFormData] = React.useState<Record<string, string>>({});

//   React.useEffect(() => {
//     // Simular la URL de búsqueda con datos mockeados
//     const mockSearchParams = new URLSearchParams({
//       nombre: "Juan Pérez",
//       correo: "juan.perez@example.com",
//       telefono: "123456789",
//       direccion: "Calle Falsa 123",
//       provincia: "Buenos Aires",
//       localidad: "La Plata",
//       mensaje: "Solicito más información sobre el producto.",
//     });

//     const data: Record<string, string> = {};
//     mockSearchParams.forEach((value, key) => {
//       data[key] = value;
//     });
//     setFormData(data);
//   }, []);

//   return (
//     <div className="p-8 max-w-2xl mx-auto">
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <h1 className="text-2xl font-bold mb-4 text-center">
//           Solicitud de Servicios de {formData.nombre}
//         </h1>
//         <div className="space-y-4">
//           <div className="flex items-center">
//             <span className="font-semibold w-1/3">Nombre:</span>
//             <span className="text-blue-700">{formData.nombre}</span>
//           </div>
//           <div className="flex items-center">
//             <span className="font-semibold w-1/3">Correo:</span>
//             <span className="text-blue-700">{formData.correo}</span>
//           </div>
//           <div className="flex items-center">
//             <span className="font-semibold w-1/3">Teléfono:</span>
//             <span className="text-blue-700">{formData.telefono}</span>
//           </div>
//           <div className="flex items-center">
//             <span className="font-semibold w-1/3">Dirección:</span>
//             <span className="text-blue-700">{formData.direccion}</span>
//           </div>
//           <div className="flex items-center">
//             <span className="font-semibold w-1/3">Provincia:</span>
//             <span className="text-blue-700">{formData.provincia}</span>
//           </div>
//           <div className="flex items-center">
//             <span className="font-semibold w-1/3">Localidad:</span>
//             <span className="text-blue-700">{formData.localidad}</span>
//           </div>
//           <div className="flex items-center">
//             <span className="font-semibold w-1/3">Mensaje:</span>
//             <span className="text-blue-700">{formData.mensaje}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RequestPage;

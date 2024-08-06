"use client";
import { useAuth } from '@/context/AuthContext';
import { useSidebarContext } from '@/context/SidebarContext';
import { fetchAllUsers } from '@/services/allUsers.services';
import { allUsers } from '@/types/allUsers.types';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Vertodoslosusuarios = () => {
    const { btnFixed } = useSidebarContext();
    const [users, setUsers] = React.useState<allUsers[]>([]);
    const { userData } = useAuth();
    const [firstLetter, setFirstLetter] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            if (!userData || !userData.tokenData || !userData.tokenData.token) {
                console.error("Token no disponible");
                return;
            }
            const token = userData.tokenData.token;
            try {
                const dataUsersAPI = await fetchAllUsers(token);
                console.log(dataUsersAPI); // verifico los datos que recibo
                setUsers(dataUsersAPI);

                if (dataUsersAPI.length === 0) {
                    Swal.fire({
                        title: "No hay Usuarios en la Base de Datos",
                        icon: "warning",
                        showCancelButton: false,
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Ok",
                    });
                }
            } catch (error) {
                console.error("Error al obtener los datos del endpoint", error);
            }
        };

        if (userData && userData.tokenData && userData.tokenData.token) {
            fetchData();
        }
    }, [userData]);

   
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
            <div className="space-y-4">
            {users.length > 0 && users.map((user) => (
                    <div
                        key={user.id}
                        className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
                    >
                           <div className="grid grid-cols-4 gap-2">
                            <div className="flex items-center">
                                
                                <a>
{ user.imgUrl !== "https://exmple-image.webp" ?


                                <img
                                    src={user.imgUrl}
                                    alt={user.nombre}
                                    className="w-16 h-16 rounded-full"
                                />
:
        <button
          className={`rounded-full w-12 h-12 flex items-center justify-center text-center font-[530] ${getColorByFirstLetter(user.nombre)} text-white`}
        >
          <p className="text-3xl pr-[1px]">{firstLetterName(user.nombre)}</p>
        </button>
    }

                                </a>

                                <div className="ml-4">
                                    <h2 className="text-2xl font-semibold text-gray-600">{user.nombre}</h2>
                                    <p className="text-gray-600">{user.email}</p>
                                </div>
                            </div>
                            <div className="text-gray-500">
                                <p><strong>Teléfono:</strong> {user.telefono}</p>
                                <p><strong>Dirección:</strong> {user.direccion}</p>
                                <p><strong>Razón Social:</strong> {user.razonSocial}</p>
                                <p><strong>Documento:</strong> {user.documento}</p>
                            </div>
                            <div className="text-gray-500">
                                <p><strong>Observaciones:</strong> {user.observaciones}</p>
                                <p><strong>Señal de Conexión:</strong> {user.senalConexion}</p>
                                <p><strong>Creado el:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
                                <p><strong>Es Administrador:</strong> {user.isAdmin ? 'Sí' : 'No'}</p>
                            </div>
                            <div className="text-gray-500">
                                <p><strong>Domicilio de Instalación:</strong> {user.domicilioInstal}</p>
                                <p><strong>Localidad de Instalación:</strong> {user.localidadInstal}</p>
                                <p><strong>Teléfono de Instalación:</strong> {user.telefonoInstal}</p>
                                <p><strong>Email de Instalación:</strong> {user.emailInstal}</p>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Vertodoslosusuarios;

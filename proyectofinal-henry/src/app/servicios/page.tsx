import InConstruction from "@/Components/InConstruction/InConstruction";
import { Navbar } from "@/Components/LandinPage/Navbar";
import { TituloPlanesInternet } from "@/Components/LandinPage/PlanesDeInternet/Titulo";
import { Contador } from "@/Components/Servicios/ContadorServicios/Contador";
import React from "react";
import "animate.css";

const page = () => {
  return (
    <>
      <Navbar />

      <br />
      <br />
      <br />
      <br />

      <TituloPlanesInternet title="Conoce Nuestros Planes de Internet" />

      <TituloPlanesInternet title="Planes Hogar" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 ">
        <div className="flex flex-col items-center justify-center animate__animated animate__fadeInUp p-4">
          <Contador
            endValue={150}
            name="Hogar 1"
            gradiente="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"
          />
        </div>

        <div className="flex flex-col items-center justify-center animate__animated animate__fadeInUp p-4">
          <Contador
            endValue={200}
            name="Hogar 2"
            gradiente="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"
          />
        </div>
        <div className="flex flex-col items-center justify-center animate__animated animate__fadeInUp p-4">
          <Contador
            endValue={250}
            name="Hogar 3"
            gradiente="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"
          />
        </div>
      </div>
      <br />
      <br />
      <TituloPlanesInternet title="Planes Empresas" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 ">
        <div className="flex flex-col items-center justify-center animate__animated animate__fadeInUp p-4">
          <Contador
            endValue={200}
            name="Empresa 1"
            gradiente="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500"
          />
        </div>

        <div className="flex flex-col items-center justify-center animate__animated animate__fadeInUp p-4">
          <Contador
            endValue={300}
            name="Empresa 2"
            gradiente="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500"
          />
        </div>
        <div className="flex flex-col items-center justify-center animate__animated animate__fadeInUp p-4">
          <Contador
            endValue={400}
            name="Empresa 3"
            gradiente="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500"
          />
        </div>
      </div>
    </>
  );
};

export default page;

import InConstruction from "@/Components/InConstruction/InConstruction";
import { Navbar } from "@/Components/LandinPage/Navbar";
import { TituloPlanesInternet } from "@/Components/LandinPage/PlanesDeInternet/Titulo";
import { Contador } from "@/Components/Servicios/ContadorServicios/Contador";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />

      <br />
      <br />
      <br />
      <br />

      <TituloPlanesInternet title="Conoce Nuestros Planes de Internet" />
      <br />
      <TituloPlanesInternet title="Planes Hogar" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 p-4 ">
        <div className="flex flex-col items-center justify-center  p-4 ">
          <Contador endValue={150} name="Hogar 1" />
        </div>

        <div className="flex flex-col items-center justify-center  p-4 ">
          <Contador endValue={200} name="Hogar 2" />
        </div>
        <div className="flex flex-col items-center justify-center  p-4 ">
          <Contador endValue={250} name="Hogar 3" />
        </div>
      </div>
      <br />
      <br />
      <TituloPlanesInternet title="Planes Empresas" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 ">
        <div className="flex flex-col items-center justify-center ">
          <Contador endValue={200} name="Empresa 1" />
        </div>

        <div className="flex flex-col items-center justify-center ">
          <Contador endValue={300} name="Empresa 2" />
        </div>
        <div className="flex flex-col items-center justify-center ">
          <Contador endValue={400} name="Empresa 3" />
        </div>
      </div>
    </>
  );
};

export default page;

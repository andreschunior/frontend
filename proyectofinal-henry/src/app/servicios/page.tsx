import { Navbar } from "@/Components/LandinPage/Navbar";
import { TituloPlanesInternet } from "@/Components/LandinPage/PlanesDeInternet/Titulo";
import { Contador } from "@/Components/Servicios/ContadorServicios/Contador";
import React from "react";
import "animate.css";
import { ServiciosVista } from "@/Components/Servicios/ContadorServicios/Servicios";

const page = () => {
  return (
    <>
      <Navbar />

      <br />
      <br />
      <br />
      <br />

      <TituloPlanesInternet title="Conoce Nuestros Planes de Internet" />

      <ServiciosVista />
    </>
  );
};

export default page;

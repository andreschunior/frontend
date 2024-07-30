import { BotonPagos } from "@/Components/LandinPage/Boton/page";
import { Carrousel } from "@/Components/LandinPage/Carrousel/CarrouselBanner";
import { Navbar } from "@/Components/LandinPage/Navbar";
import { TarjetasPlanesInternet } from "@/Components/LandinPage/PlanesDeInternet/TarjetasPlanesInternet";
import { TituloPlanesInternet } from "@/Components/LandinPage/PlanesDeInternet/Titulo";
import { TextoCentral } from "@/Components/LandinPage/TextoGeneralCentrado/TextoCentral";
import Boton from "../../../pics/BotonTestVelocidad.svg";

import React from "react";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <TituloPlanesInternet title="Test de Velocidad " />
      <TextoCentral texto="Sigue los siguientes pasos para poder probar tu conexion de internet " />
      <br />
      <Link href="https://www.nperf.com/es/" legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <div className="flex justify-center">
            <BotonPagos Imagen={Boton} />
          </div>
        </a>
      </Link>
      <br />
      <TituloPlanesInternet title="¿Qué debo hacer?" />
      <Carrousel />
    </>
  );
};

<a href="#">Servicios</a>;

export default Home;

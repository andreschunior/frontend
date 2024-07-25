import { BotonPagos } from "@/Components/Boton/page";
import { Carrousel } from "@/Components/Carrousel/CarrouselBanner";
import { Navbar } from "@/Components/Navbar";
import { TarjetasPlanesInternet } from "@/Components/PlanesDeInternet/TarjetasPlanesInternet";
import { TituloPlanesInternet } from "@/Components/PlanesDeInternet/Titulo";
import { TextoCentral } from "@/Components/TextoGeneralCentrado/TextoCentral";
import Boton from "../../../pics/BotonTestVelocidad.svg";

import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <TituloPlanesInternet title="Test de Velocidad " />
      <TextoCentral texto="Sigue los siguientes pasos para poder probar tu conexion de internet " />
      <br />
      <a href="#">
        <div className="flex justify-center">
          <BotonPagos Imagen={Boton} />
        </div>
      </a>
      <br />
      <TituloPlanesInternet title="¿Qué debo hacer?" />
      <Carrousel />
    </>
  );
};

<a href="#">Servicios</a>;

export default Home;

import { Banner } from "@/Components/banner/Banner";
import { Navbar } from "@/Components/Navbar";
import { PlanesInternet } from "@/Components/PlanesDeInternet/page";
import { Promo1 } from "@/Components/Promo1/page";
import { Seccion } from "@/Components/SolicitudServicio/Seccion";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Promo1 />
      <PlanesInternet />
      <Banner />
      <Seccion />
    </>
  );
};

export default Home;

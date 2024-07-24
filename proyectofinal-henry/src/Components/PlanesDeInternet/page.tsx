import React from "react";
import { TituloPlanesInternet } from "./Titulo";
import { TarjetasPlanesInternet } from "./TarjetasPlanesInternet";
import { FlipBox } from "./flipbox";

export const PlanesInternet: React.FC = () => {
  return (
    <>
      <TituloPlanesInternet />
      <TarjetasPlanesInternet />
    </>
  );
};

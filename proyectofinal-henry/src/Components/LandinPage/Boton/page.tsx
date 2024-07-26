import React from "react";
import botonPago from "../../../../pics/boton Pagos.svg";
import { BotonProps } from "./type";

export const BotonPagos: React.FC<BotonProps> = ({ Imagen }) => {
  return (
    <>
      <img
        src={Imagen.src}
        alt="Boton de Pagos"
        className=" px-4 py-2 rounded transition-transform transform duration-200 hover:scale-105 max-w-80"
      />
    </>
  );
};

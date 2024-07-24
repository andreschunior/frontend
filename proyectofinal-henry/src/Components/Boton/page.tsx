import React from "react";
import botonPago from "../../../pics/boton Pagos.svg";

export const BotonPagos: React.FC = () => {
  return (
    <>
      <img
        src={botonPago.src}
        alt="Boton de Pagos"
        className=" px-4 py-2 rounded transition-transform transform duration-200 hover:scale-105"
      />
    </>
  );
};

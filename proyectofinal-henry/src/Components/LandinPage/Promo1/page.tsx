import React from "react";
import { Persona1 } from "./Persona1";
import { TextoPromo1 } from "./TextoPromo1";
import { Franja } from "../FranjaDivision/page";

export const Promo1: React.FC = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-20">
        <Persona1 />
        <TextoPromo1 />
      </div>
      <div className="flex justify-center ">
        <Franja texto="UltraNet Velocidad que Conecta" />
      </div>
    </>
  );
};

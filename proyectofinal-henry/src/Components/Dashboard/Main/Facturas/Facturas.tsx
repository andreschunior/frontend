"use client";
import React from "react";
import FacturasList from "./FacturasCard";
import { useSidebarContext } from "@/context/SidebarContext";
import { TituloPlanesInternet } from "@/Components/LandinPage/PlanesDeInternet/Titulo";

const Facturas: React.FC = () => {
  const { btnFixed } = useSidebarContext();
  return (
    <>
      <div
        className={`p-3 mt-20 transition-all duration-1000  ${
          btnFixed ? "ml-[270px]" : "ml-24"
        }`}
      >
        <TituloPlanesInternet title="Facturas" />
        <FacturasList />
      </div>
    </>
  );
};

export default Facturas;

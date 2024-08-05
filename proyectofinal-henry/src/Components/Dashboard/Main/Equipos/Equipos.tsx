"use client";
import React from "react";
import EquiposCard from "./EquiposCard";
import { useSidebarContext } from "@/context/SidebarContext";

const Equipos: React.FC = () => {
  const { btnFixed } = useSidebarContext();

  return (
    <>
      <div
        className={`p-3 mt-20 transition-all duration-1000  ${
          btnFixed ? "ml-[270px]" : "ml-24"
        }`}
      >
        <EquiposCard />
      </div>
    </>
  );
};

export default Equipos;

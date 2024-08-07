"use client";
import Image from "next/image";
import React from "react";
import logoNetlab from "../../../../../pics/boton Pagos.svg";
import iconoINS from "../../../../../pics/BotonTestVelocidad.svg";
import { useSidebarContext } from "@/context/SidebarContext";

const ButtonLogo = () => {
  const { btnFixed, sidebarFixed, isExpanded } = useSidebarContext();

  const handleClick = () => {
    sidebarFixed(!btnFixed);
  };

  return (
    <div className="flex items-center justify-between p-1">
      <button
        className="inline-flex items-center p-2 text-gray-200 "
        onClick={handleClick}
      >
        <Image
          src={iconoINS}
          alt="Icono"
          className={`logoIns h-auto w-12 fixed mt-12 transition-all duration-700 delay-200 ${
            isExpanded ? "opacity-0" : "opacity-100"
          }`}
        />
        <Image
          src={logoNetlab}
          alt="Logo"
          className={`h-auto w-44 fixed mt-14 ml-[10%] transition-all duration-700 delay-200 ${
            isExpanded ? "opacity-100" : "opacity-0"
          }`}
        />
      </button>
    </div>
  );
};

export default ButtonLogo;

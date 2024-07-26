import React from "react";
import botonPago from "../../../../pics/boton Pagos.svg";
import { BotonProps } from "./type";
import Link from "next/link";
import Image from "next/image";

export const BotonPagos: React.FC<BotonProps> = ({ Imagen }) => {
  return (
    <Link href="/login/1">
        <Image
          src={Imagen.src}
          alt="Boton de Pagos"
          className="px-4 py-2 rounded transition-transform transform duration-200 hover:scale-105 max-w-80"
          width={500} // Especifica el ancho según sea necesario
          height={300} // Especifica la altura según sea necesario
        />
    </Link>
    
  );
};

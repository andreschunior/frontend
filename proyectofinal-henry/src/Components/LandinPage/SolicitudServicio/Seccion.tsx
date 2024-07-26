import React from "react";
import { FormServicio } from "./FormServicio";

export const Seccion: React.FC = () => {
  return (
    <>
      <div
        id="contacto"
        className="w-full min-h-screen bg-gradient-to-r from-[#0279F0] to-[#00478F] flex flex-col lg:flex-row items-center justify-center p-4"
      >
        <div className="lg:w-1/3 flex flex-col items-center text-center lg:text-left">
          <h1 className="text-white text-4xl mt-10 lg:mt-0">
            ¿Necesitas más ayuda?
          </h1>
          <p className="text-white text-2xl mt-5 lg:mr-5">
            Con gusto un ejecutivo te ayudará a contratar nuestros servicios
          </p>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mt-5"
          >
            Contactanos
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <FormServicio />
        </div>
      </div>
    </>
  );
};

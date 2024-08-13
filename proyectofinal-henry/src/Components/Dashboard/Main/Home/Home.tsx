"use client";
import { useSidebarContext } from "@/context/SidebarContext";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import Estadodecuenta from "./Estadodecuenta/Estadodecuenta";
import PanelDeControl from "./PanelDeControl/PanelDeControl";

const Home = () => {
  const { btnFixed } = useSidebarContext();
  const { userData } = useAuth();
  const roles = userData?.tokenData.user.roles;

  return (
    <>
         

      <div
        className={`p-3 mt-10 transition-all duration-1000  ${
          btnFixed ? "ml-[270px]" : "ml-24"
        }`}
      >
        <h1 className="text-2xl font-bold text-blue-900 mt-10 dark:text-blue-400/70">
          {roles?.includes("admin")
            ? "Bienvenido a tu plataforma de Administración!"
            : "Bienvenido a tu plataforma de Personal!"}
        </h1>
        <h2 className="text-3xl text-gray-400 dark:text-orange-300/80">
          {roles?.includes("admin")
            ? "Dashboard Administrativo"
            : "Dashboard de Usuario"}
        </h2>
        <br />
        {
            roles?.includes("admin") ? (
              <PanelDeControl />
            ) : roles?.includes("user") ? (
              <Estadodecuenta />
            ) : (
              null
            )
          }

        <br />


      </div>
    </>
  );
};
export default Home;

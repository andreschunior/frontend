"use client";
import React, { useEffect, useState } from "react";
import Home from "./Home/Home";
import styles from './Sidebar.module.css'
import SignOff from "./SignOff/SignOff";
import ButtonResponsive from "./ButtonResponsive/ButtonResponsive";
import ButtonLogo from "./ButtonLogo/ButtonLogo";
import { useSidebarContext } from "@/context/SidebarContext";
import { useAuth } from "@/context/AuthContext";
import Role from "./Role/Role";
import { useDarkContext } from "@/context/DarkContext";
import { sidebarOptionsAdmin, sidebarOptionsUser } from "@/helpers/sidebarOptions";

const SideBar = () => {
    const { userData } = useAuth();
    const { btnFixed, isExpanded, sidebarExpand } = useSidebarContext();
    const roles = userData?.tokenData.user.roles;
    const { darkMode } = useDarkContext();

    const handleMouseOver = () => {
        if (!btnFixed) sidebarExpand(true);
    };
 
    const handleMouseOut = () => {
        if (!btnFixed) sidebarExpand(false);
    };

    return (
        <>
            <ButtonResponsive />
            <aside 
                className={`bg-cover fixed top-0 left-0 z-40 h-screen transition-all duration-700 ${isExpanded ? "translate-x-0 w-[250px]" : "-translate-x-full w-[70px]"
                    } sm:translate-x-0 bg-gradient-to-b from-blue-950 via-blue-950/95 to-blue-400/90  ${darkMode ? styles.darkBackground : styles.background} dark:border-r dark:border-gray-600`}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut} >
                <ButtonLogo />
                <ul className="mt-28">
                    <Home />
                    {roles?.includes("admin") ? 
                        sidebarOptionsAdmin.map((role, roleIndex) => (
                        <Role key={roleIndex} role={role} />
                        ))
                    : 
                        sidebarOptionsUser.map((role, roleIndex) => (
                        <Role key={roleIndex} role={role} />
                        ))
                    }
                </ul>
                <SignOff />
            </aside>
        </>
    );
};

export default SideBar;


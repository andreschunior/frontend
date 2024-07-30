"use client";
import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const ButtonAvatar: React.FC = () => {
  const { userData } = useAuth();
  const [firstLetter, setFirstLetter] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const firstLetterName = (name: string | undefined): string => {
    if (name && name.trim() !== "") return name.trim().charAt(0).toUpperCase();
    else return `<i className="lni lni-user"></i>`;
  };

  useEffect(() => {
    if (userData?.userData) {
      const letter = firstLetterName(userData?.userData.nombre);
      setFirstLetter(letter);
    }
  }, [userData]);

  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center justify-center text-center space-x-4 ">
        <div className="flex flex-col text-end ">
            <p className="text-gray-200">¡Hola, {userData?.userData.nombre}!</p>
        </div>
        <button
          id="dropdownNavbarLink"
          onClick={toggleDropdown}
          className="rounded-full w-12 h-12 flex items-center justify-center text-center font-[530] bg-blue-500 text-white"
        >
          <p className="text-3xl pr-[1px]">{firstLetter}</p>
        </button>
      </div>
      {isDropdownOpen && (
        <DropdownMenu />
      )}
    </div>
  );
};

export default ButtonAvatar;
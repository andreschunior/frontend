"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { IAuthContextProps, IProviderProps, IUserData } from "@/types/types";
import { useRouter } from "next/navigation";
import { destroyCookie, setCookie } from "nookies";

const AuthContext = createContext<IAuthContextProps>({
  userData: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<IProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<IUserData | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (userData) {
      setCookie(null, "authToken", userData.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      localStorage.setItem("userSession", JSON.stringify(userData));
    }
  }, [userData]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedUserData = localStorage.getItem("userSession");
      if (storedUserData) setUserData(JSON.parse(storedUserData));
    }
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "userSession") {
        if (event.newValue) {
          setUserData(JSON.parse(event.newValue));
          router.push("/");
        } else {
          setUserData(null);
          localStorage.removeItem("userSession");
          destroyCookie(null, "authToken");
          window.location.reload();
        }
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [router]);

  const login = (user: IUserData | null) => {
    setUserData(user);
    router.push("/dashboard/home");
  };

  const logout = () => {
    setUserData(null);
    localStorage.removeItem("userSession");
    localStorage.removeItem("selectedCampus");
    destroyCookie(null, "authToken");
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

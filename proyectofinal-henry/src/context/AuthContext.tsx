"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { IAuthContextProps, IProviderProps } from "@/types/context.types";
import { useRouter } from "next/navigation";
import { destroyCookie, setCookie } from "nookies";
import { ILoginProps, ITokenSession, IUserData } from "@/types/login.types";
import { loginSesion } from "@/services/user.services";

const AuthContext = createContext<IAuthContextProps>({
  userData: null,
  login: () => {},
  logout: () => {},
  renewToken: () => {},
});

export const AuthProvider: React.FC<IProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<IUserData | null>(null);
  const router = useRouter();
  

  useEffect(() => {
    if (userData && userData.tokenData) {
      setCookie(null, "authToken", userData.tokenData.token, {
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

  const renewToken = async () => {
    if (userData) {
      try {
        const loginProps: ILoginProps = {
          email: userData.userData.email,
          password:userData.tokenData.keyProperty
        }
        const firstNewTokenData: ITokenSession = await loginSesion(loginProps);
        const newTokenData = {...firstNewTokenData, keyProperty: loginProps.password}
        const user: IUserData | null = {tokenData: newTokenData, userData: userData.userData}
        setUserData(user);  
        window.location.reload();
      } catch (error) {
        console.error("Error renovando el token:", error);
        logout();
      }
    }
  };


  return (
    <AuthContext.Provider
      value={{
        userData,
        login,
        logout,
        renewToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

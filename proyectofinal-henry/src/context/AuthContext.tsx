"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { IAuthContextProps, IProviderProps } from "@/types/context.types";
import { useRouter } from "next/navigation";
import { destroyCookie, setCookie } from "nookies";
import { ILoginProps, ITokenSession, IUserData } from "@/types/login.types";
import { loginSesion } from "@/services/user.services";

const AuthContext = createContext<IAuthContextProps>({
  userData: null,
  setUserData: () => {},
  login: () => {},
  logout: () => {},
  renewToken: () => {},
});

export const AuthProvider: React.FC<IProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<IUserData | null>(null);
  const router = useRouter();

  // Efecto para manejar el almacenamiento en cookies y localStorage
  useEffect(() => {
    if (userData && userData.tokenData) {
      setCookie(null, "authToken", userData.tokenData.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      localStorage.setItem("userSession", JSON.stringify(userData));
    }
  }, [userData]);

  // Efecto para manejar los cambios en el almacenamiento local
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedUserData = localStorage.getItem("userSession");
      if (storedUserData) setUserData(JSON.parse(storedUserData));
    }

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "userSession") {
        if (event.newValue) {
          setUserData(JSON.parse(event.newValue));
          // Uso de función interna para manejar redirección
          const navigateToHome = () => router.push("/");
          navigateToHome();
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
  }, []); // Deja el arreglo de dependencias vacío para evitar advertencias

  const [cookieReady, setCookieReady] = useState(false);

  // Efecto para redirigir después de que la cookie esté lista
  useEffect(() => {
    if (cookieReady) {
      router.push("/dashboard/home");
    }
  }, [cookieReady]);

  const login = (user: IUserData | null) => {
    setUserData(user);
    setCookieReady(true);
  };

  const logout = () => {
    setUserData(null);
    localStorage.removeItem("userSession");
    localStorage.removeItem("selectedCampus");
    destroyCookie(null, "authToken");
    setCookieReady(false);
    router.push("/");
  };

  const renewToken = async () => {
    if (userData && userData.tokenData.keyProperty !== null) {
      try {
        const loginProps: ILoginProps = {
          email: userData.userData.email,
          password: userData.tokenData.keyProperty,
        };
        const firstNewTokenData: ITokenSession = await loginSesion(loginProps);
        const newTokenData = {
          ...firstNewTokenData,
          keyProperty: loginProps.password,
        };
        const user: IUserData | null = {
          tokenData: newTokenData,
          userData: userData.userData,
        };
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
        setUserData,
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

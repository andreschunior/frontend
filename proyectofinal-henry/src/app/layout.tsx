import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { DarkProvider } from "@/context/DarkContext";
import { SidebarProvider } from "@/context/SidebarContext";
import MercadoPagoInitializer from "@/Components/Dashboard/Main/Pagos/MercadoPagoInitializer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UltraNet",
  description: "Plataforma de Administración",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <DarkProvider>
       <SidebarProvider>
        <html lang="en">
          <body className={inter.className}>
            <MercadoPagoInitializer />
              {children}
          </body>
        </html>
      </SidebarProvider>
     </DarkProvider>
    </AuthProvider>
  );
}

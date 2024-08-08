"use client";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  DescargarFactura,
  fetchFacturasId,
} from "@/services/Facturas.services";
import Factura, { FacturasResponse } from "@/types/factura.types";
import FacturaDetailModal from "./FacturaDetalles";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const FacturasList: React.FC = () => {
  const { userData } = useAuth();
  const router = useRouter();

  const [facturas, setFacturas] = useState<Factura[]>([]);
  const [selectedFactura, setSelectedFactura] = useState<Factura | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getFacturas = async () => {
      if (!userData || !userData.tokenData || !userData.tokenData.token) {
        console.error("Token no disponible");
        setIsLoading(false);
        return;
      }

      const token = userData.tokenData.token;
      const id = userData.userData.id;
      try {
        const data: any = await fetchFacturasId(token, id);
        if (data && data.facturas) {
          // Extraer el array de facturas desde el objeto completo
          setFacturas(data.facturas);
          console.log(data);
        } else {
          // Si data es null o data.facturas no está definido, asigna un array vacío
          setFacturas([]);
        }
      } catch (error) {
        console.error("Error al obtener las facturas:", error);
        // Asegúrate de que el estado facturas se establezca como vacío en caso de error
        setFacturas([]);
      } finally {
        setIsLoading(false);
      }
    };

    getFacturas();
  }, [userData]);

  // useEffect(() => {
  //   if (!isLoading) {
  //     if (facturas.length === 0) {
  //       Swal.fire({
  //         title: "No Tiene Facturas",
  //         icon: "info",
  //         showCancelButton: false,
  //         confirmButtonColor: "#3085d6",
  //         confirmButtonText: "Ok",
  //       });
  //     }
  //   }
  // }, [isLoading, facturas]);

  const handleOpenModal = (factura: Factura) => {
    setSelectedFactura(factura);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedFactura(null);
    setIsModalOpen(false);
  };

  const handlePay = () => {
    console.log("Pagar factura", selectedFactura);
    router.push("/dashboard/pagos");
    console.log(selectedFactura?.id);
  };

  const handleDownload = async () => {
    if (selectedFactura) {
      try {
        if (userData && userData.tokenData && userData.tokenData.token) {
          const token = userData.tokenData.token;
          const response = await DescargarFactura(token, selectedFactura.id);

          const blob = new Blob([response], { type: "application/pdf" });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `Factura-${selectedFactura.id}.pdf`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
          console.log(selectedFactura?.id);
        } else {
          console.error("Token no disponible");
        }
      } catch (error) {
        console.error("Error al descargar la factura:", error);
      }
    }
  };

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="flex justify-center">
      <div className="w-auto">
        {facturas.length === 0 ? (
          <h1 className="text-4xl">No tiene facturas</h1>
        ) : (
          facturas.map((factura) => (
            <div
              key={factura.id}
              className="p-4 mb-2 border rounded-md cursor-pointer hover:bg-gray-100 flex justify-center"
              onClick={() => handleOpenModal(factura)}
            >
              <p>
                Fecha de Generación:{" "}
                {new Date(factura.fechaGen).toLocaleDateString()}
              </p>
              <p className="ml-10">Número de Factura: {factura.numFactura}</p>
            </div>
          ))
        )}
        {selectedFactura && (
          <FacturaDetailModal
            factura={selectedFactura}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onPay={handlePay}
            onDownload={handleDownload}
          />
        )}
      </div>
    </div>
  );
};

export default FacturasList;

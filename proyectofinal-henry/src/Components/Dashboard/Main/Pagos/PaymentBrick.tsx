"use client";
import React from 'react';
import { Payment } from '@mercadopago/sdk-react';

interface PaymentBrickProps {
  preferenceId: string;
}

const PaymentBrick: React.FC<PaymentBrickProps> = ({ preferenceId }) => {
  const initialization = {
    amount: 100, // Ajusta esto según tu lógica
    preferenceId: preferenceId,
  };

  const customization = {
    paymentMethods: {
      ticket: ['all'],
      creditCard: ['all'],
      debitCard: ['all'],
      mercadoPago: ['all'],
    },
  };

  const onSubmit = async ({ selectedPaymentMethod, formData }: { selectedPaymentMethod: string; formData: any }) => {
    return new Promise<void>((resolve, reject) => {
      fetch('/api/payments/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then(() => resolve())
        .catch(() => reject());
    });
  };

  const onError = (error: any) => {
    console.error(error);
  };

  const onReady = () => {
    // Opcional: Ocultar cargamentos u otras acciones cuando el Brick esté listo
  };

  return (
    // <div className="w-80 max-w-full mx-auto">
    <Payment
      initialization={initialization}
      customization={customization}
      onSubmit={onSubmit}
      onReady={onReady}
      onError={onError}
      locale='es-AR'
    />
    // </div>
  );
};

export default PaymentBrick;
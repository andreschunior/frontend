"use client";

import { useEffect } from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react';

const MercadoPagoInitializer: React.FC = () => {
  useEffect(() => {
    initMercadoPago('TEST-56e23f85-11d0-4b05-a695-e6889282fbad');
    console.log('initMercadoPago en component')
  }, []);

  return null;
};

export default MercadoPagoInitializer;
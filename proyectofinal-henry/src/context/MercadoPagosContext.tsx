'use client'
import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react';
import { IProviderProps } from '@/types/context.types';

export interface IinitMercadoPagos {}
const MercadoPagoContext = createContext<IinitMercadoPagos | undefined>(undefined);

export const MercadoPagoProvider: React.FC<IProviderProps> = ({ children }) => {
    useEffect(() => {
        initMercadoPago('TEST-56e23f85-11d0-4b05-a695-e6889282fbad');
        console.log('Mercado Pago initialized en context');
    }, []);

    return (
        <MercadoPagoContext.Provider value={{}}>
            {children}
        </MercadoPagoContext.Provider>
    );
};

export const useMercadoPago = () => {
    const context = useContext(MercadoPagoContext);
    if (context === undefined) {
        throw new Error('useMercadoPago must be used within a MercadoPagoProvider');
    }
    return context;
};

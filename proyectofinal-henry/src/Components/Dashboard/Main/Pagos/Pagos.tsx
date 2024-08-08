"use client";
import { useSidebarContext } from '@/context/SidebarContext';
import React from 'react'
import PaymentBrick from './PaymentBrick';

const Pagos = () => {
    const { btnFixed } = useSidebarContext();
    
  return (
    <div
        className={`p-3 mt-20 transition-all duration-1000  ${
          btnFixed ? "ml-[270px]" : "ml-24"
        }`}
      >
        <h1 className="text-2xl font-bold text-blue-900 mt-10 dark:text-blue-400/70">
          Pasarela de Pagos Prueba!
        </h1>
            {/*  aqui tu codigo de pruebas... */}

          <PaymentBrick preferenceId='YOUR_PREFERENCE_ID' />

        
      </div>
 
  )
}

export default Pagos
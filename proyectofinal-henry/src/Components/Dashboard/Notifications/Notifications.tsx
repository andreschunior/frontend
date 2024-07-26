'use client'
import { useSidebarContext } from '@/context/SidebarContext';
import React from 'react'

const Notifications = () => {
    const { btnFixed } = useSidebarContext();
    return (
      <div className={`p-3 mt-20 transition-all duration-1000 ${btnFixed ? 'ml-[270px]' : 'ml-24'}`} >
          Notifications
      </div>
  )
}

export default Notifications
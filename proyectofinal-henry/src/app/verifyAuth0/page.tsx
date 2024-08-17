import dynamic from 'next/dynamic';
import React from 'react'

const VerifyAuth0 = dynamic(() => import('@/Components/Login/VerifyAuth0/VerifyAuth0'), { ssr: false });

const page = () => {
    
  return (
    <>
        <VerifyAuth0 />
    </>
  )
}

export default page;
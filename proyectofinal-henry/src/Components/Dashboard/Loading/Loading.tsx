import React from 'react';
import iconoNetlab from '../../../../pics/iconoCasa.svg'; 
import styles from './Loading.module.css'
import Image from 'next/image';

const Loading = () => {

  return (
    <>
      <Image src={iconoNetlab} className={styles.iconoImage}  alt="Logo" />
    </>
  );
};

export default Loading;
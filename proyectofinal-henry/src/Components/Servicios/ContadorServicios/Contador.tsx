"use client";
import React, { useEffect, useState } from "react";

interface AnimatedNumberProps {
  endValue: number;
  name?: string;
  gradiente?: string;
}

export const Contador: React.FC<AnimatedNumberProps> = ({
  endValue,
  name,
  gradiente,
}) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    let startValue = 0;
    const duration = 2000; // Duración de la animación en milisegundos
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const newValue = Math.ceil(
        startValue + progress * (endValue - startValue)
      );
      setCounter(newValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [endValue]);

  return (
    <div
      className={`flex flex-col items-center justify-center w-5/6 p-4 rounded-xl shadow-md ${gradiente}`}
    >
      <h1 className="text-6xl text-white mb-5">{name}</h1>
      <div className="border-t-2 border-white my-4 w-full"> </div>
      <h1 className="text-8xl text-white mb-5">{counter}</h1>
      <p className="text-xl text-white mb-5">Megabits por segundo</p>
      <div className="border-t-2 border-white my-4 w-full"> </div>
      <p className="text-md text-white mb-5 flex">
        hasta {counter} de bajada ↓
      </p>

      <p className="text-md text-white flex">hasta {counter} de Subida ↑</p>
    </div>
  );
};

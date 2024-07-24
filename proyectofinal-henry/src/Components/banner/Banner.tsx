import React from "react";
import banner from "../../../pics/banner1.svg";

export const Banner: React.FC = () => {
  return (
    <>
      <div className="w-full h-auto">
        <img src={banner.src} alt="" />
      </div>
    </>
  );
};

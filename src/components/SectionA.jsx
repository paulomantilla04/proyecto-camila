import React from "react";
import textureA from "../assets/texture-a.webp";

const SectionA = () => {
  return (
    <section className="section-a">
      <div className="relative">
        <img src={textureA} alt="" className="w-96" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <h2 className="font-primary text-3xl font-light">BAUTIZO</h2>
          <h1 className="font-titles text-9xl">Camila</h1>
          <p className="font-primary text-lg">02 DE MARZO DE 2024</p>
        </div>
      </div>
    </section>
  );
};

export default SectionA;

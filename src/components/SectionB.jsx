import React from "react";
import { GoHeartFill } from "react-icons/go";

const SectionB = () => {
  return (
    <section className="section-b">
      <div className="h-[20rem] w-[24rem] bg-[#797E84] flex flex-col items-center justify-center">
        <p className="text-white text-center font-primary text-md p-10">
          Señor, toma mi pequeño corazón en tus benditas manos a partir de de
          este día en que te ofrezco la inocencia de mi niñez, y jamás te
          separes de mí.
        </p>
        <span className="text-white text-xl">
          <GoHeartFill />
        </span>
      </div>
    </section>
  );
};

export default SectionB;

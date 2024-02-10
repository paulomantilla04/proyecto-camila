import React from "react";

const SectionC = () => {
  return (
    <section className="section-c">
      <div className="h-[32rem] w-[24rem] bg-[#f1f2f3] flex flex-col items-center justify-center">
        <div className="h-[28rem] w-[22rem] bg-transparent border-2 border-black px-8 py-6 font-primary">
          <div className="texto-1 text-center text-lg">
            <p>
              Con la bendición de Dios y  en compañía de mis padres y padrinos
            </p>
          </div>
          <div className="padres text-center py-3">
            <p className="text-md py-3">Mis padres</p>
            <p className="text-sm">Omar Reyna Carranza</p>
            <p className="text-sm">María Teresa Mantilla Hernández</p>
          </div>
          <div className="padrinos text-center py-3">
            <p className="text-md py-3">Mis padrinos</p>
            <p className="text-sm">Víctor Abraham Rosales Lara</p>
            <p className="text-sm">Anahí Peña Hernández</p>
          </div>
          <div className="frase py-3 text-center text-lg">
            <p>Nos complace invitarte a ser parte de este hermoso día.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionC;

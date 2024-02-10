import React from 'react'
import Contenedor from './Contenedor'
import Invitado from './Invitado'
import catedralImg from '../assets/catedral.webp';
import salonImg from '../assets/salon.webp';

const SectionE = () => {

  return (
    <section className="section-e">
      
        <div className=" bg-[#ffffff23] flex flex-col items-center justify-center p-10">
            <h1 className="texto-1 text-center text-lg">
                <p className='font-primary text-3xl m-5'>
                    Dónde y Cuándo
                </p>

                <Contenedor 
                  img={catedralImg} 
                  title="Ceremonia Religiosa" 
                  place="Catedral San José de Tula" 
                  time="10:00hrs" 
                  address="C. 5 de Mayo, #5, 42800 Tula de Allende"
                  url="https://maps.app.goo.gl/72KUhnfddG9N5Kzq9">
                </Contenedor>

                <Contenedor 
                  img={salonImg} 
                  title="Recepción" 
                  place="Salón Verbena Eventos" 
                  time="14:00hrs" 
                  address="C. Emiliano Zapata, #37, Iturbe 42820 Tula de Allende"
                  url="https://maps.app.goo.gl/4YQdrMjLc5W3pnrZ7">
                </Contenedor>
              
                <div className='mt-5'>
                  <Invitado/>
                  </div>
                
            </h1>
        </div>
    </section>
  )
}

export default SectionE
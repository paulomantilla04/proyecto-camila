import React from 'react'
import Contenedor from './Contenedor'
import Invitado from './Invitado'

const SectionE = () => {
  return (
    <section className="section-e">
        <div className="h-[40rem] w-[24rem] bg-[#ffffff23] flex flex-col items-center">
            <h1 className="texto-1 text-center text-lg">
                <p className='font-primary text-3xl mt-5'>
                    Dónde y Cuándo
                </p>
                <Contenedor/>
                <Contenedor/>
                <Invitado/>
            </h1>
        </div>
    </section>
  )
}

export default SectionE
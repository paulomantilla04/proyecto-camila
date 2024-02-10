import React from 'react'
import textureC from '../assets/texture-c.webp';
import { GoHeartFill } from "react-icons/go";


const SectionF = () => {
  return (
    <section className="section-f">
        <div className="relative">
            <img src={textureC} alt="" className='w-96' />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-8">
                <h1 className='font-primary text-3xl text-center py-8 font-light'>Gracias por acompañarme en ese día tan especial para mí</h1>
                <span className="text-black text-2xl">
                    <GoHeartFill />
                </span>
            </div>
        </div>
        <div className="empty bg-[#797E84] h-[10rem]"></div>
    </section>
  )
}

export default SectionF
import React from 'react'

const Contenedor = ({title, place, time, address, img, url}) => {
  return (
    <div className=" w-[20rem] border-2 border-[#797E84] bg-[#EFF0F1] mb-10">
        <div className="w-full h-96 relative overflow-hidden">
            <img src={img} className="h-full w-full object-cover" alt="Imagen" />
        </div>

        <div className="p-5 flex flex-col items-center justify-center">
            <p className='mb-5 font-primary text-3xl'>{title}</p>
            <p className='mb-5 font-primary text-md'>{place}</p>
            <p className='mb-5 font-primary text-md'>{time}</p>
            <p className='mb-5 font-primary text-md'>{address}</p>
            <a href={url} target="_blank" className='bg-[#797e84] px-8 py-2 mb-5 font-primary text-white hover:bg-[#62666a] transition-all duration-300 hover:scale-110 cursor-pointer'>VER MAPA</a>
        </div>
    </div>
    
  )
}

export default Contenedor
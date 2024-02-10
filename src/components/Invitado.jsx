import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { BiMinus } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";




const Invitado = () => {


    let { nombre } = useParams();
    let name = decodeURIComponent(nombre.replace(/\+/g, " "));
    const capitalizeWords = (str) => {
        return str
          .split(" ")
          .map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join(" ");
      };
    
    let fullName = capitalizeWords(name);

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleDecrement = () => {
        if (counter > 0){
            setCounter(counter - 1);
        } else {
            alert('no se puede decrementar en 0');
        }
    }


    const data = {
      person: {fullName},
      plusOnes: {counter}
    }

    const test = () => {
      alert(`${fullName} ha confirmado su asistencia con ${counter} acompañantes`)
    }


  return (
    <div className='w-[20rem] h-[23rem] bg-[#EFF0F1] p-5 shadow-lg'>
        <p className="font-primary text-3xl">Invitación para: </p>
        <p className='font-primary text-md py-3'>{fullName}</p>
        <div className="contador flex flex-row items-center justify-center p-5 space-x-4">
            <button onClick={handleDecrement} className='bg-[#ffffff] px-2 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-90'><BiMinus/></button>
            <span className='bg-[#ffffff] px-6 py-4 text-2xl font-primary rounded-lg shadow-md'>{counter}</span>
            <button onClick={handleIncrement} className='bg-[#ffffff] px-2 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-90'><IoMdAdd/></button>
        </div>
        <p className="font-primary text-sm">No. acompañantes</p>
        <button onClick={test} className='bg-[#797E84] px-4 py-2 m-8 text-white font-primary hover:scale-90 hover:bg-[#62666A] transition-all duration-300'>CONFIRMAR</button>
    </div>
  )
}

export default Invitado
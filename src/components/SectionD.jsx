import React, {useState, useEffect} from 'react'
import textureB from '../assets/texture-b.webp';

const SectionD = () => {

    
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date('2024-03-02T10:00:00').getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setCountdown({days, hours, minutes, seconds});

            if (distance < 0) {
                clearInterval(interval);
                setCountdown({days: 0, hours: 0, minutes: 0, seconds: 0});
            }
        }, 1000);
    }, []);


  return (
    <section className="section-d">
        <div className="relative">
            <img src={textureB} alt="" className='w-96'/>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <h2 className='font-primary text-3xl'>Faltan</h2>
                <div className="flex flex-row space-x-[-0.8rem] py-5">
                    <div className="p-4 flex flex-col items-center">
                        <span className='font-primary text-5xl'>{countdown.days}</span>
                        <span className='font-primary text-sm'>DÍAS</span>
                    </div>
                    <div className="p-4 flex flex-col items-center">
                        <span className='font-primary text-5xl'>{countdown.hours}</span>
                        <span className='font-primary text-sm'>HRS</span>
                    </div>
                    <div className="p-4 flex flex-col items-center">
                        <span className='font-primary text-5xl'>{countdown.minutes}</span>
                        <span className='font-primary text-sm'>MINS</span>
                    </div>
                    <div className="p-4 flex flex-col items-center">
                        <span className='font-primary text-5xl'>{countdown.seconds}</span>
                        <span className='font-primary text-sm'>SEGS</span>
                    </div>
                </div>
                <p className='font-primary text-xl'>para mi bautizo</p>
            </div>
        </div>
    </section>
  )
}

export default SectionD
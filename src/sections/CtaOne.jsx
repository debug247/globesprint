import React, { useEffect } from 'react'
import cta1 from '../assets/cta1.webp'
import { FaPlay } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function CtaOne() {

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      delay: 200,    // Delay between animations
      once: false,    // Only animate once
    });
  }, []);

  return (
    <div id='cta1' style={{ backgroundImage: `url(${cta1})` }} className='relative w-full h-[500px] p-22 flex flex-col justify-center items-center gap-5 bg-cover bg-center'>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className='relative z-10 flex flex-col justify-center items-center gap-5'>
        <h1 data-aos="zoom-in" data-aos-delay="100" className='lg:text-5xl text-3xl font-fakhwang font-semibold text-white lg:w-[60%] w-full text-center capitalize'>No matter where you’re going from, we take you there</h1>
        <p data-aos="zoom-in" data-aos-delay="200" className='text-white lg:w-[50%] w-full text-lg text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus veritatis hic doloremque quibusdam reiciendis consequatur quis iusto exercitationem. Nisi, odit?</p>
        <div data-aos="zoom-in" data-aos-delay="300" className='bg-white lg:p-7 p-4 rounded-full'>
          <FaPlay className='text-orange-600 text-2xl' />
        </div>
      </div>

    </div>
  )
}

export default CtaOne
import React, { useEffect } from 'react'
import service1 from '../assets/service1.webp'
import service2 from '../assets/service2.webp'
import service3 from '../assets/service3.webp'
import service4 from '../assets/service4.webp'
import service5 from '../assets/service5.webp'
import service6 from '../assets/service6.webp'
import { FaPlay } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      delay: 200,    // Delay between animations
      once: false,    // Only animate once
    });
  }, []);

  return (
    <div id='services' className='w-full bg-gray-200 lg:px-22 px-5 lg:py-22 py-20 flex flex-col justify-between lg:items-center items-left gap-5'>
      <h1 data-aos="zoom-in" data-aos-delay="100" className='lg:text-5xl text-3xl font-fakhwang font-semibold text-black'>Discover Your Next Dream Destination</h1>
      <p data-aos="slide-up" data-aos-delay="200" className='text-gray-500 lg:w-[60%] w-full lg:text-center text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum iure doloribus. Id, aspernatur? Nulla aliquam veniam in ea cumque.</p>
      <hr data-aos="zoom-in" data-aos-delay="300" className="lg:w-[7%] w-[20%] border-2 border-orange-600" />

      {/* services grids here  */}

      {/* first row starts  */}
      <div data-aos="zoom-in" data-aos-delay="400" id='first-row' className='w-full flex lg:flex-row flex-col justify-between items-center gap-5 mt-5'>
        <div id='left' className='lg:w-[50%] w-full flex lg:flex-row flex-col justify-between items-center gap-5'>
          <div style={{ backgroundImage: `url(${service1})` }} className='relative bg-cover bg-center w-full h-[350px] rounded-md p-8 flex justify-center  items-end'>
            {/* Gradient Overlay */}
            <div className="absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10"></div>
            <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
              <div className='lg:w-[80%] w-full'>
                <h1 className='text-white text-2xl font-semibold'>Padar Island</h1>
                <p className='text-white text-lg'>Indonesia</p>
              </div>
              <div className='w-[20%] bg-white rounded-full flex justify-center items-center p-3'>
                <FaPlay className='lg:text-2xl text-xl' />
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${service2})` }} className='relative bg-cover bg-center w-full h-[350px] rounded-md p-8 flex justify-center  items-end'>
            {/* Gradient Overlay */}
            <div className="absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10"></div>
            <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
              <div className='lg:w-[80%] w-full'>
                <h1 className='text-white text-2xl font-semibold'>Padar Island</h1>
                <p className='text-white text-lg'>Indonesia</p>
              </div>
              <div className='w-[20%] bg-white rounded-full flex justify-center items-center p-3'>
                <FaPlay className='lg:text-2xl text-xl' />
              </div>
            </div>
          </div>

        </div>

        {/* right one bigger one  */}
        <div id='right' className='lg:w-[50%] w-full'>
          <div style={{ backgroundImage: `url(${service3})` }} className='relative bg-cover bg-center w-full h-[350px] rounded-md p-8 flex justify-center  items-end'>
            {/* Gradient Overlay */}
            <div className="absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10"></div>
            <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
              <div className='lg:w-[80%] w-full'>
                <h1 className='text-white text-2xl font-semibold'>Padar Island</h1>
                <p className='text-white text-lg'>Indonesia</p>
              </div>
              <div className='lg:w-[10%] w-[20%] bg-white rounded-full flex justify-center items-center p-4'>
                <FaPlay className='lg:text-2xl text-xl' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* first row ends here  */}

      {/* 2nd row starts here  */}
      <div data-aos="zoom-in" data-aos-delay="400" id='second-row' className='w-full flex lg:flex-row-reverse flex-col justify-between items-center gap-5 mt-5'>
        <div id='left' className='lg:w-[50%] w-full flex lg:flex-row flex-col justify-between items-center gap-5'>
          <div style={{ backgroundImage: `url(${service4})` }} className='relative bg-cover bg-center w-full h-[350px] rounded-md p-8 flex justify-center  items-end'>
            {/* Gradient Overlay */}
            <div className="absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10"></div>
            <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
              <div className='lg:w-[80%] w-full'>
                <h1 className='text-white text-2xl font-semibold'>Padar Island</h1>
                <p className='text-white text-lg'>Indonesia</p>
              </div>
              <div className='w-[20%] bg-white rounded-full flex justify-center items-center p-3'>
                <FaPlay className='lg:text-2xl text-xl' />
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${service5})` }} className='relative bg-cover bg-center w-full h-[350px] rounded-md p-8 flex justify-center  items-end'>
            {/* Gradient Overlay */}
            <div className="absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10"></div>
            <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
              <div className='lg:w-[80%] w-full'>
                <h1 className='text-white text-2xl font-semibold'>Padar Island</h1>
                <p className='text-white text-lg'>Indonesia</p>
              </div>
              <div className='w-[20%] bg-white rounded-full flex justify-center items-center p-3'>
                <FaPlay className='lg:text-2xl text-xl' />
              </div>
            </div>
          </div>

        </div>

        {/* right bigger one  */}
        <div id='right' className='lg:w-[50%] w-full'>
          <div style={{ backgroundImage: `url(${service6})` }} className='relative bg-cover bg-center w-full h-[350px] rounded-md p-8 flex justify-center  items-end'>
            {/* Gradient Overlay */}
            <div className="absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10"></div>
            <div className='relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3'>
              <div className='lg:w-[80%] w-full'>
                <h1 className='text-white text-2xl font-semibold'>Padar Island</h1>
                <p className='text-white text-lg'>Indonesia</p>
              </div>
              <div className='lg:w-[10%] w-[20%] bg-white rounded-full flex justify-center items-center p-4'>
                <FaPlay className='lg:text-2xl text-xl' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd row ends here  */}
    </div>
  )
}

export default Services
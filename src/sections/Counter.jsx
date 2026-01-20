import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Counter() {

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      delay: 200,    // Delay between animations
      once: false,    // Only animate once
    });
  }, []);

  return (
    <div className='w-full lg:px-22 px-10 py-10 grid lg:grid-cols-4 grid-cols-2 lg:gap-5 gap-7'>
      <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-orange-600 text-5xl font-bold font-fakhwang'>27K+</h1>
        <h1 className='text-black font-semibold'>Happy Travelers</h1>
      </div>
      <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-orange-600 text-5xl font-bold font-fakhwang'>50+</h1>
        <h1 className='text-black font-semibold'>Top Destinations</h1>
      </div>
      <div data-aos="zoom-in" data-aos-delay="300" className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-orange-600 text-5xl font-bold font-fakhwang'>4.8/5</h1>
        <h1 className='text-black font-semibold'>Customer Reviews</h1>
      </div>
      <div data-aos="zoom-in" data-aos-delay="400" className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-orange-600 text-5xl font-bold font-fakhwang'>30+</h1>
        <h1 className='text-black font-semibold'>Country Places</h1>
      </div>
    </div>
  )
}

export default Counter
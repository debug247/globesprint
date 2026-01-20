import React, { useEffect } from 'react'
import heroimg from '../assets/hero.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      delay: 200,    // Delay between animations
      once: false,    // Only animate once
    });
  }, []);

  return (
    <div
      id="hero"
      className="relative w-full lg:h-screen h-[550px] bg-cover bg-center z-20"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="w-full relative z-10 flex flex-col justify-center items-center h-full gap-6 text-white px-6">
        <h1 data-aos="zoom-in" data-aos-delay="100" className="lg:text-7xl text-4xl capitalize text-center font-fakhwang font-bold">
          Explore every beautiful <br /> destinations
        </h1>

        <p data-aos="zoom-in" data-aos-delay="200" className="text-lg text-center lg:w-[50%] w-full">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci magnam dolorem accusantium autem debitis earum possimus voluptate aliquam quia vel.
        </p>

        <button data-aos="slide-up" data-aos-delay="300" className="bg-orange-500 hover:bg-black hover:text-white px-8 py-3 font-semibold capitalize rounded-md mt-5 cursor-pointer">
          Booking Now
        </button>
      </div>
    </div>
  )
}

export default Hero

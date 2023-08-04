import React, { useRef, useState } from "react";
import hero1 from "../../Assets/images/hero1.png";
import hero2 from "../../Assets/images/hero2.png";
import hero3 from "../../Assets/images/hero3.png";
import { AiOutlineArrowDown } from "react-icons/ai";

const Hero = () => {
  const heroImages = [hero1, hero2, hero3];
  const [activeImgIndex, setActiveImgIndex] = useState(2);
  const img = heroImages[activeImgIndex];
  const hero = useRef();

  const scrollBelow = () => {
    const heroBottom = hero.current.getBoundingClientRect().bottom;
    window.scrollTo({
      behavior: "smooth",
      top: heroBottom,
    });
  };

  return (
    <div className='relative z-10' ref={hero}>
      <img src={img} className='h-[93vh] w-full object-cover' alt='' />
      <div className='flex items-end justify-end'>
        <div className='bg-black bg-opacity-50 absolute h-[93vh] top-0 md:w-1/2 sm:clip flex flex-col items-center justify-center'>
          <div className='sm:w-3/4 ml-auto p-4 text-white'>
            <h2 className=''>INVESTORS | TECHNOLOGISTS | MENTORS | EXPERTS</h2>
            <p className='font-bold text-3xl my-3'>
              A solition development company with focus on using Information
              Technology to provide solutions
            </p>
          </div>
        </div>
      </div>
      <div
        className='flex items-center justify-center scroll'
        onClick={scrollBelow}
      >
        <AiOutlineArrowDown className='w-12 md:w-16 h-12 md:h-16 p-2 bg-white text-pry rounded-full absolute bottom-32' />
      </div>
    </div>
  );
};

export default Hero;

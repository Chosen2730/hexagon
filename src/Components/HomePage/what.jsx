import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaAsterisk } from "react-icons/fa";
import { AnimationOnScroll } from "react-animation-on-scroll";
const What = () => {
  return (
    <div>
      <div
        className='flex items-center justify-center scroll'
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <AiOutlineArrowUp className='w-12 md:w-16 h-12 md:h-16 p-2 bg-pry text-white rounded-full' />
      </div>
      <div className='container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[50vh] items-center'>
        <AnimationOnScroll animateIn='animate__backInLeft'>
          <div>
            <h2 className='flex items-center uppercase gap-5 text-xl'>
              <FaAsterisk className='text-pry' />
              What we do
            </h2>
            <p className='text-base md:text-lg my-5 font-light'>
              <span className='text-pry'>
                We are dedicated to revolutionizing the digital landscape in
                Africa by
              </span>{" "}
              providing cutting-edge solutions that prioritize inclusivity and
              accessibility for all.
            </p>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__backInRight'>
          <div>
            <h2 className='flex items-center uppercase gap-5 text-xl'>
              <FaAsterisk className='text-pry' />
              Whom we do it for
            </h2>
            <p className='text-base md:text-lg my-5 font-light'>
              <span className='text-pry'>
                Our mission is to bridge the digital divide
              </span>{" "}
              and empower individuals, businesses, and communities across the
              continent, ensuring that no one is left behind in the digital
              revolution.
            </p>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default What;

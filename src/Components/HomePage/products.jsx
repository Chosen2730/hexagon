import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Anywork from "./anywork";

const Products = () => {
  return (
    <div className='px-4 pt-20 bg-green-50'>
      <div className='container mx-auto'>
        <AnimationOnScroll animateIn='animate__zoomIn'>
          <h2 className='text-2xl font-bold'>Our Products and Solutions</h2>
          <p className='text-base my-2 font-light'>
            Our products represent the embodiment of our vision to bridge
            digital gaps and empower individuals from all walks of life. From
            innovative business platforms that make working a productive
            experience to communication tools that connect people seamlessly,
            each app is a testament to our commitment to creating a more
            connected, informed, and equitable society.
          </p>
        </AnimationOnScroll>
        <hr className='border-green-200 my-10' />
        <Anywork />
      </div>
    </div>
  );
};

export default Products;

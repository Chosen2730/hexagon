import React from "react";
import Btn from "../../Utils/Button/btn";
import photo from "../../Assets/images/photo2.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Recommendation = () => {
  return (
    <div className='bg-black py-12 sm:py-28 p-8'>
      <div className='container mx-auto flex flex-col md:flex-row'>
        <div className='text-white p-4 md:p-12 py-12 bg-[#424242] w-full flex flex-col justify-center'>
          <h2 className='text-2xl font-bold'>Have any recommendations?</h2>
          <p className='font-light my-4'>
            We believe in the power of collaboration. X-agon actively seeks
            partnerships with like-minded organizations and individuals who
            share our vision of a digitally inclusive Africa. Together, we can
            create a more connected and empowered continent.
          </p>

          <Btn className={"bg-pry text-white scroll"} text='Get in Touch' />
        </div>
        <AnimationOnScroll animateIn='animate__zoomIn'>
          <div className='w-full h-full md:w-64 lg:w-[500px]'>
            <img className='w-full h-full' src={photo} alt='' />
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Recommendation;

import React from "react";
import Btn from "../../Utils/Button/btn";

const Market = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className='bg-[#424242] text-white p-8 py-12 md:p-20'>
        <div className='max-w-2xl ml-auto'>
          <h2 className='text-2xl font-bold'>Market Leadership & Expertise</h2>
          <p className='my-3 font-light'>
            We don't just stop at development; we take the initiative to launch
            our apps in the market and position them for success. Our marketing
            strategies are crafted to reach a wide audience, ensuring that our
            inclusive digital solutions make a positive impact on as many lives
            as possible.
          </p>
        </div>
      </div>
      <div className='bg-pry text-white p-8 py-12 md:p-20'>
        <div className='max-w-2xl'>
          <p className='font-light'>
            Comprising passionate individuals from various backgrounds, from
            experienced developers and designers to empathetic user researchers
            and marketing strategists, our team shares a common vision of
            driving positive change through technology.{" "}
          </p>
          <Btn className={"bg-white text-pry my-3"} text='View our team' />
        </div>
      </div>
    </div>
  );
};

export default Market;

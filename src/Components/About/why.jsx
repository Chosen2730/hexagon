import React from "react";
import why from "../../Assets/images/why.png";
import Btn from "../../Utils/Button/btn";

const Why = () => {
  return (
    <div className='bg-[#424242] text-white py-12 md:py-20'>
      <div className='max-w-3xl mx-auto p-4'>
        <h2 className='font-bold text-2xl'>Why We Exist</h2>
        <p className='my-4 font-light'>
          {" "}
          We are set up to deliver optimal solutions for a wide range of client
          base that would leverage our rich expertise for their unique IT
          requirements. We are dedicated to learning about and understanding our
          clients’ business.
        </p>

        <hr className='border-green-200 my-10' />

        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className=''>
            <img className='w-full' src={why} alt='' />
          </div>
          <div className='text-white bg-[#424242] w-full'>
            <p className='font-light'>
              By building a relationship with each of our clients, we can ensure
              our strategy is built with the sole focus of using technology to
              solve the problems and create efficiency. · Each of our digital
              solutions will be built with the client’s needs in mind. X-agon
              Digital Services Limited is a solution development company with
              focus on using Information Technology to provide solutions.
            </p>
            <Btn className={"bg-white text-pry my-4"} text='Contact us' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;

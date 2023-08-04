import React from "react";
import box from "../../Assets/images/box.png";
import Btn from "../../Utils/Button/btn";

const Digital = () => {
  return (
    <div className='bg-pry p-4 py-20'>
      <div className='container mx-auto text-white'>
        <h2 className='text-2xl font-bold'>Innovative Digital Solutions</h2>
        <p className='text-base my-2 font-light'>
          {" "}
          X-agon prides itself on being at the forefront of technological
          advancement. We develop our own unique applications, leveraging the
          latest technologies and insights to create user-centric and intuitive
          digital solutions.
        </p>
        <hr className='border-purple-300 my-10' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div>
            <img src={box} className='w-full' alt='box' />
            <h2 className='uppercase bg-gray-700 p-4 text-sm'>Blockchain</h2>
          </div>
          <div>
            <img src={box} className='w-full' alt='box' />
            <h2 className='uppercase bg-gray-700 p-4 text-sm'>Blockchain</h2>
          </div>
          <div>
            <img src={box} className='w-full' alt='box' />
            <h2 className='uppercase bg-gray-700 p-4 text-sm'>Blockchain</h2>
          </div>

          <div>
            <p className='text-base font-light'>
              At X-agon, our passion for technology is matched only by our
              dedication to creating a more inclusive and accessible digital
              future for Africa.
            </p>
            <Btn text='Learn more' className={"bg-white text-pry my-4"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital;

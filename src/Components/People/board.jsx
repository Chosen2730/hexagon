import React from "react";
import mary from "../../Assets/images/mary.png";
import kunle from "../../Assets/images/kunle.png";
import richard from "../../Assets/images/richard.png";

const Board = () => {
  const people = [
    { name: "Kunle Daniels (LLB)", img: kunle },
    { name: "Mary Ezinne", img: mary },
    { name: "Dr. Aiyekooto Richard", img: richard },
  ];
  return (
    <div className=' p-4 bg-pry text-white py-12 md:py-20'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='font-bold text-2xl'>The Advisory Board</h2>
        <p className='my-4 font-light'>
          {" "}
          We have an experienced advisory board with over 200 years of
          collective experience in administration and corporate governance. They
          are drawn from different professions and have been a major strength in
          the actualisation of the vision of the company.
        </p>
        <div className='my-10 grid grid-cols-1 md:grid-cols-3 gap-5'>
          {people.map(({ name, img }, ind) => (
            <div key={ind}>
              <img src={img} className='w-full' alt='box' />
              <h2 className='uppercase bg-gray-700 p-4 text-white text-sm'>
                {name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;

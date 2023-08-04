import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const AnyworkxIntro = () => {
  const problems = [
    "Finding Trusted Service Providers: AnyWorkX solves the challenge of finding reliable and trusted service providers by offering a platform that verifies and connects skilled professionals with customers.",
    "Convenience and Accessibility: It addresses the issue of convenience and accessibility by providing a user-friendly mobile app that allows customers to access a wide range of services and book them anytime, anywhere.",
    "Emergency Service Needs: AnyWorkX caters to emergency service needs by connecting users with service providers who are available and ready to assist in urgent situations.",
    "Expanding Market Opportunities for Service Providers: It offers service providers an opportunity to expand their market reach and showcase their skills to a larger audience through the platform.",
    "Enhancing Service Delivery: AnyWorkX focuses on enhancing service delivery by encouraging service providers to undergo mandatory customer service training, ensuring a positive experience for customers.",
  ];
  return (
    <div className='max-w-3xl mx-auto p-4'>
      <h2 className='font-bold text-2xl'>
        Introducing <span className='text-pry'> AnyworkX</span>
      </h2>
      <div className='flex items-center gap-2 my-2'>
        <AiOutlineArrowRight className='bg-black text-white rounded-full p-1' />
        <p className='text-base'>
          CONNECTING SERVICE PROVIDERS TO THEIR CUSTOMERS
        </p>
      </div>
      <p className='my-4 font-light'>
        {" "}
        AnyworkX boosts Africa's service economies by creating a vast
        marketplace for service providers to earn additional income and transact
        24/7. Customers benefit from an array of choices and convenience.
        Service providers can showcase their skills and reach endless
        possibilities on the platform.
      </p>
      <h2 className='font-bold text-2xl mt-10 mb-5'>
        The Problems AnyWorkX is Solving
      </h2>
      <div className='font-light'>
        {problems.map((item, ind) => (
          <li key={ind} className='list-decimal my-3'>
            {item}
          </li>
        ))}
      </div>
    </div>
  );
};

export default AnyworkxIntro;

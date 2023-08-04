import React from "react";
import AboutUs from "../Components/About/about";
import Why from "../Components/About/why";
import Partner from "../Components/HomePage/partner";

const About = () => {
  return (
    <div className='pt-10'>
      <AboutUs />
      <Why />
      <Partner />
    </div>
  );
};

export default About;

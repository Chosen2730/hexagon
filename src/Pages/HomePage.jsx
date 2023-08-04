import React from "react";
import Hero from "../Components/HomePage/hero";
import What from "../Components/HomePage/what";
import Digital from "../Components/HomePage/digital";
import Products from "../Components/HomePage/products";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <What />
      <Digital />
      {/* <Products /> */}
    </div>
  );
};

export default HomePage;

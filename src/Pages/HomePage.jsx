import React from "react";
import Hero from "../Components/HomePage/hero";
import What from "../Components/HomePage/what";
import Digital from "../Components/HomePage/digital";
import Products from "../Components/HomePage/products";
import Market from "../Components/HomePage/market";
import Partner from "../Components/HomePage/partner";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <What />
      <Digital />
      <Products />
      <Market />
      <Partner />
    </div>
  );
};

export default HomePage;

import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Layouts/nav";
import Footer from "../Components/Layouts/footer";

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingPage;

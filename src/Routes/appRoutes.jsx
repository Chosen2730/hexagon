import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../Pages";
import HomePage from "../Pages/HomePage";
import About from "../Pages/About";
import People from "../Pages/people";
import Anyworkx from "../Pages/Anyworkx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<About />} />
          <Route path='our-people' element={<People />} />
          <Route path='anyworkx' element={<Anyworkx />} />
        </Route>

        {/* <Route path='/dashboard' element={<h2> Dashboard </h2>}>
          <Route index element={<h2> DashboardHome </h2>} />
        </Route> */}

        <Route path='*' element={<h2>404</h2>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
{
  /* <Route path='track/:trackID/' element={<Track />} /> */
}

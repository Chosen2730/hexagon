import React, { useEffect, useRef, useState } from "react";
import logo from "../../Assets/images/logo.png";
import line from "../../Assets/images/line.png";
import box from "../../Assets/images/box.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import { RiMenu5Fill } from "react-icons/ri";
import { AiOutlineArrowDown } from "react-icons/ai";

const Nav = () => {
  const navLinks = [
    { title: "Home", id: "home" },
    { title: "Products", id: "product" },
    { title: "Contact", id: "contact" },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isBanerShown, setIsBannerShown] = useState(false);
  const [shownItemIndex, setShownItemIndex] = useState(0);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const navBanner = [
    {
      title: "The Company",
      text: "Learn more about X-agon as we carry out our mission to enhance and revolutionize the digital landscape in Africa.",
      subLinks: [
        { img: box, heading: "About X-agon", url: "/about" },
        { img: box, heading: "Our People", url: "" },
        { img: box, heading: "Careers", url: "" },
      ],
    },
    {
      title: "Our Products",
      text: "We are continuously building solutions that empower individuals and businesses to thrive in the digital era",
      subLinks: [
        { img: box, heading: "AnyWorkx", url: "" },
        { img: box, heading: "Whom we serve", url: "" },
      ],
    },
  ];

  const navigate = (ind) => {
    console.log("first");
    if (ind == 2) {
      return;
    }
    setShownItemIndex(ind);
    setIsBannerShown(true);
  };

  const item = navBanner[shownItemIndex];
  return (
    <div onMouseLeave={() => setIsBannerShown(false)}>
      <nav className='w-full border-b px-3 z-50 bg-white relative'>
        <div className='flex justify-between items-center gap-4 container mx-auto'>
          <div className='flex items-center gap-8'>
            <img className='w-28 md:w-[200px]' src={logo} alt='' />
            <img className='w-10 md:w-12' src={line} alt='' />
          </div>

          <div className='sm:flex items-center gap-4 hidden'>
            {navLinks.map(({ title }, ind) => (
              <NavLink
                className='text-black text-sm flex items-center gap-2 uppercase'
                key={ind}
                onMouseOver={() => navigate(ind)}
              >
                {title}
                <AiOutlineArrowDown />
              </NavLink>
            ))}
          </div>
          <RiMenu5Fill
            className='text-2xl text-pry sm:hidden cursor-pointer'
            onClick={openSidebar}
          />
        </div>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          closeSidebar={closeSidebar}
          navItems={navLinks}
          navBanner={navBanner}
          isBanerShown={isBanerShown}
          item={navBanner}
          navigate={navigate}
          setShownItemIndex={setShownItemIndex}
          setIsBannerShown={setIsBannerShown}
        />
      </nav>
      <div
        className={`${
          isBanerShown ? "translate-y-0" : "-translate-y-[500px]"
        } bg-pry text-sm p-6 text-white transition fixed top-18 w-full z-20`}
      >
        <div className='container mx-auto flex gap-8 justify-between'>
          <div>
            <h2 className='font-bold'>{item.title}</h2>
            <p className='my-2'>{item.text}</p>
          </div>
          <div className='flex gap-4'>
            {item.subLinks.map(({ img, heading, url }, ind) => (
              <div key={ind}>
                <img className='w-40' src={img} alt={heading} />
                <Link
                  onClick={() => setIsBannerShown(false)}
                  to={url}
                  className='my-5 block'
                >
                  {heading}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

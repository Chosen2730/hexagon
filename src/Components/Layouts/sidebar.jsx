import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import { AiOutlineArrowDown } from "react-icons/ai";

const Sidebar = ({ isSidebarOpen, closeSidebar, navItems, item }) => {
  const navigateTo = useNavigate();

  return (
    <aside
      className={`${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed w-full h-screen bg-white top-0 right-0 transition p-8 lg:hidden z-20 overflowHide`}
    >
      <div className='flex justify-between items-center'>
        <img
          onClick={() => {
            navigateTo("/");
            closeSidebar();
          }}
          src={logo}
          className='w-32'
          alt=''
        />
        <i onClick={closeSidebar} className='text-2xl flex justify-end'>
          <MdOutlineClose className='' />
        </i>
      </div>
      <div className='flex flex-col gap-6 my-10'>
        {navItems.map(({ title }, ind) => {
          return (
            <div key={ind}>
              <div className='text-black flex items-center uppercase whitespace-nowrap text-base font-bold gap-4 justify-between'>
                {title}
                <AiOutlineArrowDown />
              </div>
              <div className={`text-sm transition w-full`}>
                {item[ind]?.subLinks.map(({ heading }, ind) => (
                  <div key={ind} onClick={closeSidebar}>
                    <Link className='my-2 block text-black'>{heading}</Link>
                  </div>
                ))}
              </div>
              <hr className='h-2' />
            </div>
          );
        })}
      </div>
    </aside>
  );
};
// className = "whitespace-nowrap text-lg capitalize border-b-2 py-4";

export default Sidebar;

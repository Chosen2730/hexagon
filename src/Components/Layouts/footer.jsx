import React from "react";
import logo from "../../Assets/images/logo.png";
import ig from "../../Assets/images/ig.png";
import ln from "../../Assets/images/ln.png";
import fb from "../../Assets/images/fb.png";
import tw from "../../Assets/images/tw.png";
import yt from "../../Assets/images/yt.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      subLinks: [
        { text: "Products", url: "/" },
        { text: "Our Team", url: "/" },
        { text: "About Us", url: "/" },
        { text: "AnyWorkX", url: "/" },
        { text: "Our Targets", url: "/" },
      ],
    },
    {
      title: "Policy",
      subLinks: [
        { text: "Terms of use", url: "/" },
        { text: "Privacy Statement", url: "/" },
      ],
    },
  ];

  const social = [
    { img: fb, url: "/" },
    { img: tw, url: "/" },
    { img: ig, url: "/" },
    { img: ln, url: "/" },
    { img: yt, url: "/" },
  ];

  return (
    <footer className='bg-pry text-white p-4 py-20'>
      <div className='mx-auto container grid grid-cols-1  md:grid-cols-2 gap-8'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col gap-4'>
            <div>
              <h2 className='font-bold'>Address</h2>
              <p className='text-xs my-1'>
                Plot 1391, Tiamiyu Savage St, Victoria Island, Lagos.
              </p>
            </div>
            <div>
              <h2 className='font-bold'>Social Links</h2>
              <div className='flex gap-4 my-1'>
                {social?.map(({ img, url }, ind3) => (
                  <a href={url} key={ind3} target='__blank' className=''>
                    <img src={img} className='w-5 h-5' alt='social' />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h2 className='font-bold'>Email Address</h2>
              <a href='mailto:info@x-agon.africa' className='text-xs'>
                info@x-agon.africa
              </a>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div>
              <h2 className='font-bold'>Customer care number</h2>
              <a href='tel:+234(0)7000099999 ' className='text-xs my-1'>
                +234 915 137 7777
              </a>
            </div>
            <div>
              <h2 className='font-bold'>Hours Of Operation</h2>
              <p className='text-xs my-1'>
                Weekdays: Mondays - Fridays: 9:00AM - 5:00PM <br /> Weekends and
                National Holidays: Chat Only.
              </p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          {footerLinks.map(({ title, subLinks, social }, ind) => (
            <div key={ind}>
              <h2 className='font-bold'>{title}</h2>
              <div>
                {subLinks.map(({ text, url }, ind2) => (
                  <Link
                    to={url}
                    className='block my-2 text-xs hover:text-white transition'
                    key={ind2}
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

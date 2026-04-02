import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
      <div className="bg-[#101727] text-white">
        <div className="w-11/12 mx-auto">
          <div className="gap-10 py-20 space-x-2 md:space-x-5 grid grid-cols-2 md:grid-cols-6 md:text-left text-center ">
            <div className="md:col-span-2 space-y-3 md:space-y-5 ">
              <h1 className=" text-[30px] md:text-[40px] font-bold ">
                DigiTools
              </h1>
              <p className="text-white/60 text-[12px] md:text-[16px] ">
                Premium digital tools for creators, <br /> professionals, and
                businesses. Work smarter <br /> with our suite of powerful
                tools.
              </p>
            </div>
            <div className="text-white/80 text-[12px] md:text-[16px] space-y-2 md:space-y-4 ">
              <h1 className="text-white font-bold text-2xl pb-4">Product</h1>
              <p>Features</p>
              <p>Pricing</p>
              <p>Templates</p>
              <p>Integrations</p>
            </div>
            <div className="text-white/80 text-[12px] md:text-[16px] space-y-2 md:space-y-4 ">
              <h1 className="text-white font-bold text-2xl pb-4">Company</h1>
              <p>About</p>
              <p>Blog</p>
              <p>Careers</p>
              <p>Press</p>
            </div>
            <div className="text-white/80 text-[12px] md:text-[16px] space-y-2 md:space-y-4 ">
              <h1 className="text-white font-bold text-2xl pb-4">Resources</h1>
              <p>Documentation</p>
              <p>Help Center</p>
              <p>Community</p>
              <p>Contact</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center">
              <h1 className="text-white font-bold text-2xl pb-4">
                Social Links
              </h1>
              <div className="flex gap-6 text-2xl cursor-pointer md:justify-start justify-center">
                <div className="border rounded-full p-2 bg-white text-black">
                  <FaInstagram />
                </div>
                <div className="border rounded-full p-2 bg-white text-black">
                  <FaFacebookSquare />
                </div>
                <div className="border rounded-full p-2 bg-white text-black">
                  <FaXTwitter />
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="text-white/60 text-[12px] md:text-[16px] flex justify-between pb-5 ">
            <p>© 2026 Digitools. All rights reserved.</p>
            <ul className='flex gap-10' >
              <li>Privacy Policy </li>
              <li>Terms of Service</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Footer;
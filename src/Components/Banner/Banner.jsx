import React from 'react';
import CircleImage from '../../assets/products/Circle.png'
import BannerImage from '../../assets/products/banner.png'
import PlayImg from '../../assets/products/Play.png'

const Banner = () => {
    return (
      <div className="flex flex-col-reverse md:flex-row justify-center w-11/12 mx-auto my-10 md:my-20  ">
        <div className="flex-1 flex flex-col space-y-4 justify-center ">
          <div className="flex md:justify-start justify-center ">
            <button className="flex items-center gap-2 btn text-[#4F39F6] bg-[#E1E7FF] rounded-full w-80 ">
              <img src={CircleImage} alt="Circle" />
              New: AI-Powered Tools Available
            </button>
          </div>
          <h1 className=" text-center md:text-left text-[50px] md:text-[30px] lg:text-[62px] font-extrabold ">
            Supercharge Your Digital Workflow
          </h1>
          <p className="text-[#627382] text-[12px] md:text-[16px] md:text-left text-center ">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex space-x-5 justify-center md:justify-start ">
            <button className="btn btn-primary bg-[#4F39F6] rounded-full">
              Explore Products
            </button>
            <button className="flex items-center gap-2 btn text-[#4F39F6] bg-transparent border border-[#4F39F6] rounded-full ">
              <img src={PlayImg} alt="" className='items-center' />
              Watch Demo
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end pb-4  ">
          <img src={BannerImage} alt="Banner Image" className="shadow-2xl" />
        </div>
      </div>
    );
};

export default Banner;
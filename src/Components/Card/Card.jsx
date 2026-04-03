import React from "react";
import UserImage from "../../assets/products/user.png";
import PackageImg from "../../assets/products/package.png";
import RocketImg from "../../assets/products/rocket.png";

const Card = () => {
  return (
    <div className=" w-11/12 mx-auto mt-20  ">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Get Started in 3 Steps</h1>
        <p>Start using premium digital tools in minutes, not hours.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex my-8">
          <div className="card bg-base-100 w-full shadow-lg transition-all duration-500 hover:-translate-y-1 space-y-4 text-center mb-5">
            <div className="flex relative ">
              <h4 className="bg-[#4F39F6] w-12 rounded-full p-3 font-bold text-white absolute right-4 top-4 ">
                01{" "}
              </h4>
            </div>
            <div className=" flex justify-center px-4 pt-20 ">
              <img
                src={UserImage}
                alt=""
                className="bg-[#dcdce4] rounded-full p-4  "
              />
            </div>
            <h2 className="text-xl font-bold">Create Account</h2>
            <p className="text-[#627382] text-[12px] md:text-[16px] text-center pb-10 px-4">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
        <div className="flex my-8">
          <div className="card bg-base-100 w-full shadow-lg transition-all duration-500 hover:-translate-y-1 space-y-4 text-center mb-5">
            <div className="flex relative ">
              <h4 className="bg-[#4F39F6] w-12 rounded-full p-3 font-bold text-white absolute right-4 top-4 ">
                02
              </h4>
            </div>
            <div className=" flex justify-center px-4 pt-20 ">
              <img
                src={PackageImg}
                alt=""
                className="bg-[#dcdce4] rounded-full p-4  "
              />
            </div>
            <h2 className="text-xl font-bold">Choose Products</h2>
            <p className="text-[#627382] text-[12px] md:text-[16px] text-center pb-10 px-4">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>
        <div className="flex my-8">
          <div className="card bg-base-100 w-full shadow-lg transition-all duration-500 hover:-translate-y-1 space-y-4 text-center mb-5">
            <div className="flex relative ">
              <h4 className="bg-[#4F39F6] w-12 rounded-full p-3 font-bold text-white absolute right-4 top-4 ">
                03
              </h4>
            </div>
            <div className=" flex justify-center px-4 pt-20 ">
              <img
                src={RocketImg}
                alt=""
                className="bg-[#dcdce4] rounded-full p-4  "
              />
            </div>
            <h2 className="text-xl font-bold">Start Creating </h2>
            <p className="text-[#627382] text-[12px] md:text-[16px] text-center pb-10 px-4">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

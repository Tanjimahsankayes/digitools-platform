import React from 'react';

const WorkFlow = () => {
    return (
      <div className="bg-[#4F39F6] text-white ">
        <div className="text-center py-20 ">
          <h1 className="text-[25px] md:text-[40px] font-extrabold">
            Ready to Transform Your Workflow?
          </h1>
          <p className="text-white/80 text-[12px] md:text-[16px] pb-10">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br /> Start your free trial today.
          </p>
          <div className="flex gap-5 justify-center pb-5">
            <button className="btn rounded-full bg-white text-[#4F39F6] transition transform hover:-translate-y-1 ">
              Explore Products
            </button>
            <button className="btn rounded-full text-white bg-transparent border border-white transition transform hover:-translate-y-1 ">
              View Pricing
            </button>
          </div>
          <p className="text-white/80 text-[12px] md:text-[16px] ">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    );
};

export default WorkFlow;
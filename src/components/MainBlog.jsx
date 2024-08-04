import React from "react";
import { CiSquareChevRight } from "react-icons/ci";
import { CiSquareChevLeft } from "react-icons/ci";

const Mainblog = () => {
  return (
    <section className="relative max-w-[1200px] m-auto  p-8 ">
      <div>
        <img src="/images/mainImage.png" alt="photo" />
        <div className="absolute bottom-[85px] left-[43px] bg-white rounded-xl p-10 border-[1px] border-[#E8E8EA] w-[598px]">
          <h5 className="bg-[#4B6BFB] text-white rounded-md py-1 px-[10px] text-sm inline-block">
            Technology
          </h5>
          <h3 className="mt-4 text-4xl text-[#181A2A] w-[518px] font-bold">
            Grid system for better Design User Interface
          </h3>
          <p className="mt-6 text-[#97989F] text-base">August 20, 2022</p>
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <CiSquareChevRight size={40} color="gray" />
        <CiSquareChevLeft size={40} color="gray" />
      </div>
    </section>
  );
};

export default Mainblog;

import React from "react";
import Img2 from "../../Assets/CardImg/CardImg2.svg";
import Img1 from "../../Assets/CardImg/CardImg1.svg";

import tick from "../../Assets/CardImg/Tick Circle.svg";
import discount from "../../Assets/CardImg/discount.svg";
import enroll from "../../Assets/CardImg/enroll.svg";
import download from "../../Assets/CardImg/download.svg";

const ProgramCard2 = () => {
  return (
    <div>
      <div className="lg:w-full xs:w-[366px] rounded-2xl bg-[#FFFFFF] drop-shadow-md p-5">
        <img className="m-auto  " src={Img1} />
        <div className="flex flex-col gap-5 ml-5 ">
          <div className="flex flex-col gap-2">
            <p className="font-mona font-bold text-3xl">Gen AI Program</p>
            <p className="font-mona font-bold text-sm text-white w-[168.9px] h-[33.3px] rounded-sm bg-[#1393FF] pt-[6.65px] text-center">
              5 weeks (2hrs/week)
            </p>
          </div>

          <div className="font-normal font-mona text-base text-[#404040] flex flex-col gap-3 relative ">
            <div className="flex gap-3">
              <img className="w-[18.43px]" src={tick} />
              <p>Understanding GenAI Fundamentals</p>
            </div>
            <div className="flex gap-3">
              <img className="w-[18.43px]" src={tick} />
              <p>Master Use cases for GenAI in product development</p>
            </div>
            <div className="flex gap-3">
              <img className="w-[18.43px]" src={tick} />
              <p>Strategies for GenAI Product Roadmap & Implementation</p>
            </div>
            <div className="flex gap-3">
              <img className="w-[18.43px]" src={tick} />
              <p>Hand-on Learning on Gen AI Tools</p>
            </div>
            <div className="flex gap-3">
              <img className="w-[18.43px]" src={tick} />
              <p>Expand career opportunities</p>
            </div>
          </div>
          <div className="w-full border-[0.21px] border-[#8C8C8C]"></div>
          <div className="w-[90%]">
            <p className="font-sans font-bold text-sm">Course Pricing:</p>
            <div className="flex justify-between">
              <div className="flex gap-3">
                <p className="font-sans font-bold text-lg">₹10,000</p>
                <p className="font-sans font-normal text-sm line-through text-gray-500 mt-1">
                  ₹29,999
                </p>
              </div>
              <p className="font-mona font-bold text-xs text-white w-[123px] h-[33.3px] rounded-[64.01px] bg-[#1393FF] pt-[8px] pl-[26.6px] text-center flex gap-1">
                <img
                  className="text-center w-[19.12px] h-[19.65px]"
                  src={discount}
                />
                20%Off
              </p>
            </div>
          </div>
          <div className="flex xs:flex-col  lg:flex-row  gap-3">
            <button className="bg-gradient-button rounded-[50px] w-[271.59px] h-[48px] text-[#FFFFFF] font-mona font-bold  text-sm flex items-center justify-center gap-1">
              Enroll Now
              <img src={enroll} />
            </button>
            <button className="bg-white rounded-[50px] w-[271.59px] h-[48px] text-[#24304C] border-[0.83px] border-[#24304C] font-mona font-bold text-center text-sm flex items-center justify-center gap-1">
              Download Curricullam
              <img src={download} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard2;

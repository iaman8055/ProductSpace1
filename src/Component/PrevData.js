import React from "react";
import tick from "../Assets/Iconly/Tick.svg";
import star from "../Assets/Iconly/Star.svg";
import wallet from "../Assets/Iconly/Wallet.svg";

const PrevData = () => {
  return (
    <div>
      <div className="w-full pt-48 flex xs:flex-col-reverse lg:flex-row lg:justify-center lg:items-center lg:ml-36 xs:ml-16 xs:gap-16 lg:gap-0">
        <div className="lg:w-1/2 xs:w-full ">
          <div className="w-3/4 grid grid-cols-2">
            <div className="border-r border-b border-[#E8E8E8] flex flex-col gap-4 pl-7 pb-10">
              <img className="w-[84.3px]" src={tick} />
              <div className="flex flex-col gap-3">
                <p className="text-[#1D1F3D] font-bold text-4xl font-mona leading-9">
                  85%
                </p>
                <p className="font-mona font-normal text-2xl leading-7 text-[#000000BF]">
                  Completion Rate
                </p>
              </div>
            </div>
            <div className="border-b border-[#E8E8E8] flex flex-col gap-4 pl-14 pb-10">
              <img className="w-[84.3px]" src={star} />
              <div className="flex flex-col gap-3">
                <p className="text-[#1D1F3D] font-bold text-4xl font-mona leading-9">
                  80%
                </p>
                <p className="font-mona font-normal text-2xl leading-7 text-[#000000BF]">
                  Placement Rate
                </p>
              </div>
            </div>
            <div className="border-r border-[#E8E8E8] flex flex-col gap-4 pl-7 pt-8">
              <img className="w-[84.3px]" src={wallet} />
              <div className="flex flex-col gap-3">
                <p className="text-[#1D1F3D] font-bold text-4xl font-mona leading-9">
                  ₹57 LPA
                </p>
                <p className="font-mona font-normal text-2xl leading-7 text-[#000000BF]">
                  Median Graduate <br></br> Salary{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 pl-14 pt-8">
              <img className="w-[84.3px]" src={tick} />
              <div className="flex flex-col gap-3">
                <p className="text-[#1D1F3D] font-bold text-4xl font-mona leading-9">
                  1000+
                </p>
                <p className="font-mona font-normal text-2xl leading-7 text-[#000000BF]">
                  Alumni
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 xs:w-full">
          <div className="w-3/4  flex flex-col gap-5">
            <p className="font-mona font-semibold lg:text-4xl xs:text-6xl leading-10 bg-gradient-b bg-clip-text text-transparent">
              We help you succeed in<br></br> your career
            </p>
            <p className="font-mona font-normal text-xl leading-7 text-[#A3A7B6]">
              Our proven track record of transforming aspiring product managers
              into industry-leading professionals across top-tier tech
              companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrevData;

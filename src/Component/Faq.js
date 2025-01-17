import React from "react";
import vector from "../Assets/Home page/Home page New/Vector.svg";
import vector1 from "../Assets/Home page/Home page New/Vector1.svg";
import toggle from "../Assets/Home page/Home page New/toggle.svg";

const Faq = () => {
  return (
    <div>
      <div className="w-full h-fit bg-diagonal-gradient flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/4 p-8 lg:p-20 flex flex-col gap-9 mx-auto lg:ml-40">
          <p className="font-mona font-semibold text-3xl sm:text-4xl md:text-5xl leading-[48px] bg-gradient-b bg-clip-text text-transparent">
            Frequently Asked Questions
          </p>
          <div className="flex flex-col gap-4">
            {/* FAQ Items */}
            <div className="w-full h-[64px] rounded-xl bg-white border-[1px] border-[#D4D4D4] p-5">
              <div className="flex justify-between">
                <p className="text-sm sm:text-base md:text-lg">
                  What prior knowledge is required for this course?
                </p>
                <img src={toggle} alt="toggle" />
              </div>
            </div>
            <div className="w-full h-[64px] rounded-xl bg-white border-[1px] border-[#D4D4D4] p-5">
              <div className="flex justify-between">
                <p className="text-sm sm:text-base md:text-lg">
                  How will this course help in my career as a product manager?
                </p>
                <img src={toggle} alt="toggle" />
              </div>
            </div>
            <div className="w-full h-[64px] rounded-xl bg-white border-[1px] border-[#D4D4D4] p-5">
              <div className="flex justify-between">
                <p className="text-sm sm:text-base md:text-lg">
                  What support do I get after completing the course?
                </p>
                <img src={toggle} alt="toggle" />
              </div>
            </div>
            <div className="w-full h-[64px] rounded-xl bg-white border-[1px] border-[#D4D4D4] p-5">
              <div className="flex justify-between">
                <p className="text-sm sm:text-base md:text-lg">
                  Are there any group discounts or scholarships available?
                </p>
                <img src={toggle} alt="toggle" />
              </div>
            </div>
            <div className="w-full h-[64px] rounded-xl bg-white border-[1px] border-[#D4D4D4] p-5">
              <div className="flex justify-between">
                <p className="text-sm sm:text-base md:text-lg">
                  How is this course delivered (live or recorded)?
                </p>
                <img src={toggle} alt="toggle" />
              </div>
            </div>
          </div>
          {/* Contact Us Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center mt-6">
            <p className="font-mona font-bold text-lg sm:text-xl md:text-2xl leading-[48px] bg-gradient-b bg-clip-text text-transparent">
              Still Have Questions?
            </p>
            <button className="w-[208px] h-[56px] font-mona text-lg sm:text-xl font-bold text-center rounded-full bg-[#24304C] text-white mt-4 lg:mt-0">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

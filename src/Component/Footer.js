import React from "react";
import logo from "../Assets/Footer/Logo.svg";

const Footer = () => {
  return (
    <div>
      <div className="w-full bg-gradient-c relative">
        <div className="ml-14 pt-16 px-6 sm:px-10 md:px-14">
          <div className="w-full flex flex-col sm:flex-row justify-between">
            <div className="flex flex-col gap-2 mb-8 sm:mb-0">
              <img className="w-[31px]" src={logo} alt="Product Space Logo" />
              <p className="font-Mont font-semibold text-2xl text-white">
                PRODUCT SPACE
              </p>
              <p className="font-Mont font-normal text-base text-white">
                A Great Place to Upskill
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-24 sm:gap-12">
              <div className="flex flex-col gap-4">
                <p className="font-sans font-bold text-base text-white">
                  Resources
                </p>
                <div className="flex flex-col gap-3 text-gray-200 font-sans">
                  <p>Terms and Conditions</p>
                  <p>Privacy policy</p>
                  <p>Refund policy</p>
                  <p>Contact us</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-sans font-bold text-base text-white">
                  Links
                </p>
                <div className="flex flex-col gap-3 text-gray-200 font-sans">
                  <p>Testimonials</p>
                  <p>Events</p>
                  <p>Blogs</p>
                  <p>Become a Mentor</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="font-Mont font-bold text-base text-white mt-10">
              Get the latest updates from Product Space
            </p>
          </div>
        </div>

        <div className="w-full relative">
          <p className="text-[96px] sm:text-[144px] md:text-[184px] font-Mont font-bold leading-[112.3px] sm:leading-[164.3px] md:leading-[224.3px] text-gray-400 opacity-30">
            Product Space
          </p>
          <span className="absolute text-white top-36 left-6 sm:left-12 md:left-20">
            © Propel Learnings
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

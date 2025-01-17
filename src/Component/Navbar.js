import React, { useState } from "react";
import logo from "../Assets/Product Space.svg";
import { FaBars } from "react-icons/fa"; // Import hamburger icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <div>
      {/* Navbar Container */}
      <div className="w-full h-[80px] border-transparent border-b-[1px] shadow-sm bg-gradient-a bg-clip-border pl-6 pr-6 sm:pl-20 sm:pr-20">
        <div className="flex justify-between items-center mt-5 w-full">
          {/* Logo, hidden on smaller screens */}
          <img
            src={logo}
            alt="Product Space Logo"
            className="hidden sm:block"
          />

          {/* Desktop Menu */}
          <div className="hidden sm:flex gap-12 mt-3">
            <a className="text-[#51515E] font-medium text-xl font-sans">
              Programs
            </a>
            <a className="text-[#51515E] font-medium text-xl font-sans">
              Resources
            </a>
            <a className="text-[#51515E] font-medium text-xl font-sans">
              Alumni
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex gap-5">
            <button className="w-[155px] h-[48px] rounded-[999px] border-[#39AAFB] border-2 font-normal text-xl">
              Log in
            </button>
            <button className="w-[155px] h-[48px] rounded-[999px] bg-[#39AAFB] font-bold font-sans text-xl text-[#FFFFFF]">
              Sign Up
            </button>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="sm:hidden flex justify-between w-full">
            {/* Hamburger Icon on the Left */}
            <FaBars
              className="text-[#51515E] text-3xl cursor-pointer"
              onClick={toggleMenu} // Toggle menu visibility
            />
            {/* Sign Up Button on the Right */}
            <button className="text-[#39AAFB] text-xl font-bold">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Hamburger Popup Menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } sm:hidden fixed top-0 left-0 w-full h-full bg-[#FFFFFF] z-50 shadow-lg flex flex-col items-center gap-6 pt-20`}
      >
        <a className="text-[#51515E] font-medium text-xl font-sans" href="#">
          Programs
        </a>
        <a className="text-[#51515E] font-medium text-xl font-sans" href="#">
          Resources
        </a>
        <a className="text-[#51515E] font-medium text-xl font-sans" href="#">
          Alumni
        </a>
        <div className="flex flex-col gap-4">
          <button className="w-[155px] h-[48px] rounded-[999px] border-[#39AAFB] border-2 font-normal text-xl">
            Log in
          </button>
          <button className="w-[155px] h-[48px] rounded-[999px] bg-[#39AAFB] font-bold font-sans text-xl text-[#FFFFFF]">
            Sign Up
          </button>
        </div>
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-[#51515E] text-3xl"
          onClick={toggleMenu}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Navbar;

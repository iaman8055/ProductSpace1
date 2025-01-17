import React from "react";
import Thumbnail from "../../Assets/CardImg/Thumbnail.svg";
import { FaShareAlt } from "react-icons/fa";

const LiveEvents = () => {
  return (
    <div className="w-full rounded-3xl bg-white shadow-md flex flex-col gap-5 p-3">
      <img
        src={Thumbnail}
        alt="Event Thumbnail"
        className="w-full h-[auto] rounded-t-3xl"
      />
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="w-[106.2px] h-[48px] bg-[#24304C] border-[0.25px] font-mona font-bold text-xl text-white p-2 rounded-bl-md rounded-tl-[4.2px] flex items-center justify-center">
            <p>DEC</p>
            <div className="border-[1px] bg-gradient-to-r from-[#FFFFFF00] via-[#FFFFFF] to-[#FFFFFF00]" />
            <p>24</p>
          </div>
          <div className="w-[183px] h-[48px] bg-[#24304C1A] rounded-tr-md rounded-br-md flex items-center justify-center">
            <p className="font-mona font-normal text-[18px] text-center pt-3">
              11:00 am - 2:00 pm
            </p>
          </div>
        </div>
        <button className="w-[48px] h-[48px] rounded-[8px] border-[0.25px] bg-[#24304C] p-3">
          <FaShareAlt className="text-white text-[21.69px] text-center" />
        </button>
      </div>
      <div className="w-full">
        <p className="font-mona font-semibold text-2xl text-[#24304C]">
          Master Product Analytics in Just 3 Hour- Workshop session
        </p>
      </div>
      <button className="w-full sm:w-[350px] md:w-[400px] h-[48px] font-mona text-2xl font-semibold text-center rounded-full bg-[#24304C] text-white">
        Event Details
      </button>
    </div>
  );
};

export default LiveEvents;

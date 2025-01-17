import React from "react";
import Slide from "../../Assets/CardImg/Slide.svg";

const Events = () => {
  return (
    <div>
      <div className="w-full rounded-3xl bg-white shadow-md flex flex-col gap-5 p-4">
        <img
          src={Slide}
          alt="Event Slide"
          className="w-full h-auto rounded-t-3xl" // Make the image responsive
        />
        <div className="w-full">
          <p className="font-mona font-semibold text-2xl text-[#24304C]">
            Master Product Analytics in Just 3 Hour- Workshop session
          </p>
          <p className="font-normal font-mona text-base text-[#4F4F4F]">
            Event ended on 24th December, 2024
          </p>
        </div>
        <button className="w-full sm:w-[350px] md:w-[400px] h-[40px] font-mona text-xl font-semibold text-center rounded-full bg-[#24304C] text-white">
          Event Details
        </button>
      </div>
    </div>
  );
};

export default Events;

import React, { useRef } from "react";
import Slider from "react-slick";
import Events from "./Cards/Events";
import LiveEvents from "./Cards/LiveEvents";
import { FaGreaterThan } from "react-icons/fa6";

const Event = () => {
  // Settings for the react-slick slider
  const sliderSettings = {
    infinite: true, // Infinite looping
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1, // Scroll 1 card at a time
    speed: 500,
    arrows: false, // We will use custom arrows
    centerMode: false, // No center alignment
    centerPadding: "0", // No padding in the center
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 cards on tablets
          centerPadding: "0", // Adjust padding on tablet
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 card on smaller screens
          centerPadding: "0", // Adjust padding for smaller screens
        },
      },
    ],
  };

  // Separate slider refs for Live Events and Past Events
  const liveEventsSliderRef = useRef(null); // Ref for the Live Events slider
  const pastEventsSliderRef = useRef(null); // Ref for the Past Events slider

  // Function to handle next and previous slide navigation for Live Events
  const goToNextLiveEvent = () => {
    if (liveEventsSliderRef.current) {
      liveEventsSliderRef.current.slickNext(); // Move to the next slide for Live Events
    }
  };

  const goToPrevLiveEvent = () => {
    if (liveEventsSliderRef.current) {
      liveEventsSliderRef.current.slickPrev(); // Move to the previous slide for Live Events
    }
  };

  // Function to handle next and previous slide navigation for Past Events
  const goToNextPastEvent = () => {
    if (pastEventsSliderRef.current) {
      pastEventsSliderRef.current.slickNext(); // Move to the next slide for Past Events
    }
  };

  const goToPrevPastEvent = () => {
    if (pastEventsSliderRef.current) {
      pastEventsSliderRef.current.slickPrev(); // Move to the previous slide for Past Events
    }
  };

  return (
    <div className="p-10 flex flex-col gap-10">
      <div className="flex flex-col gap-2 p-4">
        <p className="font-mona font-semibold text-4xl bg-gradient-to-r from-[#14141E] to-[#585884] bg-clip-text text-transparent">
          Events at Product Space
        </p>
        <p className="font-mona font-normal text-2xl text-[#A3A7B6]">
          Claim your free lesson today and start exploring
        </p>
      </div>

      <div className="flex flex-col gap-15">
        {/* Live/Upcoming Events */}
        <div className="mb-20">
          <div className="flex justify-between p-5">
            <p className="font-bold text-3xl text-[#1D1F3D]">
              Live/Upcoming Events
            </p>
            <div className="flex gap-4 pr-32">
              <button
                className="w-[48px] h-[48px] rounded-[8px] border-[0.25px] bg-[#24304C] pl-3 -rotate-180"
                onClick={goToPrevLiveEvent} // Custom previous button for Live Events
              >
                <FaGreaterThan className="text-white text-center" />
              </button>
              <button
                className="w-[48px] h-[48px] rounded-[8px] border-[0.25px] bg-[#24304C] pl-3"
                onClick={goToNextLiveEvent} // Custom next button for Live Events
              >
                <FaGreaterThan className="text-white text-center" />
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            {" "}
            {/* Hide overflow */}
            <Slider
              ref={liveEventsSliderRef}
              {...sliderSettings}
              className="px-5"
            >
              <div className="px-3">
                {" "}
                {/* Added margin for gap */}
                <LiveEvents />
              </div>
              <div className="px-3">
                {" "}
                {/* Added margin for gap */}
                <LiveEvents />
              </div>
              <div className="px-3">
                {" "}
                {/* Added margin for gap */}
                <LiveEvents />
              </div>
              <div className="px-3">
                {" "}
                {/* Added margin for gap */}
                <LiveEvents />
              </div>
            </Slider>
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-20">
          <div className="flex justify-between p-5">
            <p className="font-bold text-3xl text-[#1D1F3D]">Past Events</p>
            <div className="flex gap-4 pr-32">
              <button
                className="w-[48px] h-[48px] rounded-[8px] border-[0.25px] bg-[#24304C] pl-3 -rotate-180"
                onClick={goToPrevPastEvent} // Custom previous button for Past Events
              >
                <FaGreaterThan className="text-white text-center" />
              </button>
              <button
                className="w-[48px] h-[48px] rounded-[8px] border-[0.25px] bg-[#24304C] pl-3"
                onClick={goToNextPastEvent} // Custom next button for Past Events
              >
                <FaGreaterThan className="text-white text-center" />
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            {" "}
            {/* Hide overflow */}
            <Slider
              ref={pastEventsSliderRef}
              {...sliderSettings}
              className="px-5"
            >
              <div className="px-3">
                {" "}
                {/* Added margin for gap */}
                <Events />
              </div>
              <div className="px-3">
                {" "}
                {/* Added margin for gap */}
                <Events />
              </div>
              <div className="px-3">
                {" "}
                {/* Added margin for gap */}
                <Events />
              </div>
              <div className="px-3">
                {" "}
                {/* Added margin for gap */}
                <Events />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

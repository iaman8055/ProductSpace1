import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import person1 from "../Assets/Home page/Person1.svg";
import person2 from "../Assets/Home page/Person2.svg";
import person3 from "../Assets/Home page/Person3.svg";

const LearnFromBest = () => {
  const settings = {
    infinite: true, // Enable infinite scrolling
    slidesToShow: 4,
    speed: 1000, // Show 4 slides at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto slide
    autoplaySpeed: 0, // Slide every 2 seconds
    arrows: false, // Hide navigation arrows
    pauseOnHover: true, // Pause on hover
  };

  return (
    <div className="relative w-full p-16">
      {/* Header Section */}
      <div>
        <div className="flex flex-col gap-3">
          <p className="font-mona font-semibold text-[40px] leading-[48px] bg-gradient-b bg-clip-text text-transparent ">
            Learn from the Best
          </p>
          <p className="font-mona font-normal text-2xl text-[#A3A7B6]">
            Fast track your journey into product management and emerge into your
            dream role as PM
          </p>
        </div>
      </div>

      {/* Slider Section */}
      <div className="relative mt-8">
        {/* Slider */}
        <Slider className="pl-28 pr-28" {...settings}>
          <div>
            <img src={person1} alt="Person 1" />
          </div>
          <div>
            <img src={person2} alt="Person 2" />
          </div>
          <div>
            <img src={person3} alt="Person 3" />
          </div>
          <div>
            <img src={person1} alt="Person 1" />
          </div>
          <div>
            <img src={person2} alt="Person 2" />
          </div>
          <div>
            <img src={person3} alt="Person 3" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LearnFromBest;

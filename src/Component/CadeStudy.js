import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CaseCard from "./Cards/CaseCard";

const CadeStudy = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1, // Show one slide at a time on smaller screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide arrows
    dots: true, // Show dots for navigation
  };

  return (
    <div className="w-full p-4 sm:p-10">
      <div className="w-full flex flex-col gap-10 sm:gap-16">
        {/* Header Section */}
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <p className="font-mona text-3xl sm:text-4xl font-semibold bg-gradient-b bg-clip-text text-transparent">
            Students case studies
          </p>
          <p className="font-mona font-normal text-base sm:text-2xl text-[#A3A7B6]">
            Explore the innovative AI projects our students have crafted,
            showcasing their creativity and technical skills.
          </p>
        </div>

        {/* Cards Section */}
        <div className="sm:hidden">
          {/* Slider for smaller screens */}
          <Slider {...settings}>
            <div>
              <CaseCard />
            </div>
            <div>
              <CaseCard />
            </div>
            <div>
              <CaseCard />
            </div>
          </Slider>
        </div>

        {/* Grid for larger screens */}
        <div className="hidden sm:flex flex-wrap justify-start gap-7">
          <CaseCard />
          <CaseCard />
          <CaseCard />
        </div>
      </div>
    </div>
  );
};

export default CadeStudy;

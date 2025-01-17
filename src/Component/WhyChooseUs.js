import React, { useState, useEffect } from "react";
import Slide1 from "../Assets/img1.svg"; // Import your image
import Slide2 from "../Assets/Img2.jpg";
import Slide3 from "../Assets/Img3.jpg";
import Slide4 from "../Assets/Img4.jpg";

const WhyChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: Slide1, text: "Industry Focus Content" },
    { image: Slide2, text: "Personalized Guidance from Industry Leaders" },
    { image: Slide3, text: "Interview Preparation with Mock Interviews" },
    { image: Slide4, text: "Job Placement Support and Career Guidance" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="w-full flex flex-col gap-16 ml-48 mt-20 pb-20">
      {/* Header Section */}
      <div className="flex flex-col gap-3">
        <p className="font-mona font-semibold text-4xl leading-[48px] bg-gradient-b bg-clip-text text-transparent">
          Why Product Space/Desktop
        </p>
        <p className="font-mona font-normal text-2xl leading-7 text-[#A3A7B6]">
          Fast track your journey into product management and emerge into your
          dream role as PM
        </p>
      </div>

      {/* Slider Section */}
      <div
        className="slider-container"
        style={{ position: "relative", width: "100%", height: "541px" }}
      >
        {/* Slide Images */}
        <div
          className="w-9/12 bg-blend-overlay rounded-3xl border-[4px] border-gray-300"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100%",
          }}
        ></div>

        {/* Progress Bar with Dots */}
        <div className="absolute bottom-10 w-2/3 left-16">
          {/* Progress Bar Background */}
          <div className="relative h-4 bg-[#FFFDFD33] rounded-2xl">
            {/* Progress Line */}
            <div
              className="progress bg-slate-300 rounded-2xl"
              style={{
                height: "100%",
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
                transition: "width 3s ease",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Slide Text Section */}
      <div className="w-[70%] text-center mt-4 flex gap-10 ml-10">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              currentSlide === index
                ? "font-bold text-opacity-100"
                : "font-normal text-opacity-60"
            }`}
          >
            <p className="font-mona text-2xl leading-9 text-start">
              0{index + 1}
            </p>
            <p className="text-base font-mona leading-5 w-fit text-start text-[#24304CBF]">
              {slide.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

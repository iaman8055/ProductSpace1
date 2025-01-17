import React from "react";
import Slider from "react-slick";
import person1 from "../Assets/Home page New/Person1.svg";
import compnay1 from "../Assets/Home page New/company1.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "50px", // Adds some padding to the sides of the center card
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    rtl: true, // Moves the slider in the opposite direction
    centerMode: true, // Adds centering of the active slide
    focusOnSelect: true, // Allows selecting the active slide
    centerPadding: "50px", // Adds some padding to the sides of the center card
  };

  const TestimonialCard = () => (
    <div className="w-[676.5px] rounded-[9.51px] bg-gray-50 drop-shadow-lg p-5 flex flex-col gap-5 shadow-[0_4px_8px_#D4D4D4] h-[300px] ">
      <div className="flex justify-between">
        <div className="flex mt-5 gap-4">
          <img src={person1} alt="Person" />
          <div>
            <p className="font-sans font-medium text-[22.84px] leading-[30.45px] text-[#0D0D0D]">
              Ayushi Maurya
            </p>
            <p className="font-normal text-base text-[#808080]">
              Product Executive, FirstCry
            </p>
          </div>
        </div>
        <img src={compnay1} alt="Company" />
      </div>
      <div className="w-5/6">
        <p className="font-medium text-base">
          Product Space has been a game-changer for my career. My mentor, Akhil
          Yash Tiwari, provided me with personalized guidance and support that
          was invaluable. The lectures were clear and informative, and the
          personal assessment calls helped me identify areas for improvement. I
          highly recommend Product Space to anyone looking to break into their
          career in product management.
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-5 overflow-hidden bg-white m-5">
      <div className="font-mona font-semibold text-4xl mb-10 pl-20">
        <p>Real Success, Real Impact</p>
      </div>
      {/* Top Slider */}
      <div className="">
        <Slider {...settings1} className="mb-10">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Slider>
        {/* Bottom Slider with stronger blur effect on the second slide */}
        <Slider {...settings2}>
          <div className="">
            <TestimonialCard />
            <div
              className="absolute bottom-0 left-0 right-0 h-1/4"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                filter: "blur(3px)", // Increased blur effect
              }}
            ></div>
          </div>
          <div className="relative">
            <TestimonialCard />
            <div
              className="absolute bottom-0 left-0 right-0 h-1/4"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                filter: "blur(3px)", // Increased blur effect
              }}
            ></div>
          </div>
          <div className="">
            <TestimonialCard />
            <div
              className="absolute bottom-0 left-0 right-0 h-1/4"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                filter: "blur(3px)", // Increased blur effect
              }}
            ></div>
          </div>
        </Slider>
      </div>

      <button className="bg-gradient-button rounded-[50px] w-[249px] h-[56px] text-[#FFFFFF] font-mona font-bold text-lg m-auto">
        More such stories
      </button>
    </div>
  );
};

export default Testimonial;

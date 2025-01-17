import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import adda from "../Assets/Iconly/Adda.svg";
import cars from "../Assets/Iconly/Cars.svg";
import amazon from "../Assets/Iconly/Amazon.svg";
import n from "../Assets/Iconly/N.svg";
// import cred from "../Assets/Iconly/div.svg";

const PrevResult = () => {
  const settings = {
    infinite: true,
    vertical: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: -1,
    cssEase: "linear",
    pauseOnHover: false,
  };

  const settingsOpposite = {
    infinite: true,
    vertical: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: -1,
    cssEase: "linear", // Smooth continuous transition
    pauseOnHover: false, // Disable pause on hover
    rtl: true, // Reverse the scroll direction (bottom to top)
  };

  return (
    <div className="flex lg:flex-row lg:pt-32 xs:pt-12 xs:flex-col xs:gap-16 ">
      <div className="lg:w-1/2 xs:w-full">
        <div className="mt-40 w-3/4  ml-24 flex flex-col gap-16">
          <div className=" flex flex-col gap-5">
            <p className="font-mona font-semibold text-4xl leading-10 bg-gradient-b bg-clip-text text-transparent">
              Placed across 310+ Product Companies in India
            </p>
            <p className="font-mona font-normal text-xl leading-7 text-[#A3A7B6]">
              Our Alums have been placed across various established firms well
              known around the world.
            </p>
          </div>

          <button className="bg-gradient-button rounded-[50px] w-[298px] h-[56px] text-[#FFFFFF] font-mona font-bold text-center text-xl">
            Kickstart Your Journey
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 xs:w-full flex justify-between">
        {/* Slider 1: Top to Bottom */}
        <div className="w-1/3 overflow-hidden bg-[#F3F8FAED]">
          <Slider {...settings}>
            {/* Slide 1 */}
            <div className="p-2 flex justify-center items-center">
              <div className="w-44 h-44 bg-[#FFFFFFED] rounded-[29.8px] drop-shadow-md flex justify-center items-center">
                <img className="m-auto" src={adda} alt="Adda" />
              </div>
            </div>

            {/* Slide 2 */}
            <div className="p-2 flex justify-center items-center">
              <div className="w-44 h-44 bg-[#FFFFFFED] rounded-[29.8px] drop-shadow-md flex justify-center items-center">
                <img className="m-auto" src={amazon} alt="Amazon" />
              </div>
            </div>

            {/* Slide 3 */}
            <div className="p-2 flex justify-center items-center">
              <div className="w-44 h-44 bg-[#FFFFFFED] rounded-[29.8px] drop-shadow-md flex justify-center items-center">
                <img className="m-auto" src={cars} alt="Cars" />
              </div>
            </div>
            <div className="p-2 flex justify-center items-center">
              <div className="w-44 h-44 bg-[#FFFFFFED] rounded-[29.8px] drop-shadow-md flex justify-center items-center">
                <img className="m-auto" src={n} alt="Cars" />
              </div>
            </div>
          </Slider>
        </div>

        {/* Slider 2: Bottom to Top */}
        <div className="w-1/3 overflow-hidden bg-[#F3F8FAED]">
          <Slider {...settingsOpposite}>
            {/* Slide 1 */}
            <div className="p-2 flex justify-center items-center">
              <div className="w-44 h-44 bg-[#FFFFFFED] rounded-[29.8px] drop-shadow-md flex justify-center items-center">
                <img className="m-auto" src={adda} alt="Adda" />
              </div>
            </div>

            {/* Slide 2 */}
            <div className="p-2 flex justify-center items-center">
              <div className="w-44 h-44 bg-[#FFFFFFED] rounded-[29.8px] drop-shadow-md flex justify-center items-center">
                <img className="m-auto" src={amazon} alt="Amazon" />
              </div>
            </div>

            {/* Slide 3 */}
            <div className="p-2 flex justify-center items-center">
              <div className="w-44 h-44 bg-[#FFFFFFED] rounded-[29.8px] drop-shadow-md flex justify-center items-center">
                <img className="m-auto" src={cars} alt="Cars" />
              </div>
            </div>
            <div className="p-2 flex justify-center items-center">
              <div className="w-44 h-44 bg-[#FFFFFFED] rounded-[29.8px] drop-shadow-md flex justify-center items-center">
                <img className="m-auto" src={n} alt="Cars" />
              </div>
            </div>
          </Slider>
        </div>

        {/* Slider 3: Top to Bottom */}
        <div className="w-1/3 overflow-hidden bg-[#F3F8FAED]">
          <Slider {...settings}>
            {/* Slide 1 */}
            <div className="p-2 flex justify-center items-center">
              <div className="w-44 h-44 bg-[#FFFFFFED] rounded-[29.8px] drop-shadow-md flex justify-center items-center">
                <img className="m-auto" src={adda} alt="Adda" />
              </div>
            </div>

            {/* Slide 2 */}
            <div className="p-2 flex justify-center items-center">
              <div className="w-44 h-44 bg-[#FFFFFFED] rounded-[29.8px] drop-shadow-md flex justify-center items-center">
                <img className="m-auto" src={amazon} alt="Amazon" />
              </div>
            </div>

            {/* Slide 3 */}
            <div className="p-2 flex justify-center items-center">
              <div className="w-44 h-44 bg-[#FFFFFFED] rounded-[29.8px] drop-shadow-md flex justify-center items-center">
                <img className="m-auto" src={cars} alt="Cars" />
              </div>
            </div>
            <div className="p-2 flex justify-center items-center">
              <div className="w-44 h-44 bg-[#FFFFFFED] rounded-[29.8px] drop-shadow-md flex justify-center items-center">
                <img className="m-auto" src={n} alt="Cars" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PrevResult;

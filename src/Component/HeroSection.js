import React from "react";
import Slider from "react-slick";
import vector from "../Assets/vector.svg";
import frame1 from "../Assets/Frame1.svg";
import frame2 from "../Assets/Frame2.svg";
import rating from "../Assets/Ratings.svg";
import learner from "../Assets/Learners.svg";
import component1 from "../Assets/Component1.svg";
import component2 from "../Assets/Component2.svg";
import component3 from "../Assets/Component3.svg";

const HeroSection = () => {
  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For smaller screens
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-20 lg:gap-64">
      {/* Top Section */}
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-2">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 lg:ml-24 xs:ml-6 md:ml-16 mt-16 lg:mt-28 flex flex-col gap-10 lg:gap-28">
          {/* Headline */}
          <div className="flex flex-col gap-5">
            <p className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-semibold font-mona bg-gradient-b bg-clip-text text-transparent leading-tight md:leading-[57.6px]">
              Accelerate your Career <br /> in Product Management & AI
            </p>
            <p className="text-base xs:text-lg md:text-xl font-mona text-[#8F8F8F]">
              Learn from Industry experts from
              <span className="text-black">
                {" "}
                Google, Apple, Microsoft, Ola, Inmobi
              </span>{" "}
              and <span className="text-black">Ajio</span>.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col xs:flex-row gap-4 sm:gap-5 mt-6">
            <button className="bg-gradient-button rounded-[50px] px-8 py-4 text-white font-mona font-bold text-lg sm:text-xl text-center">
              Explore Programs
            </button>
            <button className="bg-[#FCFCFC] rounded-[50px] px-8 py-4 text-black font-mona font-bold text-lg sm:text-xl text-center shadow-lg">
              Watch Demo
            </button>
          </div>

          {/* Ratings and Learners */}
          <div className="flex flex-wrap gap-6 xs:gap-10 items-center">
            <div className="flex gap-6 items-center">
              <img className="w-12 xs:w-14" src={rating} alt="Ratings" />
              <div>
                <p className="font-bold text-xl xs:text-3xl text-[#02246E]">
                  4.8
                </p>
                <p className="font-normal text-sm xs:text-base">Ratings</p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-16 xs:w-20" src={learner} alt="Learners" />
              <div>
                <p className="font-bold text-xl xs:text-3xl text-[#02246E]">
                  10K+
                </p>
                <p className="font-normal text-sm xs:text-base">Learners</p>
              </div>
            </div>
          </div>
        </div>

        {/* Background and Images */}
        <div className="w-full lg:w-1/2 flex justify-center relative -mt-10 lg:-mt-20">
          <div
            className="h-full w-full lg:h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${vector})` }}
          >
            <img
              className="relative mx-auto lg:absolute lg:top-24 lg:left-24"
              src={frame1}
              alt="Frame 1"
            />
            <img
              className="relative mx-auto lg:absolute lg:top-[450px] lg:left-64"
              src={frame2}
              alt="Frame 2"
            />
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="w-full">
        <div className="flex lg:flex-row xs:flex-col gap-10 items-center justify-center">
          <p className="font-mona font-bold text-3xl text-[#1D1F3D] leading-8 w-[224.96px]">
            Trusted by Students from
          </p>

          {/* Slider for smaller screens */}
          <div className="lg:hidden w-full">
            <Slider {...sliderSettings}>
              <img src={component1} alt="Company 1" />
              <img src={component2} alt="Company 2" />
              <img src={component3} alt="Company 3" />
            </Slider>
          </div>

          {/* Static Images for larger screens */}
          <div className="hidden lg:flex gap-6">
            <img src={component1} alt="Company 1" />
            <img src={component2} alt="Company 2" />
            <img src={component3} alt="Company 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// import React from "react";
// import vector from "../Assets/vector.svg";
// import frame1 from "../Assets/Frame1.svg";
// import frame2 from "../Assets/Frame2.svg";
// import rating from "../Assets/Ratings.svg";
// import learner from "../Assets/Learners.svg";
// import component1 from "../Assets/Component1.svg";
// import component2 from "../Assets/Component2.svg";
// import component3 from "../Assets/Component3.svg";

// const HeroSection = () => {
//   return (
//     <div className="flex flex-col gap-64">
//       <div className="w-full lg:flex gap-2">
//         <div className="w-fit lg:ml-24 xs:ml-16 mt-28 flex flex-col gap-28">
//           <div className="flex flex-col gap-5">
//             <div className="">
//               <p className="md:text-5xl xs:text-4xl font-semibold font-mona bg-gradient-b bg-clip-text text-transparent leading-[57.6px]">
//                 Accelerate you Career <br></br>in Product Management & AI
//               </p>
//             </div>
//             <div className="w-4/6">
//               <p className="text-xl font-mona text-[#8F8F8F]">
//                 Learn from Industry experts from
//                 <span className="text-black">
//                   {" "}
//                   Google, Apple, Microsoft, Ola, Inmobi
//                 </span>{" "}
//                 and <span className="text-black">Ajio</span>
//               </p>
//             </div>
//             <div className="flex xs:flex-col lg:flex-row gap-5 mt-10">
//               <button className="bg-gradient-button rounded-[50px] w-[253px] h-[56px] text-[#FFFFFF] font-mona font-bold text-center text-xl">
//                 Explore Programs
//               </button>
//               <button className="bg-[#FCFCFC]  rounded-[50px] lg:w-[215.85px] h-[56px] xs:w-[254px] text-black font-mona font-bold text-center text-xl shadow-lg">
//                 Watch Demo
//               </button>
//             </div>
//           </div>

//           <div className="flex flex-col gap-x-6">
//             <div className="flex gap-14">
//               <img className="w-14" src={rating} />

//               <img className="w-20 ml-8" src={learner} />
//             </div>
//             <div className="flex gap-14">
//               <div className="">
//                 <div
//                   className="w-[68.42px] border-[6px] rotate-90 mt-12 -ml-7  "
//                   style={{
//                     border: "6px solid transparent",
//                     borderImage:
//                       "linear-gradient(-90deg, #FFFFFF00 0%, #21C1F3 100%) 1",
//                   }}
//                 ></div>
//                 <div className="ml-8 -mt-10">
//                   <p className="font-bold text-3xl text-[#02246E] ">4.8</p>
//                   <p className="font-normal font-sans text-base leading-5">
//                     Ratings
//                   </p>
//                 </div>
//               </div>
//               <div className="">
//                 <div
//                   className="w-[68.42px] border-[6px] rotate-90  mt-12 -ml-7"
//                   style={{
//                     border: "6px solid transparent",
//                     borderImage:
//                       "linear-gradient(-90deg, #FFFFFF00 0%, #21C1F3 100%) 1",
//                   }}
//                 ></div>
//                 <div className="ml-8 -mt-10">
//                   <p className="font-bold text-3xl text-[#02246E] ">10K+</p>
//                   <p className="font-normal font-sans text-base leading-5">
//                     Learners
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-fit -mt-20 -ml-36 ">
//           <div
//             className="h-screen bg-cover bg-center"
//             style={{ backgroundImage: `url(${vector})` }}
//           >
//             <img className="pl-36 pt-24" src={frame1} />
//             <img className="lg:-mt-40 ml-96 xs:ml-56 xs:-mt-20" src={frame2} />
//           </div>
//         </div>
//       </div>
//       <div className="w-full">
//         <div className="flex gap-10 items-center justify-center">
//           <p className="font-mona font-bold text-3xl text-[#1D1F3D] leading-8 w-[224.96px]">
//             Trusted by Students from
//           </p>
//           <img src={component1} />
//           <img src={component2} />
//           <img src={component3} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

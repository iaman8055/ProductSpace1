import React from "react";
import frame1 from "../../Assets/Home page/Frame1.svg";
import Arrow from "../../Assets/Home page/Arrow.svg";
import Like from "../../Assets/Home page/Like.svg";
import comment from "../../Assets/Home page/comment.svg";
import share from "../../Assets/Home page/Vector.svg";
const CaseCard = () => {
  return (
    <div>
      <div className="w-full">
        <img src={frame1} />
        <div className="flex flex-col gap-2">
          <div className="flex gap-16">
            <p className="font-mona font-semibold text-[18.03px]">
              Improving MagicBricks Viewing Experience
            </p>
            <img className="w-[18px]" src={Arrow} />
          </div>
          <p className="font-mona font-normal text-xs text-[#667085] ">
            A sneak peek into what you will learn in our 10-week curriculum.
          </p>
          <div className="flex gap-40">
            <div className="flex gap-2">
              <div className="w-[88.02px] h-[23.02px] rounded-md border-[0.75px] bg-[#E7F7FC] border-[#013B4D3D] pt-1 ">
                <p className="font-sans font-normal text-[9px] leading-3 text-center">
                  Prototype Testing
                </p>
              </div>
              <div className="w-[37.02px] h-[23.02px] rounded-md border-[0.75px] bg-[#E7F7FC] border-[#013B4D3D] pt-1">
                <p className="font-sans font-normal text-[9px] leading-3 text-center">
                  News
                </p>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="flex gap-1">
                <img className="w-[13.92px]" src={Like} />
                <p className="font-sans font-normal text-xs pt-1">24</p>
              </div>
              <div className="flex gap-1">
                <img className="w-[9.49px]" src={comment} />
                <p className="font-sans font-normal text-xs pt-1">24</p>
              </div>
              <div className="flex gap-1">
                <img src={share} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;

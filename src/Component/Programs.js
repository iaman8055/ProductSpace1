import React from "react";
import ProgramCard from "./Cards/ProgramCard";
import ProgramCard1 from "./Cards/ProgramCard";
import ProgramCard2 from "./Cards/ProgramCard1";

const Programs = () => {
  return (
    <div>
      <div className=" bg-[#F2F3F5] p-20">
        <div className="flex flex-col gap-16">
          <p className="font-mona font-semibold bg-gradient-b bg-clip-text text-transparent text-4xl ml-12">
            Programs We Offer
          </p>
          <div className="flex xs:flex-col lg:flex-row gap-10 items-center justify-center ">
            <ProgramCard1 />
            <ProgramCard2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;

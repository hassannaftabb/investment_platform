import React from "react";
import Img1 from "../../../assets/images/CostCalculator_img_1.png";
import CostCalculatorProjectCard from "./CostCalculatorProjectCard";
import CostCalculatorComponent from "./CostCalculatorComponent";
import CostGrid from "./CostGrid";

const CostCalculator = () => {
  return (
    <>
      <div className="pt-[2rem] ">
        <img src={Img1} className="w-[100%] h-[100%]" alt=""></img>
      </div>
      <div className="mb-6 px-[6rem]">
        <div className="flex flex-col gap-10">
          <CostCalculatorProjectCard />
          <CostCalculatorComponent />
          <CostGrid />
        </div>
      </div>
    </>
  );
};

export default CostCalculator;

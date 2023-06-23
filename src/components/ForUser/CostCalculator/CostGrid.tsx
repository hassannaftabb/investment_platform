import React from "react";
import { CostGridArr } from "./CostCalculatorConst";

const CostGrid = () => {
  return (
    <div className="flex flex-col font-mullish ">
      <h1 className="text-center mt-8 font-poppins font-semibold text-3xl">
        Select One & Calculate!
      </h1>
      <div className=" flex flex-wrap justify-between gap-y-[0.8rem] mt-9 sm:flex-col">
        {CostGridArr.map((items) => (
          <div className="flex flex-col basis-[24%] rounded-xl  ">
            <div className="basis-[80%]">
              <img
                src={items.gridimg}
                className="rounded-t-lg w-[100%] h-[100%]"
                alt=""
              />
            </div>
            <div className="basis-[20%] ">
              <h1 className="py-4  bg-[#FFFFFF] shadow-xl pl-6 rounded-b-lg font-[700] text-sm">
                {items.text}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CostGrid;

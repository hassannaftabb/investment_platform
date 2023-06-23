import React from "react";
import { HowItWorksComponentType } from "./HowItWorksComponentType";

const HowItWorksComponent = ({
  image,
  title,
  isClassName = false,
}: HowItWorksComponentType) => {
  return (
    <div>
      <div
        className={`${
          isClassName
            ? "rounded-[100%] border-solid border-[1px] border-[#d9d6d8] bg-[#FFFFFF] w-[100px] h-[100px] m-auto flex items-center relative"
            : ""
        } `}
      >
        <img src={image} className={`m-auto w-[70px] h-[70px]`} alt="" />
      </div>
      <p className="text-center mt-2 text-[#41303e] text-[16px] font-mulish font-[600] w-[170px]">
        {title}
      </p>
    </div>
  );
};

export default HowItWorksComponent;

import React from "react";
import { StaticBoxProp } from "./types";

const StaticBox = ({
  title,
  contents,
  isBackground = true,
  index,
  gapTrue = false,
  isColor = false,
}: StaticBoxProp) => {
  return (
    <div
      className={`py-[25px] px-[40px] my-[20px] ${
        isBackground === true ? "bg-[#AFAFAF]/[.05]" : ""
      }`}
    >
      <p className="text-[#ED0641] text-[16px] mb-5 font-[400]">{title}</p>
      {contents.map((item, idx) => (
        <p
          key={"item" + idx}
          className={`text-[13.5px] ${
            isColor ? "text-[#767676]" : "text-[#77838F]"
          } ${
            gapTrue ? (index?.includes(idx) ? "my-5" : "") : "mb-5"
          } font-[300]`}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default StaticBox;

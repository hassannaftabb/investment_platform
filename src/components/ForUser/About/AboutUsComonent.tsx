import React from "react";
import { AboutType } from "./AboutType";

const AboutUsComonent = ({
  arrImg,
  arrHeading,
  arrText,
  isReverse,
  arrSubHeading,
}: AboutType) => {
  return (
    <>
      <div
        className={`flex  px-6 ${
          window.innerWidth > 600 ? "relative" : ""
        } sm:flex-col justify-start ${
          isReverse ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className="basis-[55%] max-h-[380px] rounded-lg overflow-hidden">
          <img
            src={arrImg}
            className="object-cover w-[100%] h-[100%] rounded-lg"
            alt=""
          />
        </div>
        <div
          className={`w-[47%] basis-[45%] max-w-2xl pt-8 pl-10 pr-10 pb-8 rounded-lg bg-secondary-bright min-h-[230px] sm:w-[100%] sm:relative absolute translate-y-[-50%] sm:translate-y-[0%] top-1/2 sm:top-0 sm:left-0 sm:right-0 ${
            isReverse ? "right-4" : "left-4"
          }`}
        >
          <div>
            <h1 className="text-3xl font-semibold">
              {arrHeading}
              <span className="text-[#ED0641]">{arrSubHeading}</span>
            </h1>
          </div>
          <div className="my-4 ">
            <p className="text-s font-mulish text-justify leading-6 text-[#737373]">
              {arrText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsComonent;

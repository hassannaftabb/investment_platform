import React from "react";
import { AboutHeadingType } from "./AboutType";

const AboutHeading = ({ heading, subheading, text }: AboutHeadingType) => {
  return (
    <>
      <div className="">
        {subheading.length > 0 ? (
          <h1 className="text-3xl font-bold text-center font-mulish">
            {heading}
          </h1>
        ) : (
          <h1 className="text-3xl font-bold text-center font-mulish">
            Get Multiple <span className="text-[#ED0641]">Desgin Options</span>
          </h1>
        )}
        {subheading.length > 0 ? (
          <h1 className="text-3xl font-bold text-center text-[#ED0641] font-mulish mt-2">
            Team of Designers!
          </h1>
        ) : (
          ""
        )}
        <div>
          <p className="text-s font-mulish  leading-6 text-[#737373] text-center px-[5rem] sm:px-[2rem] sm:my-4 mt-2">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutHeading;

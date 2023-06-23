import React from "react";
import serviceimg2 from "../../../../src/assets/images/serviceimg2.png";
import serviceimg3 from "../../../../src/assets/images/serviceimg3.png";
import serviceimg4 from "../../../../src/assets/images/serviceimg4.png";
import serviceimg6 from "../../../../src/assets/images/serviceimg6.png";

const WorkSection = () => {
  const workdata = [
    {
      img: serviceimg2,
    },
    {
      img: serviceimg4,
    },
    {
      img: serviceimg2,
    },
    {
      img: serviceimg3,
    },
    {
      img: serviceimg6,
    },
    {
      img: serviceimg4,
    },
    {
      img: serviceimg2,
    },
    {
      img: serviceimg2,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center mt-9">
        <h1 className="font-semibold text-4xl ">How Does It Work?</h1>
        <p className="text-base text-[#727272] font-light mt-3 sm:text-center">
          Quintessential home building experience cumulated in 8 simple steps.
        </p>
      </div>
      <div className=" flex flex-wrap justify-center w-[100%]">
        {workdata.map((items) => (
          <div className=" m-9 w-[200px] cursor-pointer rounded-full">
            <img src={items.img} className="w-[100%]" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;

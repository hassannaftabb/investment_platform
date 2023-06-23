import React from "react";
import Flooring_Carpet from "../../../assets/images/categories/Flooring_Carpet.png";
import Architects from "../../../assets/images/categories/Architects.png";
import Interior_Designers from "../../../assets/images/categories/Interior_Designers.png";
import Home_Construction from "../../../assets/images/categories/Home_Construction.png";
import General_Contractor from "../../../assets/images/categories/General_Contractor.png";
import Landscape_Architects from "../../../assets/images/categories/Landscape_Architects.png";
import Moduler_Furniture from "../../../assets/images/categories/Moduler_Furniture.png";
import Civil_Engineers from "../../../assets/images/categories/Civil_Engineers.png";
import Home_Service from "../../../assets/images/categories/Home_Service.png";

const Categories = () => {
  const categoriesData = [
    {
      image: Architects,
      title: "Architects",
    },
    {
      image: Interior_Designers,
      title: "Interior Designers",
    },
    {
      image: Home_Construction,
      title: "Home Construction",
    },
    {
      image: General_Contractor,
      title: "General Contractor",
    },
    {
      image: Civil_Engineers,
      title: "Civil Engineers",
    },
    {
      image: Landscape_Architects,
      title: "Landscape Architects",
    },
    {
      image: Moduler_Furniture,
      title: "Moduler Furniture",
    },
    {
      image: Home_Service,
      title: "Home Service",
    },
    {
      image: Flooring_Carpet,
      title: "Flooring & Carpet",
    },
  ];
  return (
    <div className="flex mt-4 py-5 sm:py-2 sm:mt-1 gap-3 sm:gap-1 max-w-[95%] w-auto justify-start overflow-x-auto scrollbar-hide">
      {categoriesData.map((item, index) => (
        <div
          key={index}
          className="bg-secondary-bright cursor-pointer shadow hover:shadow-md rounded-xl flex flex-wrap items-center justify-center min-w-[120px] md:min-w-[95px] w-[130px] sm:w-[80px] sm:min-w-[65px]"
        >
          <div className=" flex flex-col items-center w-[80%] my-5 sm:my-2">
            <div className="w-[33%] md:w-[26%] sm:w-[16%] flex justify-center mb-3 sm:mb-1">
              <img
                src={item.image}
                className="w-[100%] min-w-[34px] md:min-w-[24px] sm:min-w-[16px]"
                alt={item.title}
              />
            </div>
            <h3 className={` text-center text-md font-poppins md:text-xs md:text-[0.6rem] sm:text-[0.5rem] ${index===0?'sm:leading-[1.4rem] md:leading-[2rem] leading-[48px]':'sm:leading-[0.7rem]'}`}>
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;

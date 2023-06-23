import React from "react";
import Img1 from "../../../assets/images/task_alt.png";
import Img2 from "../../../assets/images/join_inner.png";
import Img3 from "../../../assets/images/crop.png";

const CostCalculatorProjectCard = () => {
  const Costarr = [
    {
      image: Img1,
      pno: "4000+",
      text: "Number of Estimated Projects",
    },
    {
      image: Img2,
      pno: "INR 1000+ Crores",
      text: "Total Value of Estimated Projects",
    },
    {
      image: Img3,
      pno: "40+ Lakhs Sqft.",
      text: "Total Area of Estimated Projects",
    },
  ];

  return (
    <div className="flex flex-col">
      <h1 className="text-center mt-8 font-poppins font-medium text-2xl">
        Our Calculators Have Been Widely Used
      </h1>
      <div className="flex gap-[2rem] justify-center items-center mt-4 sm:flex-col">
        {Costarr.map((costarrdata, idx) => {
          return (
            <div className="aspect-square w-[230px]  flex justify-center items-center ">
              <div
                className="bg-[#AFAFAF0A] flex flex-col items-center px-6 py-7 rounded-md"
                key={"costarrdata" + idx}
              >
                <div className="w-[40%] h-[72px]">
                  <img
                    src={costarrdata.image}
                    alt=""
                    style={{ marginTop: idx === 1 ? "10px" : "" }}
                  />
                </div>
                <h2 className="text-primary text-center font-mulish mt-2">
                  {costarrdata.pno}
                </h2>
                <h4 className="text-secondary-dark font-mulish text-center mt-2">
                  {costarrdata.text}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CostCalculatorProjectCard;

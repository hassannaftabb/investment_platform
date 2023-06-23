import React from "react";
import Img2 from "../../../assets/images/CostCalculator_img_2.png";

const CostCalculatorComponent = () => {
  return (
    <>
      <div className="flex    justify-center : items-center  flex-row  gap-6 sm:flex-col">
        <div className="basis-[55%]  rounded-lg overflow-hidden max-h-[385px]">
          <img
            src={Img2}
            className=" w-[100%] h-[100%] rounded-lg object-contain"
            alt=""
          />
        </div>
        <div className=" basis-[45%] max-w-2xl    rounded-lg     ">
          <div>
            <h1 className="text-3xl font-semibold">How Much Will This Cost?</h1>
          </div>
          <div className="my-4 ">
            <p className="text-[0.8rem] font-mulish text-justify leading-6 text-[#737373]">
              Lorem ipsum dolor sit amet consectetur. Nam enim vestibulum neque
              lobortis sapien. Tristique imperdiet ultricies arcu sit. Ante
              faucibus quis in scelerisque cum nunc nunc in leo. Donec
              scelerisque morbi ac mattis ut. Lectus nec vivamus libero nibh
              egestas gravida sed id. Lorem ipsum dolor sit amet consectetur.
              Nam enim vestibulum neque lobortis sapien. Tristique imperdiet
              ultricies arcu sit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CostCalculatorComponent;

import React from "react";
import CommonLayout from "../../../layouts/Common/CommonLayout";
import Img1 from "../../../assets/images/cost_detail_img1.png";
import Button from "../../sub-components/shared/Button/Button";

const CostCalculatorDetails = () => {
  const handleChange = () => {};
  return (
    <CommonLayout>
      <div className="p-[5rem] sm:p-0">
        <div className="shadow-xl  flex flex-col rounded-lg  mb-7">
          <div className="flex flex-col justify-center items-center my-9">
            <div className="w-[50%] m-auto rounded-lg">
              <img
                src={Img1}
                className="h-[100%] w-[100%] rounded-lg object-contain"
                alt=""
              />
            </div>
            <div className="  flex flex-col gap-[1.2rem] w-[50%] mt-[1.2rem]">
              <h1 className=" text-center font-mulish font-bold text-3xl ">
                Living Room
              </h1>
              <p className="text-[0.9rem] font-mulish text-center leading-4 text-[#737373]">
                Your cost estimate will depend on certain assumptions we make
                and the data you submit.
              </p>
              <div className="w-[55%] sm:w-[100%] m-auto">
                <Button
                  title={"Get A Cost Calculator"}
                  onClick={handleChange}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default CostCalculatorDetails;

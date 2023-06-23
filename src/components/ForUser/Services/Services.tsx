import React from "react";
import Pricing from "./Pricing";

import rectangle from "../../../../src/assets/images/rectangle.png";
import serviceimg2 from "../../../../src/assets/images/serviceimg2.png";
import serviceimg3 from "../../../../src/assets/images/serviceimg3.png";
import serviceimg4 from "../../../../src/assets/images/serviceimg4.png";
import serviceimg5 from "../../../../src/assets/images/serviceimg5.png";
import serviceimg6 from "../../../../src/assets/images/serviceimg6.png";

import chair from "../../../../src/assets/images/chair.png";
import chair2 from "../../../../src/assets/images/chair2.png";
import vector from "../../../../src/assets/images/Vector.png";
import emi from "../../../../src/assets/images/emi.png";
import menu from "../../../../src/assets/images/menu.png";
import tick from "../../../../src/assets/images/tick.png";
import information from "../../../assets/images/information.png";
import HelpSection from "./HelpSection";
import WorkSection from "./WorkSection";
import CommonLayout from "../../../layouts/Common/CommonLayout";

const Services = () => {
  const serviceContent = [
    {
      ser_img: serviceimg5,
      text: "Structural Design",
    },
    {
      ser_img: serviceimg2,
      text: "Construction",
    },
    {
      ser_img: serviceimg3,
      text: "Interiors",
    },
    {
      ser_img: serviceimg4,
      text: "Utility",
    },
    {
      ser_img: serviceimg5,
      text: "Home Automation",
    },
    {
      ser_img: serviceimg6,
      text: "AuthorityApprovals",
    },
  ];

  const qualities = [
    {
      icon: vector,
      heading: "Unparalled Quality",
      paragraph: "A guarantee of top notch services and source materials",
    },
    {
      icon: vector,
      heading: "Vastu-compliant",
      paragraph: "Ensuring that your home resonates with auspicious energies.",
    },
    {
      icon: chair,
      heading: "Customised Home Interior Packages",
      paragraph: "Inclusive of all home decor services at best prices..",
    },
    {
      icon: information,
      heading: "Designs Enabled by VR Technology",
      paragraph: "Immerse yourself in the integrated world of home designing.",
    },
    {
      icon: menu,
      heading: "Smart Tech-Enabled Sustainable Homes",
      paragraph: "Designing efficient and resilient smart homes for tomorrow.",
    },
    {
      icon: emi,
      heading: "Easy EMIs",
      paragraph:
        "Multiple payment options for a congenial and carefree billing process.",
    },
    {
      icon: tick,
      heading: "Home Automation Services",
      paragraph:
        "Constructing homes with high-tech innovation to create the perfect algorithm.",
    },
    {
      icon: chair2,
      heading: "5 Years of Structural Warranty",
      paragraph: "Transparent and credible home construction practices.",
    },
    {
      icon: tick,
      heading: "Wholesale Prices",
      paragraph: "Competitive prices that suit your budget.",
    },
    {
      icon: chair2,
      heading: "Fluent Approvals",
      paragraph:
        "Seamless assistance for approvals from government and external authorities.",
    },
  ];

  return (
    <CommonLayout>
      <div className="font-mullish">
        <div className="">
          <img src={rectangle} alt="" />
        </div>
        <div className="flex flex-col w-full items-center mt-7 ">
          <h1 className="font-semibold text-4xl">Our services</h1>
          <p className="text-base text-[#727272] font-light mt-3">
            We build, maintain and upgrade your home
          </p>
          <div className=" w-full flex flex-wrap items-center justify-center flex-row ">
            {serviceContent.map((items) => (
              <div className="w-[365px] mt-8 flex flex-col items-center  ">
                <div className="w-[240px] rounded-full">
                  <img
                    src={items.ser_img}
                    className=" w-[100%] h-[100%] cursor-pointer"
                    alt=""
                  />
                </div>
                <p className="mt-5   font-[600]">{items.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mt-10  flex flex-col items-center justify-center">
          <div>
            <h1 className="font-[600] text-[36px]">What Differentiates Us?</h1>
            <p className="text-[#727272] font-[400] text-[16px]">
              Delivering unique experiences, one service at a time.
            </p>
          </div>
          <div className="flex flex-wrap justify-center mx-1">
            {qualities.map((items) => (
              <div className="flex flex-col  items-center justify-center w-[488px] sm:w-full h-[120px] font-mullish mx-7 rounded-[10px] my-6  bg-[#F1F1F1] hover:shadow-xl cursor-pointer">
                <div className="w-7">
                  <img src={items.icon} alt="" />
                </div>
                <div className="mt-3 text-base font-[600]">{items.heading}</div>
                <div className="text-xs text-[#727272] text-center">
                  {items.paragraph}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Pricing />
        <HelpSection />
        <WorkSection />
      </div>
    </CommonLayout>
  );
};
export default Services;

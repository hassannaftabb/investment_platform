import React from "react";

const HelpSection = () => {
  const helps = [
    {
      heading: "How much does a new home construction costs?",
      para: "The final price for the home construction varies depending on the scope of the project, materials used, and other factors.",
    },
    {
      heading: "Do you provide a project deadline before it begins?",
      para: "Yes, we provide a plan of action with a payment schedule in advance to home construction.",
    },
    {
      heading:
        "Do you guarantee the material quality used during the execution?",
      para: "Yes, supreme quality ISI Marked Materials are used during the execution.",
    },
    {
      heading: "Do you ensure a seamless look after completion?",
      para: "Yes, we offer quality craftsmanship and tailored designs to match your expectations of home construction.",
    },
    {
      heading: "Why should we trust you as a home construction company?",
      para: "Interior Company is a one-stop solution to designing, building or remodelling your home. With our relentless attention to detail, exceptional customer service and devotion to quality, you can visualise your dream home via Virtual Reality before completion. We offer outstanding warranty service and a one-of-a-kind lifetime preventative home maintenance program.",
    },
    {
      heading: "How can we monitor and track the progress of the project?",
      para: "A project manager and site engineer are assigned to track daily tasks and share real time updates on WhatsApp groups. Moreover, customers can opt for CCTV surveillance on the site. From bills of any material acquisition to labour costs, customers are kept in loop at every step.",
    },
  ];
  return (
    <div className=" w-full  mt-12">
      <div className="w-[100%] flex flex-col items-center sm:pl-[5%]">
        <h1 className="font-[500] text-[36px]  ">
          Got a Concern? We’re Here To Help
        </h1>
        <p className="text-[#727272] font-[400] text-[16px] flex flex-col items-center">
          We understand that home construction is a cherished dream.
          <p>
            {" "}
            We offer perfect solutions to all your queries, so that you can make
            the best decision.
          </p>
        </p>
      </div>

      <div className="mt-12">
        {helps.map((items) => (
          <div className="bg-[#F1F1F1] my-5 p-6 mx-12 ml-16 sm:ml-12 rounded-xl w-auto hover:shadow-lg hover:text-[#ED0641] cursor-pointer x">
            <h1 className="text-[19px] font-[500]">{items.heading}</h1>
            <p className="text-[#717171] text-[13.9px] mt-3 font-[300]">
              {items.para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpSection;

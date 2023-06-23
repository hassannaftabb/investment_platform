import React from "react";
import { BsCheck2 } from "react-icons/bs";

const Pricing = () => {
  const pricing = [
    {
      package: "Standard Package",
      tick_text: [
        {
          name: "Adipiscing",
        },
        {
          name: "Vestibulum",
        },
        {
          name: "Lorem vestibulum",
        },
        {
          name: "Lorem sagittis",
        },
        {
          name: "Felis",
        },
        {
          name: "Egestas",
        },
        {
          name: "Bibendum",
        },
        {
          name: "Convallis",
        },
        {
          name: "Phasellus",
        },
        {
          name: "Suspendisse",
        },
        {
          name: "Lorem vulputate",
        },
        {
          name: "Elementum",
        },
        {
          name: "Vulputate",
        },
      ],
    },
    {
      package: "Classic Package",
      tick_text: [
        {
          name: "Adipiscing",
        },
        {
          name: "Vestibulum",
        },
        {
          name: "Lorem vestibulum",
        },
        {
          name: "Lorem sagittis",
        },
        {
          name: "Felis",
        },
        {
          name: "Egestas",
        },
        {
          name: "Bibendum",
        },
        {
          name: "Convallis",
        },
        {
          name: "Phasellus",
        },
        {
          name: "Suspendisse",
        },
        {
          name: "Lorem vulputate",
        },
        {
          name: "Elementum",
        },
        {
          name: "Vulputate",
        },
      ],
    },
    {
      package: "Premium Package",
      tick_text: [
        {
          name: "Adipiscing",
        },
        {
          name: "Vestibulum",
        },
        {
          name: "Lorem vestibulum",
        },
        {
          name: "Lorem sagittis",
        },
        {
          name: "Felis",
        },
        {
          name: "Egestas",
        },
        {
          name: "Bibendum",
        },
        {
          name: "Convallis",
        },
        {
          name: "Phasellus",
        },
        {
          name: "Suspendisse",
        },
        {
          name: "Lorem vulputate",
        },
        {
          name: "Elementum",
        },
        {
          name: "Vulputate",
        },
      ],
    },
  ];
  return (
    <div className="mt-10">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="font-[500] text-[36px]">Affordable Pricing</h1>
        <p className="text-[#727272] font-[400] text-[16px] pl-2">
          We balance your design needs and budget with our diverse pricing
          options.
        </p>
      </div>
      <div className="w-full flex items-center justify-center mt-14 sm:flex-col sm:gap-y-6">
        {pricing.map((items) => (
          <div className="w-[300px] min-h-[455px] mx-7 flex flex-col items-center justify-center cursor-pointer rounded-lg hover:shadow-2xl">
            <h1 className="flex items-center justify-center font-mullish font-semibold text-2xl bg-[#ED0641] w-[100%] min-h-[90px] text-[#FFFFFF] rounded-t-lg ">
              {items.package}
            </h1>
            <div className="bg-[#F1F1F1] w-[100%] flex rounded-b-lg">
              {
                <div className="mt-6 flex flex-col gap-y-1.5 pb-7">
                  {items.tick_text.map((items) => (
                    <div className="flex items-center pl-7 ">
                      <BsCheck2 size={20} />
                      {
                        <p className="font[400] text-[14px] justify-around pl-6">
                          {items.name}
                        </p>
                      }
                    </div>
                  ))}
                </div>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

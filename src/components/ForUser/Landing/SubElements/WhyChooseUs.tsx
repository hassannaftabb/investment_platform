import React from "react";

import LandingCompImg from "../../../../assets/images/LandingComp_6.avif";

const WhyChooseUs = () => {
  const dataArr = [
    {
      img: LandingCompImg,
      title: "45 Days Installation",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, in. Aperiam explicabo vero repellendus laboriosam iste ducimus debitis nobis at molestias illum.",
    },
    {
      img: LandingCompImg,
      title: "45 Days Installation",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, in. Aperiam explicabo vero repellendus laboriosam iste ducimus debitis nobis at molestias illum.",
    },
    {
      img: LandingCompImg,
      title: "45 Days Installation",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, in. Aperiam explicabo vero repellendus laboriosam iste ducimus debitis nobis at molestias illum.",
    },
    {
      img: LandingCompImg,
      title: "45 Days Installation",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, in. Aperiam explicabo vero repellendus laboriosam iste ducimus debitis nobis at molestias illum.",
    },
    {
      img: LandingCompImg,
      title: "45 Days Installation",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, in. Aperiam explicabo vero repellendus laboriosam iste ducimus debitis nobis at molestias illum.",
    },
  ];
  return (
    <div className="flex w-10/12 mx-auto my-[10vh] justify-between">
      <div className="w-[10%] flex items-center justify-start">
        <h2 className="-rotate-90 text-3xl font-bold font-poppins w-full whitespace-nowrap relative right-3 after:flex after:relative after:h-1 after:content-[''] after:w-[180%] after:top-2 dotted-line-why">
          Why Choose Us ?
        </h2>
      </div>
      <div className="w-[82%] flex flex-wrap justify-between gap-y-8">
        {dataArr.map((item, index) => (
          <div key={index} className=" basis-[42%] sm:basis-full flex flex-col">
            <div className="flex w-full items-center gap-4">
              <div className=" w-[13%] max-w-[64px] min-w-[50px] flex aspect-square items-center justify-center bg-secondary-extralight rounded-[50%]">
                <img src={item.img} className="w-[80%] object-contain" alt="" />
              </div>
              <h4 className="font-semibold font-poppins text-base after:content-[''] after:w-[100px] after:top-2 after:h-[1.2px] after:rounded-md after:bg-secondary-extralight after:relative after:flex">
                {item.title}
              </h4>
            </div>
            <div className="flex flex-col font-poppins w-full text-sm mt-3">
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

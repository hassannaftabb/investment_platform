import React, { useState } from "react";
import { FindProfessionalCardType } from "../SubElementType/FindProfessionalCardType";
import Button from "../../../sub-components/shared/Button/Button";
import arrow from "../../../../assets/images/arrow.svg";
import add from "../../../../assets/images/adress.png";
import message from "../../../../assets/images/message.png";
import subtract from "../../../../assets/images/bg1.png";
import profile from "../../../../assets/images/profile.png";

const FindProfessionalCard = ({
  image,
  icon,
  heading,
  star,
  reviews,
  content,
  name,
  address,
  handleMessege,
}: FindProfessionalCardType) => {
  const [contents, setcontents] = useState(content);

  const handleClick = () => {};

  return (
    <div className='flex p-[30px] sm:p-[0px] md:p-[20px] lg:p-[20px] gap-7 lg:gap-4 items-center bg-[#FFFFFF] rounded-[10px] sm:rounded-none mb-[30px] sm:mb-[15px] md:mb-[15px] lg:mb-[15px] sm:flex-col'>
      <div className='w-[40%] lg:w-[50%] sm:w-[100%]'>
        <img
          src={image || subtract}
          className='h-[270px] lg:h-[220px] sm:h-[240px] sm:min-w-full sm:max-w-full lg:min-w-full lg:max-w-full md:min-w-full md:max-w-full w-full object-cover rounded-sm'
          alt=''
        />
      </div>
      <div className="w-[60%] lg:w-[50%] sm:w-[100%] sm:px-[20px] sm:pb-[20px] flex lg:flex-col justify-between min-h-[220px]">
        <div className='flex justify-between sm:flex-col sm:items-center sm:gap-6 sm:w-[100%] md:w-full lg:w-full h-full pr-6 md:pr-0 flex-grow'>
          <div className='w-[100%] sm:w-[95%] md:w-[95%] lg:w-[95%] flex flex-col'>
            <div className='flex gap-3'>
              <div className='w-[10%] sm:w-[13%]'>
                <img
                  src={icon || profile}
                  className='sm:w-[45px] md:w-[45px] lg:w-[45px] w-[100%] object-contain aspect-square rounded-[50%]'
                  alt=''
                />
              </div>
              <div className='font-mulish flex flex-col justify-center lg:text-[12px]'>
                <p className='font-[600] text-[18px] sm:text-base'>
                  {heading?.slice(0, 20)}
                </p>
                <p className='font-[500] text-[12px] sm:text-[10px]'>
                  {star}.0 ({reviews} Reviews)
                </p>
              </div>
            </div>
            <div className='pl-5 sm:pl-0'>
              <p className='font-[500] font-mulish text-[14px] lg:text-[12px] mt-2'>
                {contents.slice(0, 110)}... 
                {/* -<span className='text-[#000000]/[0.6]'>{name}</span> */}
              </p>
              <div
                className='flex gap-2 mt-2 cursor-pointer justify-end items-center'
                onClick={handleClick}
              >
                <p className='text-[#ED0641] font-mulish text-sm lg:text-[12px] font-[500]'>
                  View More
                </p>
                <img src={arrow} className="h-3" alt='' />
              </div>
              {window.innerWidth<600 && <div className='flex text-[#000000]/[0.75] text-[13px] md:text-[11px] font-[400] font-mulish mt-2 gap-2'>
                <img src={add} alt='' className='w-[18px] lg:w-[15px] h-[18px] lg:h-[15px]' />
                <p className="lg:text-sm sm:text-[11px]">{address}</p>
              </div>}
            </div>
          </div>
        </div>
        <div className='sm:w-full w-[30%] flex flex-col sm:flex-wrap sm:justify-center sm:gap-2 sm:m-auto lg:mt-2 sm:mt-5 lg:justify-start lg:pl-6 sm:pl-0'>
          <Button
            title='Send Message'
            icon={<img src={message} alt='' className='w-[20px] h-[20px] mr-2' />}
            onClick={handleMessege}
            className='!font-mulish !font-[700] w-[180px] min-w-[160px] sm:w-[100%] lg:w-[50%] max-h-[50px]'
          />
          {window.innerWidth>600&&<div className='flex text-[#000000]/[0.75] text-[13px] md:text-[11px] font-[400] font-mulish mt-4 gap-2'>
            <img src={add} alt='' className='w-[18px] lg:w-[15px] h-[18px] lg:h-[15px]' />
            <p className="lg:text-sm sm:text-[11px]">{address}</p>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default FindProfessionalCard;

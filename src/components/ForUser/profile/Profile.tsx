import React, { useEffect } from "react";
import { useState } from "react";
import subtract from "../../../assets/images/bg1.png";
import profile from "../../../assets/images/profile.png";
import CommonLayout from "../../../layouts/Common/CommonLayout";
import { GoLocation } from "react-icons/go";
import { MdGavel } from "react-icons/md";
import { tagArr } from "./ProfileConst";
import ProductCard from "../Landing/SubElements/ProductCard";
import { useParams } from "react-router-dom";
import { getVendorByUserID } from "../../../services/Vendor/getVendorById";

import facebook from "../../../assets/images/facebook.png";
import instagram from "../../../assets/images/icons/instagram.png";

const Profile = () => {
  const { id }: any = useParams();
  const [details, setDetails] = useState<any>({});

  useEffect(() => {
    (async () => {
      const response: any = await getVendorByUserID(id);
      console.log(response);
      setDetails(response.data);
    })();
  }, [id]);
  const [selectIndex, setselectIndex] = useState<number>();

  return (
    <CommonLayout>
      <div className='my-[20px]'>
        <div className='w-full '>
          <div className=''>
            <div className='rounded-[10px]'>
              <img
                src={details?.businessDetails?.photo || subtract}
                className='w-[100%] h-[100%] rounded-[10px] min-h-[70vh] max-h-[70vh] sm:min-h-[40vh] sm:max-h-[40vh] lg:min-[50vh] lg:max-h-[50vh] md:min-[50vh] md:max-h-[50vh]'
                alt=''
              />
            </div>
          </div>
          <div className='flex justify-between mt-8 sm:mt-1 gap-6 sm:gap-2 ml-[5%]'>
            <div className='profileimg basis-[18%] sm:basis-[35%] min-w-[15%] sm:min-w-[32%] relative'>
              <img
                src={details?.businessDetails?.logo || profile}
                className=' -translate-y-1/2 top-[-22%] sm:top-[10%] border-8 sm:border-4
                             border-secondary-bright absolute aspect-square object-cover w-full rounded-[50%]'
                alt='Profile Pic'
              />
            </div>
            <div className='basis-[35%] sm:basis-[75%] sm:gap-0 flex flex-col  gap-2 '>
              <div className='flex items-center  gap-[1rem]'>
                <h1 className='text-xl sm:text-base font-[700] font-Gilroy-Bold tracking-wider'>
                  {details.basicInfo?.companyName}
                </h1>
              </div>
              <p className='text-sm sm:text-[12px] text-[#00000096] tracking-wide'>
                {details.basicInfo?.category}
              </p>
              <div className='flex gap-2 text-xs sm:text-[11px] sm:mt-2 items-center text-[#00000096] capitalize'>
                <span>
                  <MdGavel size={15} />
                </span>
                <p>{details.basicInfo?.category}</p>
                <span>
                  <GoLocation size={15} />
                </span>
                <p>{details.basicInfo?.address1}</p>
              </div>
            </div>
            <div className='basis-[35%] sm:hidden'></div>
          </div>
        </div>
        <div>
          <div className='w-full mt-7 flex sm:hidden gap-x-12 sm:gap-y-3 text-lg font-mullish font-[600] text-[#00000096]'>
            {tagArr.map((tagArrData, idx: number) => {
              return (
                <a href={`#${tagArrData}`}>
                  <div
                    key={"" + tagArrData + idx}
                    onClick={() => {
                      setselectIndex(idx);
                    }}
                    className='cursor-pointer'
                  >
                    <h1
                      className={`tracking-[0.05em] text-[1.1rem] ${
                        idx === selectIndex ? "text-secondary-dark" : ""
                      }`}
                    >
                      {tagArrData}
                    </h1>
                    {idx === selectIndex ? (
                      <div className='w-[65%] h-[2px] bg-[#000000] mt-1'></div>
                    ) : (
                      ""
                    )}
                  </div>
                </a>
              );
            })}
          </div>
          <div className='text-lg font-[600] '>
            <div className=' text-[#000000] mt-4 '>
              <h1 className='text-lg font-semibold'>About Us</h1>
            </div>

            <div className='flex gap-7 mt-8 ml-5'>
              <div className='flex items-center bg-[#FFFFFF] p-[0.5rem] px-[1rem] sm:text-sm'>
                <h1>Service Provided </h1>
              </div>
              <div className='flex items-center bg-[#FFFFFF] p-[0.5rem] px-[1rem] sm:text-sm'>
                <h1>Area Served</h1>{" "}
              </div>
            </div>
          </div>
          <div className='mt-[2rem] flex flex-col gap-5' id='Projects'>
            <div>
              <h1 className=' text-lg font-semibold'>Projects</h1>
            </div>
            <div className='flex gap-[1.5rem] overflow-x-auto scroll-smooth scrollbar-hide'>
              {details?.projects?.map((item: any, index: any) => (
                <ProductCard
                  key={index}
                  homePage
                  title={item.projectName}
                  images={item.projectImages}
                  category={[item.projectCategory]}
                  address={item.projectAddress}
                  userId={id}
                  className=' basis-[23%] min-w-[250px] rounded-2xl overflow-hidden'
                />
              ))}
            </div>
          </div>

          <div className='mt-[2rem] flex flex-col gap-5' id='Business'>
            <div>
              <h1 className=' text-lg font-semibold'>Bussiness</h1>
            </div>
            <div>
                <div
                  className={`w-[70%] lg:w-[100%] sm:flex-wrap sm:gap-0 flex px-[2rem] py-[1.6rem] gap-[10rem] md:flex-col `}
                >
                  <div className='font-mulish text-[14px] tracking-[0.05em] font-semibold basis-[40%] md:basis-[100%] md:mb-2'>
                    Business Description
                  </div>
                  <div
                    className={`font-mulish text-[14px] tracking-[0.05em] font-semibold basis-[60%] md:basis-[100%]`}
                  >
                    {details.businessDetails?.businessDescription}
                  </div>
                </div>
                <div
                  className={`w-[70%] lg:w-[100%] md:flex-wrap md:gap-0 flex px-[2rem] py-[1.6rem] gap-[10rem] bg-secondary-bright md:flex-col  `}
                >
                  <div className='font-mulish text-[14px] tracking-[0.05em] font-semibold basis-[40%] md:basis-[100%] md:mb-2'>
                    Phone Number
                  </div>
                  <div
                    className={`font-mulish text-[14px] tracking-[0.05em] font-semibold basis-[60%] md:basis-[100%]`}
                  >
                    {details.basicInfo?.phoneNumber}
                  </div>
                </div>
                <div
                  className={`w-[70%] lg:w-[100%] md:flex-wrap md:gap-0 flex px-[2rem] py-[1.6rem] gap-[10rem] md:flex-col `}
                >
                  <div className='font-mulish text-[14px] tracking-[0.05em] font-semibold basis-[40%] md:basis-[100%] md:mb-2'>
                    Website
                  </div>
                  <div
                    className={`font-mulish text-[14px] tracking-[0.05em] font-semibold basis-[60%] md:basis-[100%]`}
                  >
                    {details.businessDetails?.website}
                  </div>
                </div>
                <div
                  className={`w-[70%] lg:w-[100%] md:flex-wrap md:gap-0 flex px-[2rem] py-[1.6rem] gap-[10rem] bg-secondary-bright md:flex-col `}
                >
                  <div className='font-mulish text-[14px] tracking-[0.05em] font-semibold basis-[40%] md:basis-[100%] md:mb-2'>
                    Address
                  </div>
                  <div
                    className={`font-mulish text-[14px] tracking-[0.05em] font-semibold basis-[60%] md:basis-[100%]`}
                  >
                    {details.basicInfo?.address1}
                  </div>
                </div>
            </div>
          </div>
          <div className='mt-[2rem] flex flex-col gap-5' id='Social Media'>
            <div>
              <h1 className=' text-lg font-semibold'>Social Media</h1>
            </div>
            <div className='w-[70%] sm:w-[100%] bg-secondary-bright p-[1.5rem] sm:p-[0.9rem] rounded-[10px] sm:flex-wrap'>
              <div className='font-mulish text-[14px] tracking-[0.05em] font-semibold basis-[50%]'>
                Share this project to clients and Friends!
              </div>
              <div className='flex mt-5 items-center justify-between'>
                <div className='basis-[10%] aspect-square bg-[#F8F8F8] rounded-[50%] overflow-hidden'>
                  <img
                    src={details?.businessDetails?.logo || profile}
                    className='w-full h-full object-cover'
                    alt='Profile Pic'
                  />
                </div>
                <div className='basis-[35%] ml-3 sm:ml-0'>
                  <h1 className='font-mulish font-semibold text-[0.9rem] sm:text-[0.75rem] tracking-[0.05em]'>
                    {details.basicInfo?.companyName}
                  </h1>
                </div>
                <div className='sm:basis-[20%] basis-[40%] flex justify-end gap-[14%] mr-7'>
                      <a
                        href={details.businessDetails?.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className='w-[12%] sm:w-[50%] cursor-pointer'
                      >
                        <img
                          src={instagram}
                          alt=''
                          className='w-[100%] h-[100%] object-contain'
                        />
                      </a>
                      <a
                        href={details.businessDetails?.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className='w-[12%] sm:w-[50%] cursor-pointer'
                      >
                        <img
                          src={facebook}
                          alt=''
                          className='w-[100%] h-[100%] object-contain'
                        />
                      </a>
                </div>
              </div>
              {/* <div className=' w-full flex relative rounded grow  mt-5 h-11'>
                <input
                  type='text'
                  className='flex grow text-sm sm:pr-[50px] outline-none font w-[100%] border border-[#858585] rounded-lg  pl-[15px]'
                  disabled
                  placeholder='Enter Url'
                  value={copyData}
                  onChange={(e) => {
                    setcopyData(e.target.value);
                  }}
                />
                <button
                  className='text-primary  absolute right-[2%] top-[22%] text-[14px]'
                  onClick={(e) => {
                    navigator.clipboard.writeText(copyData);
                  }}
                >
                  Copy
                </button>
              </div> */}
            </div>
          </div>
          {/* <div className='mt-[2rem] flex flex-col gap-5' id='Review'>
                        <div>
                            <h1 className=' text-lg font-semibold'>Reviews</h1>

                        </div>
                        <div className='w-[70%] sm:w-[100%]  bg-secondary-bright flex items-center justify-center py-[4rem] rounded-[10px]'>
                               <div className='flex flex-col gap-4 items-center justify-center'>
                                <div className='w-[30%]'>
                                    <img src={details.reviews.thumb_icons} className='w-[100%] h-[100%]' alt=''/>
                                </div>
                                <div className='font-mulish text-[0.9rem]'>
                                You don't have any reviews yet!
                                </div>
                                <div className='w-[70%] mt-[5px] sm:w-[auto]'>
                                          <Button title="Get Reviews" className='w-[100%] h-[100%] px-[10px]' onClick={()=>{navigate('/getreview')}}></Button>
                                </div>
                               </div>
                        </div>
                        </div> */}
        </div>
      </div>
    </CommonLayout>
  );
};

export default Profile;

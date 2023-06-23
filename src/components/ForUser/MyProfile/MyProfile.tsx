import React from "react";
import { useState } from "react";
import subtract from "../../../assets/images/bg1.png";
import profile from "../../../assets/images/profile.png";
import CommonLayout from "../../../layouts/Common/CommonLayout";
import { profileConstArr } from "./MyProfileConst";
import Button from "../../sub-components/shared/Button/Button";
import { tagArr } from "./MyProfileConst";
import addprofile from "../../../assets/images/addprofile.png";
import SubElement_2Img from "../../../assets/images/SubElement_2Img.avif";
import ProductCard from "../Landing/SubElements/ProductCard";
import EditProfile from "./EditProfile";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const [details, setDetails] = useState(profileConstArr[0].user1);
  const navigate = useNavigate();
  const [copyData, setcopyData] = useState(
    "https://www.canva.com/design/DAFaJ_iexmI/ICVxd43fnGv5nG3klM19Lw/edit"
  );
  const [selectIndex, setselectIndex] = useState<number>();
  console.log(details.social_media[0].social_links);
  const Icon3 = details.profile_details.Work_icon;
  const Icon4 = details.profile_details.Location_icon;

  const [editModeOn, setEditModeOn] = React.useState(false);
  const [ProductData, setProductData] = React.useState([
    {
      title: "Monochromatic Grey 2 BHK",
      img: [SubElement_2Img, SubElement_2Img, SubElement_2Img],
      content: "Add the cloudy hues to your space.",
      save: 25,
      saved: false,
    },
    {
      title: "Monochromatic Grey 2 BHK",
      img: [SubElement_2Img, SubElement_2Img, SubElement_2Img],
      content: "Add the cloudy hues to your space.",
      save: 25,
      saved: false,
    },
  ]);
  const handleSaveClick = (index: number) => {
    let copied = [...ProductData];
    copied[index].saved = !copied[index].saved;
    if (copied[index].saved) {
      copied[index].save = copied[index].save + 1;
    } else {
      copied[index].save = copied[index].save - 1;
    }
    setProductData(copied);
  };
  return (
    <CommonLayout>
      <div className="my-[20px]">
        <div className="w-full ">
          <div className="coverImg relative">
            <div className="rounded-[10px]">
              <img
                src={subtract}
                className="w-[100%] h-[100%] rounded-[10px]"
                alt="Cover"
              />
              <Button
                title="Add Cover"
                onClick={() => {}}
                className=" 
                          absolute 
                          bottom-6 
                          sm:bottom-2
                          right-6 
                          sm:right-2
                          !bg-secondary-bright 
                          text-secondary-dark 
                          !border-0
                          sm:text-xs
                          sm:w-[80px]
                          sm:h-[30px]
                          max-w-[120px]
                      "
              />
            </div>
          </div>

          <div className="flex justify-between mt-8 sm:mt-1 gap-6 sm:gap-1 sm:gap-y-3 ml-[5%] sm:flex-wrap">
            <div className="profileimg basis-[18%] min-w-15% sm:basis-[35%] sm:min-w-[32%] relative">
              <img
                src={profile}
                className=" -translate-y-1/2 top-[-22%] sm:top-[10%] border-8 sm:border-4
                            border-secondary-bright absolute aspect-square object-cover w-full rounded-[50%]"
                alt="Profile Pic"
              />
              <div
                className="
                                w-full aspect-square
                                -translate-y-1/2 top-[-22%] sm:top-[10%]
                                border-[50%] border-8 sm:border-4 border-secondary-bright
                                flex items-end justify-center 
                                absolute z-10 
                                rounded-[50%]
                                cursor-pointer
                                opacity-70
                            "
                onClick={() => {}}
                style={{
                  background:
                    "linear-gradient(to top,grey 30%, transparent 30%, transparent 100%",
                }}
              >
                <img
                  src={addprofile}
                  className="w-[26px] object-contain relative bottom-[10%]"
                  alt=""
                />
              </div>
            </div>
            <div className="basis-[35%] sm:basis-[63%]  flex flex-col  gap-2 sm:gap-1">
              <div className="flex items-center  gap-[1rem]">
                <h1 className="text-xl sm:text-[14px] font-[700] font-Gilroy-Bold tracking-wider">
                  {details.profile_details.Name}
                </h1>
              </div>
              <p className="text-sm sm:text-[12px] text-[#00000096] tracking-wide">
                {details.profile_details.Designation}
              </p>
              <div className="flex gap-2 text-xs sm:text-[11px] sm:mt-2 text-[#00000096] capitalize">
                <span>
                  <Icon3 size={15} style={{ minWidth: "15px" }} />
                </span>
                <p>{details.profile_details.work}</p>
                <span>
                  <Icon4 size={15} style={{ minWidth: "15px" }} />
                </span>
                <p>{details.profile_details.Location}</p>
              </div>
            </div>
            <div className="flex-[35%] flex justify-end gap-3 sm:mt-2">
              {editModeOn && (
                <Button
                  title="Cancel"
                  className="max-w-[150px] max-h-10 !border-secondary-extralight-2 !bg-secondary-bright !text-black-2"
                  onClick={() => {
                    setEditModeOn(false);
                  }}
                />
              )}
              <Button
                title="Edit Profile"
                className="max-w-[150px] sm:w-[5.5rem] sm:text-xs sm:h-8 sm:whitespace-nowrap max-h-10"
                onClick={() => {
                  setEditModeOn(true);
                }}
              />
            </div>
          </div>
        </div>
        {!editModeOn && (
          <div>
            <div className="w-full mt-7 flex sm:flex-wrap gap-x-12 sm:gap-x-6 sm:gap-y-3 text-lg font-mullish font-[600] text-[#00000096] sm:hidden">
              {tagArr.map((tagArrData, idx: number) => {
                return (
                  <a href={`#${tagArrData}`}>
                    <div
                      key={"" + tagArrData + idx}
                      onClick={() => {
                        setselectIndex(idx);
                      }}
                      className="cursor-pointer"
                    >
                      <h1
                        className={`tracking-[0.05em] text-[1.1rem] ${
                          idx === selectIndex ? "text-secondary-dark" : ""
                        }`}
                      >
                        {tagArrData}
                      </h1>
                      {idx === selectIndex ? (
                        <div className="w-[65%] h-[2px] bg-[#000000] mt-1"></div>
                      ) : (
                        ""
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="text-lg font-[600] ">
              <div className=" text-[#000000] mt-4 ">
                <h1 className="text-lg font-semibold">About Us</h1>
              </div>

              <div className="flex gap-7 mt-8 ml-5 sm:mt-4 sm:ml-3">
                <div className="flex items-center bg-[#FFFFFF] p-[0.5rem] px-[1rem] sm:text-sm">
                  <h1>Service Provided </h1>
                </div>
                <div className="flex items-center bg-[#FFFFFF] p-[0.5rem] px-[1rem] sm:text-sm">
                  <h1>Area Served</h1>{" "}
                </div>
              </div>
            </div>
            <div className="mt-[2rem] flex flex-col gap-5" id="Projects">
              <div>
                <h1 className=" text-lg font-semibold">Projects</h1>
              </div>
              <div className="flex gap-[1.5rem] overflow-x-auto scroll-smooth scrollbar-hide">
                {ProductData.map((item, index) => (
                  <div key={index} className="relative">
                    <ProductCard
                      save={item.save}
                      handleSave={() => handleSaveClick(index)}
                      saved={item.saved}
                      homePage
                      title={item.title}
                      content={item.content}
                      images={item.img}
                      className=" basis-[23%] min-w-[250px] rounded-2xl overflow-hidden"
                    />
                    <Button
                      title="Edit"
                      className="absolute bottom-2 right-2"
                      onClick={()=>{navigate('/editProject')}}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-[2rem] flex flex-col gap-5" id="Business">
              <div>
                <h1 className=" text-lg font-semibold">Bussiness</h1>
              </div>
              <div>
                {details.Business.map((arrdata, idx) => {
                  console.log(idx);

                  return (
                    <div
                      className={`w-[62%] sm:w-[100%] sm:flex-wrap flex px-[2rem] py-[1.6rem] gap-[10rem] sm:gap-0   ${
                        idx % 2 === 0 ? "bg-secondary-bright" : ""
                      }  `}
                      key={"idx" + arrdata}
                    >
                      <div className="font-mulish text-[14px] tracking-[0.05em] font-semibold basis-[50%]">
                        {Object.keys(arrdata)[0]}
                      </div>
                      <div
                        className={`font-mulish text-[14px] tracking-[0.05em] font-semibold basis-[50%] ${
                          idx === details.Business.length - 1
                            ? "text-primary"
                            : ""
                        }`}
                      >
                        {Object.values(arrdata)[0]}{" "}
                        {idx === details.Business.length - 1 && "Followers"}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-[2rem] flex flex-col gap-5" id="Social Media">
              <div>
                <h1 className=" text-lg font-semibold">Social Media</h1>
              </div>
              <div className="w-[62%] sm:w-[100%] bg-secondary-bright p-[1.5rem] sm:p-[0.9rem] rounded-[10px]">
                <div className="font-mulish text-[14px] tracking-[0.05em] font-semibold basis-[50%]">
                  Share this project to clients and Friends!
                </div>
                <div className="flex mt-5 items-center justify-between">
                  <div className="basis-[25%] bg-[#F8F8F8] rounded-md h-[100px]"></div>
                  <div className="basis-[25%]">
                    <h1 className="font-mulish font-semibold text-[0.9rem] sm:text-[0.75rem] tracking-[0.05em]">
                      Gautam Test Project
                    </h1>
                    <h1 className="text-[#858585] sm:text-xs tracking-[0.05em]">
                      2 Photos
                    </h1>
                  </div>
                  <div className="basis-[35%] sm:basis-[20%] flex justify-end gap-4 mr-7">
                    {details.social_media[0].social_links.map(
                      (arrdata, idx) => {
                        return (
                          <div
                            key={idx}
                            className="w-[12%] sm:w-[50%] cursor-pointer"
                          >
                            <img
                              src={arrdata.icon}
                              alt=""
                              className="w-[100%] h-[100%] object-contain"
                            />
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
                <div className=" w-full flex relative rounded grow  mt-5 h-11">
                  <input
                    type="text"
                    className="flex grow text-sm sm:pr-[50px] outline-none font w-[100%] border border-[#858585] rounded-lg  pl-[15px]"
                    disabled
                    placeholder="Enter Url"
                    value={copyData}
                    onChange={(e) => {
                      setcopyData(e.target.value);
                    }}
                  />
                  <button
                    className="text-primary  absolute right-[2%] top-[22%] text-[14px]"
                    onClick={(e) => {
                      navigator.clipboard.writeText(copyData);
                    }}
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {editModeOn && (
          <div>
            <EditProfile />
          </div>
        )}
      </div>
    </CommonLayout>
  );
};

export default MyProfile;

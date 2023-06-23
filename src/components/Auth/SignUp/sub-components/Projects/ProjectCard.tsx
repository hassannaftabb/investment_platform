import React from "react";
import Button from "../../../../sub-components/shared/Button/Button";
import { removeProject } from "./repo/ProjectRepo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GoLocation } from "react-icons/go";

import { Pagination, Navigation } from "swiper";
import { Chip } from "@mui/material";

const ProjectCard = ({
  title,
  cost,
  category,
  id,
  setAllProjects,
  images,
  fileImages,
  content,
  className,
  save,
  saved = false,
  homePage = false,
  handleSave,
  containerId,
  address,
  zoom = false,
}: any) => {
  const [zoomView, setZoomView] = React.useState(zoom);
  const handleClick = () => {};
  return (
    <div
      className={"max-w-[500px] my-4 relative rounded-xl " + className}
      style={{ boxShadow: "0 2px 4px 0 rgba(65,48,62,.15)" }}
    >
      <div
        className="absolute top-[-3%] right-[-3%] cursor-pointer z-30 flex items-center justify-center w-7 h-7 rounded-[50%] font-extrabold bg-primary text-secondary-bright"
        onClick={() => {
          removeProject(id, setAllProjects);
        }}
      >
        -
      </div>
      <div className="min-h-[220px] bg-secondary-extralight rounded-t-xl overflow-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper productCardSwiper"
        >
          {images?.map((item: any, index: any) => (
            <SwiperSlide key={index}>
              <img
                src={item}
                id={`image-cont-${containerId}-item=${index}`}
                onClick={() => {
                  setZoomView(true);
                }}
                className="w-[100%] h-[220px] object-cover cursor-pointer"
                alt="img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex gap-1 justify-between py-[16px] px-6">
        <div>
          <p className="text-[16px] font-[600] font-[Roboto] text-[#41303e] capitalize">
            {title}
          </p>
          {!homePage && (
            <div className="flex justify-between items-center">
              {content && (
                <p className="text-[12px] text-[#41303e] font-[Roboto]">
                  {content}
                </p>
              )}
              <Button
                title="GET FREE QUOTE"
                onClick={handleClick}
                className="bg-transparent rounded-[25px] max-w-[150px] sm:w-[120px] sm:h-[30px] sm:whitespace-nowrap sm:text-[12px]"
              />
            </div>
          )}
          {homePage && (
            <>
              {address && (
                <div className="flex gap-2 items-center mt-1">
                  <GoLocation className="text-primary w-3" />
                  {address}
                </div>
              )}
              {category && (
                <div className="flex gap-2 flex-wrap mt-2">
                  <Chip label={category} />
                </div>
              )}
            </>
          )}
        </div>
        <div className="text-[18px] font-[600] font-[Roboto] text-primary capitalize">
          ₹ {cost}
        </div>
      </div>
      {zoomView && (
        <>
          <div className="fixed w-[80%] h-[80%] sm:h-[50%] sm:w-[90%] -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] z-40 bg-secondary-bright rounded-xl flex justify-center items-center">
            <div className="relative w-[90%] h-[90%]">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper productCardSwiper w-full h-full"
              >
                {images?.map((item: any, index: any) => (
                  <SwiperSlide key={index}>
                    <img
                      src={item}
                      id={`image-cont-${containerId}-item=${index}`}
                      className="w-[100%] h-full object-cover cursor-pointer"
                      alt="img"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div
              className="absolute top-2 sm:top-0 right-5 sm:right-1 text-secondary-dark font-semibold text-2xl cursor-pointer z-30"
              onClick={() => {
                setZoomView(false);
              }}
            >
              X
            </div>
          </div>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-secondary-dark opacity-40 z-30"
            onClick={() => {
              setZoomView(false);
            }}
          ></div>
        </>
      )}
    </div>
  );
};

export default ProjectCard;

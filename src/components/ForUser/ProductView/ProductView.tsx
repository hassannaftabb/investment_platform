import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import SubElement_2Img from "../../../assets/images/SubElement_2Img.avif";
import CommonLayout from "../../../layouts/Common/CommonLayout";

const ProductView = () => {
  const images = [SubElement_2Img, SubElement_2Img, SubElement_2Img];
  return (
    <CommonLayout>
      <div className="m-[3%] flex">
        <div className="w-1/2">
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
              {images.map((item: any, index: any) => (
                <SwiperSlide key={index}>
                  <img
                    src={item}
                    className="w-[100%] h-full object-cover cursor-pointer"
                    alt="img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-3">
          <h1 className=" text-2xl font-poppins font-bold">
            Monochromatic Grey 2 Kitchen
          </h1>
          <p className=" text-base">Add the cloudy hues to your space.</p>
          <p>Location</p>
        </div>
      </div>
    </CommonLayout>
  );
};

export default ProductView;

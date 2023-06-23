import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import ProductCard from "./ProductCard";
import SubElement_2Img from "../../../../assets/images/SubElement_2Img.avif";

const CorouselContainer = () => {
  return (
    <section className="product my-5 mx-[8%]">
      <Swiper
        slidesPerView={window.innerWidth < 600 ? 1 : 3}
        spaceBetween={30}
        pagination={false}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper landingCardSwiper"
      >
        <SwiperSlide>
          <ProductCard
            title="Monochromatic Grey 2 BHK"
            images={[SubElement_2Img]}
            content="Add the cloudy hues to your space."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            title="Monochromatic Grey 2 BHK"
            images={[SubElement_2Img]}
            content="Add the cloudy hues to your space."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            title="Monochromatic Grey 2 BHK"
            images={[SubElement_2Img]}
            content="Add the cloudy hues to your space."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            title="Monochromatic Grey 2 BHK"
            images={[SubElement_2Img]}
            content="Add the cloudy hues to your space."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            title="Monochromatic Grey 2 BHK"
            images={[SubElement_2Img]}
            content="Add the cloudy hues to your space."
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CorouselContainer;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import InfoCorouselList from "./InfoCorouselList";
import SubElement_3Img from "../../../../assets/images/SubElement_3Img.avif";

const InfoCorouselContainer = () => {
  const SubElement_3Ar = [
    {
      icon: SubElement_3Img,
      title: "Warranty",
      constents: [
        "FLAT 10-year warranty¹ - Stay worry-free with our warranty policy on modular products.",
        "Up to 1-year on-site service warranty¹ - Warranty on on-site services such as painting, electrical, plumbing and more.",
        "FLAT 10-year warranty¹ - Stay worry-free with our warranty policy on modular products.",
        "Up to 1-year on-site service warranty¹ - Warranty on on-site services such as painting, electrical, plumbing and more.",
      ],
    },
    {
      icon: SubElement_3Img,
      title: "Warranty",
      constents: [
        "FLAT 10-year warranty¹ - Stay worry-free with our warranty policy on modular products.",
        "Up to 1-year on-site service warranty¹ - Warranty on on-site services such as painting, electrical, plumbing and more.",
        "FLAT 10-year warranty¹ - Stay worry-free with our warranty policy on modular products.",
        "Up to 1-year on-site service warranty¹ - Warranty on on-site services such as painting, electrical, plumbing and more.",
      ],
    },
    {
      icon: SubElement_3Img,
      title: "Warranty",
      constents: [
        "FLAT 10-year warranty¹ - Stay worry-free with our warranty policy on modular products.",
        "Up to 1-year on-site service warranty¹ - Warranty on on-site services such as painting, electrical, plumbing and more.",
        "FLAT 10-year warranty¹ - Stay worry-free with our warranty policy on modular products.",
        "Up to 1-year on-site service warranty¹ - Warranty on on-site services such as painting, electrical, plumbing and more.",
      ],
    },
    {
      icon: SubElement_3Img,
      title: "Warranty",
      constents: [
        "FLAT 10-year warranty¹ - Stay worry-free with our warranty policy on modular products.",
        "Up to 1-year on-site service warranty¹ - Warranty on on-site services such as painting, electrical, plumbing and more.",
        "FLAT 10-year warranty¹ - Stay worry-free with our warranty policy on modular products.",
        "Up to 1-year on-site service warranty¹ - Warranty on on-site services such as painting, electrical, plumbing and more.",
      ],
    },
    {
      icon: SubElement_3Img,
      title: "Warranty",
      constents: [
        "FLAT 10-year warranty¹ - Stay worry-free with our warranty policy on modular products.",
        "Up to 1-year on-site service warranty¹ - Warranty on on-site services such as painting, electrical, plumbing and more.",
        "FLAT 10-year warranty¹ - Stay worry-free with our warranty policy on modular products.",
        "Up to 1-year on-site service warranty¹ - Warranty on on-site services such as painting, electrical, plumbing and more.",
      ],
    },
  ];

  return (
    <section className="my-6 mx-[4%]">
      <Swiper
        slidesPerView={window.innerWidth < 600 ? 1 : 3}
        spaceBetween={window.innerWidth < 600 ? 80 : 30}
        pagination={false}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper InfoCorouselSwiper"
      >
        {SubElement_3Ar.map((item, index) => (
          <SwiperSlide>
            <InfoCorouselList
              key={index}
              icon={item.icon}
              title={item.title}
              contents={item.constents}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default InfoCorouselContainer;

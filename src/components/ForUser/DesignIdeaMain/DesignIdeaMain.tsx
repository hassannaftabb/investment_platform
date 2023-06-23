import React, { useState } from "react";
import CommonLayout from "../../../layouts/Common/CommonLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import message from "../../../assets/images/message.png";
import Button from "../../sub-components/shared/Button/Button";
import { Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import { GetDesignIdeaProjectByIdApi } from "../../../services/DesignIdeas/GetDesignIdeaProjectById";

const DesignIdeaMain = () => {
  const { projectId }: any = useParams();
  const [project, setProject] = useState<any>({});

  React.useEffect(() => {
    (async () => {
      const response: any = await GetDesignIdeaProjectByIdApi(projectId);
      setProject(response.data);
    })();
  }, [projectId]);
  return (
    <CommonLayout>
      <div className="flex justify-between items-center w-full my-7 sm:flex-col">
        <div className="w-[50%] sm:w-full">
          <div className="relative w-full h-[400px] min-h-[300px] shadow">
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
              {Object.keys(project)?.length > 0 &&
                project?.images?.map((item: any, index: any) => (
                  <SwiperSlide key={index}>
                    <img
                      src={item}
                      id={`image-cont-item=${index}`}
                      className="w-[100%] h-full object-cover cursor-pointer"
                      alt="img"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
        <div className="basis-1/2 sm:basis-[100%] pl-6 h-[400px] flex flex-col justify-between">
          <div>
            <div className="py-3">
              <h2 className="flex items-center gap-2 text-xl font-poppins font-semibold">
                {project?.title}
                <span className="flex items-center">
                  <Rating name="rating" value={3} readOnly />
                </span>
              </h2>
              <p
                className="pt-2 font-poppins desc_dip"
                dangerouslySetInnerHTML={{ __html: project?.description }}
              ></p>
              <p className="pt-16 font-poppins text-xl text-secondary-dark flex items-center space-x-2">
                <span className="font-bold">Size: </span>
                <span>{project?.sizeOrDimensions}</span>
              </p>
            </div>
          </div>
          <div className=" mb-8 sm:w-full w-[60%] flex sm:flex-wrap sm:justify-center sm:gap-2 sm:m-auto lg:mt-2 sm:mt-5 lg:justify-start lg:pl-6 sm:pl-0">
            <Button
              title="Send Message"
              icon={
                <img src={message} alt="" className="w-[20px] h-[20px] mr-2" />
              }
              onClick={() => {}}
              className="!font-mulish !font-[700] w-[200px] min-w-[180px] sm:w-[100%] lg:w-[60%] max-h-[50px]"
            />
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default DesignIdeaMain;

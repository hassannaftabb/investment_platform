import React from "react";
import Button from "../../../sub-components/shared/Button/Button";
import { ProductCardProp } from "../SubElementTypes/ProductCardType";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

import { Pagination, Navigation } from "swiper";
import { Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  images,
  title,
  content,
  className,
  save,
  saved = false,
  homePage = false,
  handleSave,
  containerId,
  category,
  address,
  cost,
  zoom = false,
  userId,
  redirectUrl,
}: ProductCardProp) => {
  const [zoomView, setZoomView] = React.useState(zoom);
  const handleClick = () => {};

  const navigate = useNavigate();
  return (
    <div
      className={"max-w-[500px] my-4 relative " + className}
      style={{ boxShadow: "0 2px 4px 0 rgba(65,48,62,.15)" }}
    >
      <div className="min-h-[220px] bg-secondary-extralight">
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
          {images.map((item: any, index: any) => (
            <SwiperSlide key={index}>
              <img
                src={item}
                id={`image-cont-${containerId}-item=${index}`}
                onClick={() => {
                  setZoomView(true);
                }}
                className="w-[100%] h-[220px] sm:h-[240px] object-cover cursor-pointer"
                alt="img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex gap-1 justify-between py-[16px] px-6 w-full">
        <div className="w-full">
          <p
            className="text-[16px] font-[600] font-poppins text-[#41303e] capitalize  cursor-pointer hover:text-primary"
            onClick={() =>
              navigate(redirectUrl ? redirectUrl : `/vendor/${userId}`)
            }
          >
            {title}
          </p>
          {!homePage && (
            <div className="flex justify-between items-center">
              {content && (
                <p className="text-[12px] text-[#41303e] font-poppins">
                  {content}
                </p>
              )}
              <Button
                title="GET FREE QUOTE"
                onClick={handleClick}
                className="bg-transparent rounded-[25px] max-w-[130px] text-[12px] ml-2 sm:w-[120px] sm:h-[30px] sm:whitespace-nowrap sm:text-[12px]"
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
                  {category.map((item, index) => (
                    <Chip key={index} label={item} />
                  ))}
                </div>
              )}

              {/* Save UI Important */}
              {/* <div className='text-[#CDCDCD] flex whitespace-nowrap items-center my-2 font-semibold text-base'>
                <AiFillHeart color='#CDCDCD' style={{ marginRight: "10px" }} />
                {save} Saved
              </div>
              <div className='flex justify-start items-center gap-5 mt-4'>
                <Button className='max-w-[30%]' title='Save' icon={saved?<AiFillHeart style={{marginRight:'10px'}}/>:<AiOutlineHeart style={{marginRight:'10px'}}/>} onClick={handleSave}/>
                <Button className='max-w-[30%]' title='Share' icon={<AiOutlineShareAlt style={{marginRight:'10px'}}/>} onClick={()=>{}}/>
              </div> */}
            </>
          )}
        </div>
        {cost && (
          <div className="text-[18px] font-[600] font-poppins text-primary capitalize">
            ₹ {cost}
          </div>
        )}
      </div>

      {/* Save UI Important */}
      {/* {homePage && (
        <div
          className=' absolute flex items-center justify-center top-[5%] right-[5%] z-10 cursor-pointer'
          onClick={handleSave}
        >
          {saved ? (
            <AiFillHeart className=' text-primary' size={22} />
          ) : (
            <AiOutlineHeart className=' text-secondary-bright' size={22} />
          )}
        </div>
      )} */}
      {zoomView && (
        <>
          <div className="fixed w-[80%] h-[80%] sm:h-[50%] sm:w-[95%] -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] z-40 flex justify-center items-center">
            <div className="relative w-full h-full">
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
                      id={`image-cont-${containerId}-item=${index}`}
                      className="w-[100%] h-full object-cover cursor-pointer"
                      alt="img"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div
              className="absolute top-0 -right-[2%] text-primary cursor-pointer z-30 bg-white rounded-[50%]"
              style={{ transform: "translate(-50%, -50%)" }}
              onClick={() => {
                setZoomView(false);
              }}
            >
              <AiFillCloseCircle className="text-2xl lg:text-lg sm:text-base" />
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

export default ProductCard;

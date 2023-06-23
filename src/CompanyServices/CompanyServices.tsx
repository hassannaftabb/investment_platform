import React from "react";
import { arr } from "./CompanyServicesConst";

const Dummy = () => {
  return (
    <div className='  px-[5rem] py-[2rem]  w-full'>
      <div className=' flex flex-wrap justify-center gap-[2rem] w-full'>
        {arr[0].firstArr.map((arr_data, index) => {
          return (
            <div
              className=' flex  items-center gap-[1.5rem] basis-[28%] '
              key={`${arr_data}${index}`}
            >
              <div
                className='w-[65px] h-[65px]  rounded-full '
                style={{ backgroundColor: " lightgrey" }}
              >
                <img
                  className='rounded-full h-full w-full'
                  src={arr_data.image}
                />
              </div>
              <div className='basis-[60%] '>
                <h2 className='text-sm capitalize'>{arr_data.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dummy;

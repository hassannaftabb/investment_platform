import React from "react";
import {FaFacebook} from "react-icons/fa"
const FacebookLogin = () => {
            
  return( <>
    <div className="flex justify-center  items-center cursor-pointer rounded-[10px] py-[0.5rem] basis-[50%] sm:min-w-[60%] !border !border-secondary-extralight-2 bg-secondary-bright "  >
    <div className="flex justify-center items-center gap-3">
      <FaFacebook size={23} color="#1877F2"/>
      <span className="font-semibold text-[13px]">Facebook</span>
    </div>
  </div>
  </>
  );
};

export default FacebookLogin;

import React, { useState } from "react";
import LogoDark from "../../../assets/images/LogoDark.svg";
import Button from "../../sub-components/shared/Button/Button";
import { AiFillHeart } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { RiBriefcase4Line } from "react-icons/ri";
import bell from "../../../assets/images/icons/bell.svg";
import { Logout } from "../../../services/Auth/Logout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const login = localStorage.getItem("token");
  const navigate = useNavigate();
  const [accountOptions, setAccountOptions] = useState<boolean>(false);
  const LogoutUser = () => {
    Logout();
    toast.info("Logged Out");
  };
  return (
    <nav className='flex w-full items-center justify-between px-[7%] py-[2%] bg-[#F8F8F8] z-30 relative sm:px-2 sm:flex-wrap sm:pt-5'>
      <div
        className='flex items-center gap-2 sm:gap-0 sm:flex-col cursor-pointer'
        onClick={() => navigate("/")}
      >
        <div className='w-[50px] sm:w-[25px]'>
          <img src={LogoDark} alt='logo' />
        </div>
        <div>
          <h3 className='font-mulish font-bold text-xl sm:text-xs'>
            Amar Designer
          </h3>
          <p className=' font-mulish font-semibold text-xs text-left sm:text-[7px] sm:text-center sm:leading-[10px]'>
            You Dream,We Design
          </p>
        </div>
      </div>
      {!login && (
        <div className='flex items-center justify-between gap-4 sm:gap-1 w-[25%] lg:w-fit'>
          <Button
            title='Sign In'
            icon={<BsPersonCircle className='mr-2 text-[17px]' />}
            className='sm:text-xs sm:w-[80px] lg:text-sm lg:px-3 sm:px-0 lg:whitespace-nowrap'
            onClick={() => navigate("/login")}
          />
          <Button
            title='Join as Pro'
            icon={<RiBriefcase4Line className='mr-2 text-[17px]' />}
            className='sm:text-xs sm:w-[100px] lg:text-sm lg:px-3 sm:px-0 lg:whitespace-nowrap'
            onClick={() => navigate("/sign-up")}
          />
        </div>
      )}
      {login && (
        <div className='flex items-center justify-end gap-5 w-[25%]'>
          <AiFillHeart fontSize='26px' className='text-primary' />
          {/* <div className='w-[26px]'>
            <img src={bell} alt='notification' />
          </div> */}
          <div
            className='flex items-center font-mulish text-[#979797] font-semibold text-base cursor-pointer whitespace-nowrap'
            onClick={() => setAccountOptions(!accountOptions)}
          >
            <BsPersonCircle fontSize={"26px"} style={{ marginRight: "10px" }} />
            Your Account
          </div>
        </div>
      )}
      {accountOptions && (
        <div className='absolute top-3/4 right-24 flex flex-col w-1/6'>
          <div
            className='flex items-center justify-center border border-secondary-extralight-2 bg-secondary-bright rounded-lg h-14  w-full font-bold text-primary cursor-pointer'
            onClick={() => {
              navigate("/profile");
            }}
            style={{ zIndex: 50 }}
          >
            Profile
          </div>
          <div
            className='flex items-center justify-center border border-secondary-extralight-2 bg-secondary-bright rounded-lg h-14  w-full font-bold text-primary cursor-pointer'
            onClick={LogoutUser}
            style={{ zIndex: 50 }}
          >
            Logout
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;

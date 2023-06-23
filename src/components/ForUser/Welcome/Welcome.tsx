import React from "react";
import CommonLayout from "../../../layouts/Common/CommonLayout";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import Button from "../../sub-components/shared/Button/Button";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <CommonLayout>
      <div className='h-96 bg-secondary-bright  w-1/2 rounded-lg flex space-y-4 items-center justify-center flex-col my-8 mx-auto'>
        <IoCheckmarkDoneCircleOutline className='text-9xl text-primary' />
        <div className='text-2xl text-secondary-dark font-mulish'>
          You're all set!
        </div>
        <div className='w-1/2'>
          <Button
            title='Continue to Login'
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
    </CommonLayout>
  );
};

export default Welcome;
